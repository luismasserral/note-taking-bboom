<template>
  <el-card
    class="box-card notes__list-item"
    :style="{'background-color': hexToRgb(note.color)}"
  >
    <div slot="header" class="clearfix">
      <span>{{ note.createdAt | date }}</span>
      <el-button
        class="notes__list-item-action"
        type="text"
        v-if="!editable"
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
      <el-button
        class="notes__list-item-action"
        type="text"
        v-if="editable"
        @click="disableEdit"
      >
        Cancel
      </el-button>
      <el-button
        class="notes__list-item-action"
        type="text"
        v-if="editable"
        @click="updateNote"
      >
        Save
      </el-button>
      <note-form-color
        :on-change="updateColor"
        :styles="{right: '130px', top: '7px'}"
        v-if="editable"
      />
    </div>
    <div
      class="text item notes__list-item-text"
      ref="noteText"
      tabindex="1"
      :contenteditable="editable"
    >
      {{ note.text }}
    </div>
  </el-card>
</template>

<script>
import NoteFormColor from '@/components/NoteFormColor.vue';

export default {
  name: 'NoteListItem',
  components: {
    NoteFormColor,
  },
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
    hexToRgb(value) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      const rgbValues = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };

      return `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, .5)`;
    },
    enableEdit() {
      this.editable = true;
      this.$refs.noteText.focus();
    },
    disableEdit() {
      this.editable = false;
      this.note = Object.assign({}, this.originalNote);
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
    updateColor(color) {
      this.note.color = color;
    },
  },
};
</script>
