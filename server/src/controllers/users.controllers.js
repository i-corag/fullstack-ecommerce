import userService from '../services/users.services.js';

//CREATE USER
const createUser = async (req, res) => {
  const user = req.body;
  try {
    const createdUser = await userService.createUser(user);
    return res.status(201).send(createdUser);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//READ ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(201).send(users); //.json(users)
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//READ ONE USER
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    if (!user) {
      return res.status(409).send(`The user ID: "${id}" does not exist`);
    }
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//UPDATE USER
const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedUser = await userService.updateUser(id, body);
    if (!updatedUser) {
      return res.status(409).send(`The user ID: "${id}" does not exist`);
    }
    return res.status(201).send(updatedUser);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//DELETE USER
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.deleteUser(id);
    if (!deletedUser) {
      return res.status(409).send(`The user ID: "${id}" does not exist`);
    }
    res.status(201).send(`The user ID: ${id} was successfully deleted`);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
