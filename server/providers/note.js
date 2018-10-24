const { Note } = require('../db/models');

const findAll = userId => Note.findAll({
  where: {
    userId,
  },
  order: [['createdAt', 'DESC']],
});

const findLast = userId => Note.findOne({
  where: {
    userId,
  },
  order: [['createdAt', 'DESC']],
});

const findById = id => Note.findOne({
  where: {
    id,
  },
});

const create = (text, color, userId) => Note.create({
  text,
  color,
  userId,
});

const update = (text, color, id, userId) => Note.update(
  {
    text,
    color,
  },
  {
    where: {
      id,
      userId,
    },
  },
);

const remove = (id, userId) => Note.destroy({
  where: {
    id,
    userId,
  },
});

module.exports = {
  findAll,
  findLast,
  findById,
  create,
  update,
  remove,
};
