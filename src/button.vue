<template>
  <button class="w-button">按钮</button>
</template>

<script>
export default {
  name: "w-button",

  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.w-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em; /*不需要给按钮设置宽度，用padding来做*/
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
