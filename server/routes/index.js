const ensureAuthenticated = require('./../middlewares/auth');
const validateSchema = require('./../middlewares/schema-validator')(true);

const AuthController = require('./../controllers/auth');
const NoteController = require('./../controllers/note');

module.exports = (app) => {
  app.post('/auth/login', validateSchema, AuthController.login);

  app.get('/notes', ensureAuthenticated, NoteController.getNotes);
  app.post('/notes', [ensureAuthenticated, validateSchema], NoteController.createNote);
  app.put('/notes/:noteId(\\d+)', [ensureAuthenticated, validateSchema], NoteController.updateNote);
  app.delete('/notes/:noteId(\\d+)', ensureAuthenticated, NoteController.deleteNote);
};
