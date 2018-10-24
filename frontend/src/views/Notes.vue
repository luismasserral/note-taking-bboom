<template>
  <div class="notes">
    <note-form />
    <note-list />
  </div>
</template>

<script>
import NoteForm from '@/components/NoteForm.vue';
import NoteList from '@/components/NoteList.vue';

export default {
  name: 'Notes',
  components: {
    NoteForm,
    NoteList,
  },
  created() {
    this.$store.dispatch('notes/getNotes');
  },
};
</script>
