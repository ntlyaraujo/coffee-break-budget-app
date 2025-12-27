const express = require('express');
const router = express.Router();
const expenseService = require('../services/expenseService');
const { validateExpense, validateStateUpdate, validateExpenseId } = require('../middleware/validation');

/**
 * GET /api/expenses
 * List all expenses with optional filtering and sorting
 * 
 * Query Parameters:
 * - username: Filter by username (partial match)
 * - description: Filter by description (partial match)
 * - state: Filter by state (exact match)
 * - minAmount: Minimum amount filter
 * - maxAmount: Maximum amount filter
 * - sortBy: Sort field (amount, date, username)
 * - sortOrder: Sort order (asc, desc)
 */
router.get('/', async (req, res, next) => {
  try {
    const { username, description, state, minAmount, maxAmount, sortBy, sortOrder } = req.query;
    
    const expenses = await expenseService.getAllExpenses({
      username,
      description,
      state,
      minAmount,
      maxAmount,
      sortBy,
      sortOrder
    });

    res.json({
      count: expenses.length,
      expenses
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/expenses/states
 * Get list of valid expense states
 */
router.get('/states', (req, res) => {
  res.json({
    states: expenseService.getValidStates()
  });
});

/**
 * GET /api/expenses/:id
 * Get a single expense by ID
 */
router.get('/:id', validateExpenseId, async (req, res, next) => {
  try {
    const expense = await expenseService.getExpenseById(req.params.id);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/expenses
 * Create a new expense
 * 
 * Request Body:
 * - username: string (required)
 * - description: string (required)
 * - amount: number (required)
 * - date: string (optional, YYYY-MM-DD format, defaults to today)
 * - state: string (optional, defaults to 'InProgress')
 */
router.post('/', validateExpense, async (req, res, next) => {
  try {
    const expense = await expenseService.createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/expenses/:id
 * Update an existing expense
 */
router.put('/:id', validateExpenseId, validateExpense, async (req, res, next) => {
  try {
    const expense = await expenseService.updateExpense(req.params.id, req.body);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/expenses/:id/state
 * Update expense state
 * 
 * Request Body:
 * - state: string (required, one of: InProgress, ReadyForApproval, Approved)
 */
router.patch('/:id/state', validateExpenseId, validateStateUpdate, async (req, res, next) => {
  try {
    const expense = await expenseService.updateExpenseState(req.params.id, req.body.state);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/expenses/:id
 * Delete an expense
 */
router.delete('/:id', validateExpenseId, async (req, res, next) => {
  try {
    const deleted = await expenseService.deleteExpense(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;

