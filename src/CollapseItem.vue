<template>
  <div class="collapseItem" @click="showContent">
    <div class="title">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      open: false,
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (names) => {
      if (names.includes(this.name)) {
        this.open = true
      } else {
        this.open = false
      }
    })
  },
  watch: {

  },
  methods: {
    showContent() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit("update:removeSelected", this.name)
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name)
      }
    }
  },
  components: {

  },
};
</script>

<style scoped lang="scss">
  @import "var";
  .collapseItem {
    > .title {
      border: 1px solid $border-color;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child  {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        border-bottom: 1px solid $border-color;
      }
    }
    > .content {
      padding: 0 8px;
    }
  }
</style>
