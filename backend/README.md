# Expense Manager Backend

A RESTful API for managing expense reports, built with Node.js and Express.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete expenses
- **State Management**: Track expense states (InProgress, ReadyForApproval, Approved)
- **Filtering**: Filter expenses by username, description, state, and amount range
- **Sorting**: Sort expenses by amount, date, or username
- **Persistent Storage**: Data is stored in a JSON file (`expenses_data.json`)
- **Input Validation**: Comprehensive validation for all API requests
- **Unit Tests**: Full test coverage using Jest and Supertest

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Installation

1. Navigate to the backend directory:
   ```bash
   cd expense-manager/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3001` by default. You can change the port by setting the `PORT` environment variable:

```bash
PORT=4000 npm start
```

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns the server health status.

### List All Expenses
```
GET /api/expenses
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | string | Filter by username (partial match, case-insensitive) |
| `description` | string | Filter by description (partial match, case-insensitive) |
| `state` | string | Filter by state (exact match) |
| `minAmount` | number | Minimum amount filter |
| `maxAmount` | number | Maximum amount filter |
| `sortBy` | string | Sort field: `amount`, `date`, or `username` |
| `sortOrder` | string | Sort order: `asc` or `desc` |

**Example:**
```bash
curl "http://localhost:3001/api/expenses?username=john&sortBy=date&sortOrder=desc"
```

### Get Valid States
```
GET /api/expenses/states
```
Returns the list of valid expense states.

### Get Single Expense
```
GET /api/expenses/:id
```

**Example:**
```bash
curl http://localhost:3001/api/expenses/550e8400-e29b-41d4-a716-446655440001
```

### Create New Expense
```
POST /api/expenses
```

**Request Body:**
```json
{
  "username": "john.doe",
  "description": "Office coffee supplies",
  "amount": 45.99,
  "date": "2025-12-27",
  "state": "InProgress"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Username of the person submitting the expense |
| `description` | string | Yes | Description of the expense |
| `amount` | number | Yes | Amount in dollars (must be positive) |
| `date` | string | No | Date in YYYY-MM-DD format (defaults to today) |
| `state` | string | No | Initial state (defaults to "InProgress") |

**Example:**
```bash
curl -X POST http://localhost:3001/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"username": "john.doe", "description": "Coffee beans", "amount": 29.99}'
```

### Update Expense
```
PUT /api/expenses/:id
```

**Request Body:** Same as create, but all fields are optional.

**Example:**
```bash
curl -X PUT http://localhost:3001/api/expenses/550e8400-e29b-41d4-a716-446655440001 \
  -H "Content-Type: application/json" \
  -d '{"amount": 55.99}'
```

### Update Expense State
```
PATCH /api/expenses/:id/state
```

**Request Body:**
```json
{
  "state": "ReadyForApproval"
}
```

Valid states: `InProgress`, `ReadyForApproval`, `Approved`

**Example:**
```bash
curl -X PATCH http://localhost:3001/api/expenses/550e8400-e29b-41d4-a716-446655440001/state \
  -H "Content-Type: application/json" \
  -d '{"state": "Approved"}'
```

### Delete Expense
```
DELETE /api/expenses/:id
```

**Example:**
```bash
curl -X DELETE http://localhost:3001/api/expenses/550e8400-e29b-41d4-a716-446655440001
```

## Data Model

Each expense has the following structure:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "username": "john.doe",
  "description": "Office coffee supplies - 2kg premium beans",
  "amount": 45.99,
  "date": "2025-12-27",
  "state": "InProgress"
}
```

## Expense States

| State | Description |
|-------|-------------|
| `InProgress` | Expense is being drafted or submitted |
| `ReadyForApproval` | Expense is ready for manager review |
| `Approved` | Expense has been approved for reimbursement |

## Error Handling

The API returns appropriate HTTP status codes and error messages:

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 204 | No Content (successful deletion) |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |

Error response format:
```json
{
  "error": "Error message"
}
```

Or for validation errors:
```json
{
  "errors": ["Error 1", "Error 2"]
}
```

## Project Structure

```
backend/
├── src/
│   ├── index.js              # Express app entry point
│   ├── routes/
│   │   └── expenses.js       # Expense API routes
│   ├── services/
│   │   └── expenseService.js # Business logic & file operations
│   └── middleware/
│       └── validation.js     # Input validation middleware
├── tests/
│   └── expenses.test.js      # Unit tests
├── expenses_data.json        # Data storage file
├── package.json
└── README.md
```

## License

MIT

