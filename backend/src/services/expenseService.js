const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, '../../expenses_data.json');

// Valid expense states
const VALID_STATES = ['InProgress', 'ReadyForApproval', 'Approved'];

/**
 * Read expenses from JSON file
 * @returns {Promise<Array>} Array of expenses
 */
async function readExpenses() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.expenses || [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, return empty array
      return [];
    }
    throw error;
  }
}

/**
 * Write expenses to JSON file
 * @param {Array} expenses - Array of expenses to write
 */
async function writeExpenses(expenses) {
  const data = JSON.stringify({ expenses }, null, 2);
  await fs.writeFile(DATA_FILE, data, 'utf8');
}

/**
 * Get all expenses with optional filtering and sorting
 * @param {Object} options - Filter and sort options
 * @returns {Promise<Array>} Filtered and sorted expenses
 */
async function getAllExpenses(options = {}) {
  let expenses = await readExpenses();

  // Apply filters
  if (options.username) {
    expenses = expenses.filter(e => 
      e.username.toLowerCase().includes(options.username.toLowerCase())
    );
  }

  if (options.description) {
    expenses = expenses.filter(e => 
      e.description.toLowerCase().includes(options.description.toLowerCase())
    );
  }

  if (options.state) {
    expenses = expenses.filter(e => e.state === options.state);
  }

  if (options.minAmount !== undefined) {
    expenses = expenses.filter(e => e.amount >= parseFloat(options.minAmount));
  }

  if (options.maxAmount !== undefined) {
    expenses = expenses.filter(e => e.amount <= parseFloat(options.maxAmount));
  }

  // Apply sorting
  if (options.sortBy) {
    const sortOrder = options.sortOrder === 'desc' ? -1 : 1;
    
    expenses.sort((a, b) => {
      let valueA, valueB;
      
      switch (options.sortBy) {
        case 'amount':
          valueA = a.amount;
          valueB = b.amount;
          break;
        case 'date':
          valueA = new Date(a.date).getTime();
          valueB = new Date(b.date).getTime();
          break;
        case 'username':
          valueA = a.username.toLowerCase();
          valueB = b.username.toLowerCase();
          break;
        default:
          return 0;
      }
      
      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
      return 0;
    });
  }

  return expenses;
}

/**
 * Get a single expense by ID
 * @param {string} id - Expense ID
 * @returns {Promise<Object|null>} Expense object or null if not found
 */
async function getExpenseById(id) {
  const expenses = await readExpenses();
  return expenses.find(e => e.id === id) || null;
}

/**
 * Create a new expense
 * @param {Object} expenseData - Expense data (without id)
 * @returns {Promise<Object>} Created expense with generated ID
 */
async function createExpense(expenseData) {
  const expenses = await readExpenses();
  
  const newExpense = {
    id: uuidv4(),
    username: expenseData.username,
    description: expenseData.description,
    amount: parseFloat(expenseData.amount),
    date: expenseData.date || new Date().toISOString().split('T')[0],
    state: expenseData.state || 'InProgress'
  };

  expenses.push(newExpense);
  await writeExpenses(expenses);
  
  return newExpense;
}

/**
 * Update an existing expense
 * @param {string} id - Expense ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object|null>} Updated expense or null if not found
 */
async function updateExpense(id, updates) {
  const expenses = await readExpenses();
  const index = expenses.findIndex(e => e.id === id);
  
  if (index === -1) {
    return null;
  }

  // Only update allowed fields
  const allowedUpdates = ['username', 'description', 'amount', 'date', 'state'];
  const filteredUpdates = {};
  
  for (const key of allowedUpdates) {
    if (updates[key] !== undefined) {
      filteredUpdates[key] = key === 'amount' ? parseFloat(updates[key]) : updates[key];
    }
  }

  expenses[index] = { ...expenses[index], ...filteredUpdates };
  await writeExpenses(expenses);
  
  return expenses[index];
}

/**
 * Update expense state
 * @param {string} id - Expense ID
 * @param {string} newState - New state value
 * @returns {Promise<Object|null>} Updated expense or null if not found
 */
async function updateExpenseState(id, newState) {
  if (!VALID_STATES.includes(newState)) {
    throw new Error(`Invalid state. Must be one of: ${VALID_STATES.join(', ')}`);
  }
  
  return updateExpense(id, { state: newState });
}

/**
 * Delete an expense
 * @param {string} id - Expense ID
 * @returns {Promise<boolean>} True if deleted, false if not found
 */
async function deleteExpense(id) {
  const expenses = await readExpenses();
  const index = expenses.findIndex(e => e.id === id);
  
  if (index === -1) {
    return false;
  }

  expenses.splice(index, 1);
  await writeExpenses(expenses);
  
  return true;
}

/**
 * Get valid expense states
 * @returns {Array<string>} Array of valid states
 */
function getValidStates() {
  return [...VALID_STATES];
}

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  updateExpenseState,
  deleteExpense,
  getValidStates,
  VALID_STATES,
  // Exported for testing
  readExpenses,
  writeExpenses
};

