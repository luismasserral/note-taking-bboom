const sequelizeError = require('./../services/sequelize-error');
const NoteProvider = require('./../providers/note');

const getNotes = async (req, res) => {
  try {
    const notes = await NoteProvider.findAll(req.user.id);

    return res.status(200).send(notes);
  } catch (error) {
    return sequelizeError(error, res);
  }
};

const createNote = async (req, res) => {
  try {
    await NoteProvider.create(req.body.text, req.user.id);

    const newNote = await NoteProvider.findLast(req.user.id);

    return res.status(200).send(newNote);
  } catch (error) {
    return sequelizeError(error, res);
  }
};

const updateNote = async (req, res) => {
  try {
    await NoteProvider.update(req.body.text, req.params.noteId, req.user.id);

    const note = await NoteProvider.findById(req.params.noteId);

    return res.status(200).send(note);
  } catch (error) {
    return sequelizeError(error, res);
  }
};

const deleteNote = async (req, res) => {
  try {
    await NoteProvider.remove(req.params.noteId, req.user.id);

    return res.status(200).send();
  } catch (error) {
    return sequelizeError(error, res);
  }
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
