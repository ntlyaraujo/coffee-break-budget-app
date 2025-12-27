const { VALID_STATES } = require('../services/expenseService');

/**
 * Validate expense creation/update request body
 */
function validateExpense(req, res, next) {
  const { username, description, amount, date, state } = req.body;
  const errors = [];

  // For creation, username, description, and amount are required
  if (req.method === 'POST') {
    if (!username || typeof username !== 'string' || username.trim() === '') {
      errors.push('Username is required and must be a non-empty string');
    }
    
    if (!description || typeof description !== 'string' || description.trim() === '') {
      errors.push('Description is required and must be a non-empty string');
    }
    
    if (amount === undefined || amount === null) {
      errors.push('Amount is required');
    }
  }

  // Validate amount if provided
  if (amount !== undefined) {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      errors.push('Amount must be a valid positive number');
    }
  }

  // Validate date if provided
  if (date !== undefined) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      errors.push('Date must be in YYYY-MM-DD format');
    } else {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        errors.push('Date is not a valid date');
      }
    }
  }

  // Validate state if provided
  if (state !== undefined && !VALID_STATES.includes(state)) {
    errors.push(`State must be one of: ${VALID_STATES.join(', ')}`);
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

/**
 * Validate state update request body
 */
function validateStateUpdate(req, res, next) {
  const { state } = req.body;

  if (!state) {
    return res.status(400).json({ error: 'State is required' });
  }

  if (!VALID_STATES.includes(state)) {
    return res.status(400).json({ 
      error: `Invalid state. Must be one of: ${VALID_STATES.join(', ')}` 
    });
  }

  next();
}

/**
 * Validate UUID format for expense ID
 */
function validateExpenseId(req, res, next) {
  const { id } = req.params;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(id)) {
    return res.status(400).json({ error: 'Invalid expense ID format' });
  }

  next();
}

module.exports = {
  validateExpense,
  validateStateUpdate,
  validateExpenseId
};

