const request = require('supertest');
const fs = require('fs').promises;
const path = require('path');
const app = require('../src/index');

const DATA_FILE = path.join(__dirname, '../expenses_data.json');

// Helper to read current data
async function readData() {
  const data = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

// Helper to write test data
async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Store original data to restore after tests
let originalData;

beforeAll(async () => {
  originalData = await readData();
});

afterAll(async () => {
  // Restore original data
  await writeData(originalData);
});

beforeEach(async () => {
  // Reset to known test state before each test
  const testData = {
    expenses: [
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        username: 'john.doe',
        description: 'Office coffee supplies',
        amount: 45.99,
        date: '2025-12-27',
        state: 'InProgress'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        username: 'jane.smith',
        description: 'Team lunch',
        amount: 125.50,
        date: '2025-12-26',
        state: 'ReadyForApproval'
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440003',
        username: 'john.doe',
        description: 'Printer supplies',
        amount: 89.00,
        date: '2025-12-25',
        state: 'Approved'
      }
    ]
  };
  await writeData(testData);
});

describe('GET /api/expenses', () => {
  it('should return all expenses', async () => {
    const res = await request(app).get('/api/expenses');
    
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(3);
    expect(res.body.expenses).toHaveLength(3);
  });

  it('should filter by username', async () => {
    const res = await request(app).get('/api/expenses?username=john');
    
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(2);
    expect(res.body.expenses.every(e => e.username.includes('john'))).toBe(true);
  });

  it('should filter by description', async () => {
    const res = await request(app).get('/api/expenses?description=coffee');
    
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(1);
    expect(res.body.expenses[0].description).toContain('coffee');
  });

  it('should filter by state', async () => {
    const res = await request(app).get('/api/expenses?state=Approved');
    
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(1);
    expect(res.body.expenses[0].state).toBe('Approved');
  });

  it('should filter by amount range', async () => {
    const res = await request(app).get('/api/expenses?minAmount=50&maxAmount=100');
    
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(1);
    expect(res.body.expenses[0].amount).toBe(89);
  });

  it('should sort by amount ascending', async () => {
    const res = await request(app).get('/api/expenses?sortBy=amount&sortOrder=asc');
    
    expect(res.status).toBe(200);
    expect(res.body.expenses[0].amount).toBe(45.99);
    expect(res.body.expenses[2].amount).toBe(125.50);
  });

  it('should sort by date descending', async () => {
    const res = await request(app).get('/api/expenses?sortBy=date&sortOrder=desc');
    
    expect(res.status).toBe(200);
    expect(res.body.expenses[0].date).toBe('2025-12-27');
    expect(res.body.expenses[2].date).toBe('2025-12-25');
  });
});

describe('GET /api/expenses/:id', () => {
  it('should return a single expense by ID', async () => {
    const res = await request(app).get('/api/expenses/550e8400-e29b-41d4-a716-446655440001');
    
    expect(res.status).toBe(200);
    expect(res.body.id).toBe('550e8400-e29b-41d4-a716-446655440001');
    expect(res.body.username).toBe('john.doe');
  });

  it('should return 404 for non-existent expense', async () => {
    const res = await request(app).get('/api/expenses/550e8400-e29b-41d4-a716-446655440099');
    
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Expense not found');
  });

  it('should return 400 for invalid ID format', async () => {
    const res = await request(app).get('/api/expenses/invalid-id');
    
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Invalid expense ID format');
  });
});

