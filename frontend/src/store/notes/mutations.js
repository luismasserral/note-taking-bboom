import * as types from './mutation-types';

export default {
  [types.SET_NOTES]: (state, notes) => {
    state.notes = notes;
  },
  [types.ADD_NOTE]: (state, note) => {
    state.notes.unshift(note);
  },
  [types.EDIT_NOTE]: (state, note) => {
    state.notes = state.notes.map((theNote) => {
      if (theNote.id === note.id) {
        return note;
      }

      return theNote;
    });
  },
  [types.DELETE_NOTE]: (state, note) => {
    state.notes = state.notes.filter(theNote => theNote.id !== note.id);
  },
};
