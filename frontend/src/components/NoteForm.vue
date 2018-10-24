<template>
  <div class="note">
    <el-form
      class="note__form"
      label-position="top"
      ref="noteForm"
      v-bind:model="form"
    >
      <note-form-color :on-change="updateColor" />
      <el-form-item
        label="Create a new note"
        prop="text"
      >
        <el-input
          class="notes__form-text"
          placeholder="Enter your note..."
          ref="noteTextarea"
          type="textarea"
          v-model="form.text"
          :style="{'box-shadow': '0 0 12px' + form.color}"
        />
      </el-form-item>
      <el-button
        class="notes__form-create"
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
import NoteFormColor from '@/components/NoteFormColor.vue';

export default {
  name: 'NoteForm',
  components: {
    NoteFormColor,
  },
  data() {
    return {
      form: {
        color: '#4f8ad9',
        text: '',
      },
      loading: false,
    };
  },
  methods: {
    async create() {
      this.loading = true;

      try {
        await this.$store.dispatch('notes/create', {
          color: this.form.color,
          text: this.form.text,
        });

        this.loading = false;
        this.form.text = '';
        this.$refs.noteTextarea.focus();
      } catch (error) {
        this.$message.error('There was an error creating the note');

        this.loading = false;
      }
    },
    updateColor(color) {
      this.form.color = color;
    },
  },
};
</script>
