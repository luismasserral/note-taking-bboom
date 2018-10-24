<template>
  <div class="notes__list">
    <transition-group name="list">
      <note-list-item
        v-for="note in notes"
        :key="note.id"
        :note="note"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NoteListItem from '@/components/NoteListItem.vue';

export default {
  name: 'NoteList',
  components: {
    NoteListItem,
  },
  computed: {
    ...mapGetters({
      notes: 'notes/notes',
    }),
  },
};
</script>
