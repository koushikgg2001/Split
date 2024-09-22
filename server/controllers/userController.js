// Controller to handle fetching all users
const getAllUsers = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
  };
  
  // Controller to handle fetching a single user by ID
  const getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: `User ${userId}` });
  };
  
  module.exports = { getAllUsers, getUserById };