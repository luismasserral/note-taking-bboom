<template>
  <div class="note">
    <el-form
      class="note__form"
      label-position="top"
      ref="noteForm"
      v-bind:model="form"
    >
      <el-form-item
        label="Create a new note"
        prop="text"
      >
        <el-input
          class="note__form-text"
          placeholder="Enter your note..."
          ref="noteTextarea"
          type="textarea"
          v-model="form.text"
        />
      </el-form-item>
      <el-button
        class="note__form-create"
        type="primary"
        v-bind:disabled="!form.text.trim().length"
        v-loading="loading"
        v-on:click="create"
      >
        Create note
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NoteForm',
  data() {
    return {
      form: {
        text: '',
      },
      loading: false,
    };
  },
  methods: {
    async create() {
      this.loading = true;

      try {
        await this.$store.dispatch('notes/create', { text: this.form.text });

        this.loading = false;
        this.form.text = '';
        this.$refs.noteTextarea.focus();
      } catch (error) {
        this.$message.error('There was an error creating the note');

        this.loading = false;
      }
    },
  },
};
</script>
