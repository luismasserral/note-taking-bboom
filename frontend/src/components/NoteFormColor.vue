<template>
  <el-select
    class="notes__color-select"
    placeholder="Select"
    v-model="value"
    :style="styles"
  >
    <el-option
      v-for="color in colors"
      :key="color.hex"
      :label="color.label"
      :value="color.hex"
    >
      <span :style="{color: color.hex}">{{ color.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'NoteFormColor',
  props: {
    onChange: {
      type: Function,
      required: true,
    },
    styles: {
      type: Object,
      required: false,
      default: null,
    },
  },
  watch: {
    value(newValue) {
      this.onChange(newValue);
    },
  },
  data() {
    return {
      value: '#4f8ad9',
      colors: [
        {
          label: 'Blue',
          hex: '#4f8ad9',
        },
        {
          label: 'Red',
          hex: '#df6363',
        },
        {
          label: 'Green',
          hex: '#85d8a4',
        },
        {
          label: 'Orange',
          hex: '#ffaa08',
        },
      ],
    };
  },
};
</script>
