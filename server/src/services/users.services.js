import bcrypt from 'bcrypt';
import crypto from 'crypto';
import User from '../models/User.model.js';

const createUser = async (user) => {
  let newUser = await User.findAll({
    where: { email: user.email },
  });
  if (newUser.length > 0) {
    const error = `The email "${user.email}" is already registered`;
    return error;
  } else {
    const id = crypto.randomBytes(10).toString('hex');
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    newUser = {
      id,
      ...user,
    };
    await User.create(newUser);
    return newUser;
  }
};

const getUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const getUser = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const updateUser = async (id, body) => {
  let updatedUser = await getUser(id);
  console.log(updatedUser);
  if (updatedUser) {
    if (body.password) {
      const salt = bcrypt.genSaltSync(10);
      body.password = bcrypt.hashSync(body.password, salt);
    }
    updatedUser = await User.update({ ...body }, { where: { id } });

    return `User successfully updated`;
  }
  return updatedUser;
};

const deleteUser = async (id) => {
  let user = await getUser(id);
  if (user) {
    await user.destroy({
      where: { id },
    });
  }
  return user;
};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