describe('POST /api/expenses', () => {
  it('should create a new expense', async () => {
    const newExpense = {
      username: 'alice.johnson',
      description: 'Conference registration fee',
      amount: 299.00,
      date: '2025-12-28'
    };

    const res = await request(app)
      .post('/api/expenses')
      .send(newExpense);
    
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.username).toBe('alice.johnson');
    expect(res.body.description).toBe('Conference registration fee');
    expect(res.body.amount).toBe(299);
    expect(res.body.state).toBe('InProgress');

    // Verify it was persisted
    const data = await readData();
    expect(data.expenses).toHaveLength(4);
  });

  it('should create expense with default date if not provided', async () => {
    const newExpense = {
      username: 'bob.wilson',
      description: 'Taxi fare',
      amount: 35.50
    };

    const res = await request(app)
      .post('/api/expenses')
      .send(newExpense);
    
    expect(res.status).toBe(201);
    expect(res.body.date).toBeDefined();
  });

  it('should return 400 if username is missing', async () => {
    const res = await request(app)
      .post('/api/expenses')
      .send({ description: 'Test', amount: 10 });
    
    expect(res.status).toBe(400);
    expect(res.body.errors).toContain('Username is required and must be a non-empty string');
  });

  it('should return 400 if amount is missing', async () => {
    const res = await request(app)
      .post('/api/expenses')
      .send({ username: 'test', description: 'Test' });
    
    expect(res.status).toBe(400);
    expect(res.body.errors).toContain('Amount is required');
  });

  it('should return 400 for invalid amount', async () => {
    const res = await request(app)
      .post('/api/expenses')
      .send({ username: 'test', description: 'Test', amount: -10 });
    
    expect(res.status).toBe(400);
    expect(res.body.errors).toContain('Amount must be a valid positive number');
  });

  it('should return 400 for invalid date format', async () => {
    const res = await request(app)
      .post('/api/expenses')
      .send({ username: 'test', description: 'Test', amount: 10, date: '27-12-2025' });
    
    expect(res.status).toBe(400);
    expect(res.body.errors).toContain('Date must be in YYYY-MM-DD format');
  });

  it('should return 400 for invalid state', async () => {
    const res = await request(app)
      .post('/api/expenses')
      .send({ username: 'test', description: 'Test', amount: 10, state: 'InvalidState' });
    
    expect(res.status).toBe(400);
  });
});

describe('PUT /api/expenses/:id', () => {
  it('should update an existing expense', async () => {
    const updates = {
      description: 'Updated coffee supplies',
      amount: 55.99
    };

    const res = await request(app)
      .put('/api/expenses/550e8400-e29b-41d4-a716-446655440001')
      .send(updates);
    
    expect(res.status).toBe(200);
    expect(res.body.description).toBe('Updated coffee supplies');
    expect(res.body.amount).toBe(55.99);
    expect(res.body.username).toBe('john.doe'); // Unchanged field
  });

  it('should return 404 for non-existent expense', async () => {
    const res = await request(app)
      .put('/api/expenses/550e8400-e29b-41d4-a716-446655440099')
      .send({ description: 'Test' });
    
    expect(res.status).toBe(404);
  });
});

describe('PATCH /api/expenses/:id/state', () => {
  it('should update expense state to ReadyForApproval', async () => {
    const res = await request(app)
      .patch('/api/expenses/550e8400-e29b-41d4-a716-446655440001/state')
      .send({ state: 'ReadyForApproval' });
    
    expect(res.status).toBe(200);
    expect(res.body.state).toBe('ReadyForApproval');
  });

  it('should update expense state to Approved', async () => {
    const res = await request(app)
      .patch('/api/expenses/550e8400-e29b-41d4-a716-446655440002/state')
      .send({ state: 'Approved' });
    
    expect(res.status).toBe(200);
    expect(res.body.state).toBe('Approved');
  });

  it('should return 400 for invalid state', async () => {
    const res = await request(app)
      .patch('/api/expenses/550e8400-e29b-41d4-a716-446655440001/state')
      .send({ state: 'InvalidState' });
    
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('Invalid state');
  });

  it('should return 400 if state is missing', async () => {
    const res = await request(app)
      .patch('/api/expenses/550e8400-e29b-41d4-a716-446655440001/state')
      .send({});
    
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('State is required');
  });

  it('should return 404 for non-existent expense', async () => {
    const res = await request(app)
      .patch('/api/expenses/550e8400-e29b-41d4-a716-446655440099/state')
      .send({ state: 'Approved' });
    
    expect(res.status).toBe(404);
  });
});

describe('DELETE /api/expenses/:id', () => {
  it('should delete an expense', async () => {
    const res = await request(app)
      .delete('/api/expenses/550e8400-e29b-41d4-a716-446655440001');
    
    expect(res.status).toBe(204);

    // Verify it was deleted
    const data = await readData();
    expect(data.expenses).toHaveLength(2);
    expect(data.expenses.find(e => e.id === '550e8400-e29b-41d4-a716-446655440001')).toBeUndefined();
  });

  it('should return 404 for non-existent expense', async () => {
    const res = await request(app)
      .delete('/api/expenses/550e8400-e29b-41d4-a716-446655440099');
    
    expect(res.status).toBe(404);
  });
});

describe('GET /api/expenses/states', () => {
  it('should return valid expense states', async () => {
    const res = await request(app).get('/api/expenses/states');
    
    expect(res.status).toBe(200);
    expect(res.body.states).toEqual(['InProgress', 'ReadyForApproval', 'Approved']);
  });
});

describe('GET /api/health', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/api/health');
    
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.timestamp).toBeDefined();
  });
});

describe('404 Handler', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/api/unknown');
    
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Not Found');
  });
});

