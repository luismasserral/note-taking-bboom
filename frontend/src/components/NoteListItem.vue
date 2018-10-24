<template>
  <el-card class="box-card notes__list-item">
    <div slot="header" class="clearfix">
      <span>{{ note.createdAt | date }}</span>
      <el-button
        class="notes__list-item-action"
        type="text"
        @click="remove"
      >
        Delete
      </el-button>
      <el-button
        class="notes__list-item-action"
        type="text"
        v-if="!editable"
        @click="enableEdit"
      >
        Edit
      </el-button>
    </div>
    <div
      class="text item notes__list-item-text"
      ref="noteText"
      tabindex="1"
      :contenteditable="editable"
      @blur="updateNote"
    >
      {{ note.text }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'NoteListItem',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  filters: {
    date(value) {
      const date = new Date(value);

      return `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} - ${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`;
    },
  },
  data() {
    return {
      editable: false,
      originalNote: Object.assign({}, this.note),
    };
  },
  methods: {
    enableEdit() {
      this.editable = true;
      this.$refs.noteText.focus();
    },
    async updateNote(event) {
      this.note.text = event.target.innerText;

      try {
        await this.$store.dispatch('notes/update', this.note);
      } catch (error) {
        this.$message.error('There was an error updating the note');

        this.note = Object.assign({}, this.originalNote);
      }

      this.editable = false;
    },
    async remove() {
      try {
        await this.$store.dispatch('notes/remove', this.note);
      } catch (error) {
        this.$message.error('There was an error deleting the note');
      }
    },
  },
};
</script>
