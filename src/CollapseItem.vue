<template>
  <div class="collapseItem" @click="showContent">
    <div class="title">
      {{ title }} {{ single }}
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
      single: false
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (name) => {
      if (name !== this.name) {
        if (this.single) {
          this.close()
        }
      } else {
        this.show()
      }
    })
  },
  watch: {

  },
  methods: {
    showContent() {
      if (this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit("update:selected", this.name)
      }
    },
    close() {
      this.open = false
    },
    show() {
      this.open = true
    }
  },
  components: {

  },
};
</script>

<style scoped lang="scss">
  $border-radius: 4px;
  $border-color: #dddddd;
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
