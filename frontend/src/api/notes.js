import axios from './../setup/axios';

const getNotes = () => axios.get('/notes');

const createNote = params => axios.post('/notes', params);

const updateNote = note => axios.put(`/notes/${note.id}`, note);

const deleteNote = note => axios.delete(`/notes/${note.id}`);

export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
