import * as types from './mutation-types';
import NotesAPI from './../../api/notes';

const getNotes = async ({ commit }) => {
  try {
    const response = await NotesAPI.getNotes();

    commit(types.SET_NOTES, response.data);
  } catch (err) {
    commit(types.SET_NOTES, []);
  }
};

const create = async ({ commit }, payload) => {
  const response = await NotesAPI.createNote(payload);

  commit(types.ADD_NOTE, response.data);
};

const update = async ({ commit }, payload) => {
  await NotesAPI.updateNote(payload);

  commit(types.EDIT_NOTE, payload);
};

const remove = async ({ commit }, payload) => {
  await NotesAPI.deleteNote(payload);

  commit(types.DELETE_NOTE, payload);
};

export default {
  getNotes,
  create,
  update,
  remove,
};
