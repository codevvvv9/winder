<template lang="">
  <div class="tabsPane" :class="tabsPaneClasses" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "WinderTabsPane",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      tabsPaneClasses() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on("update:selected", (name) => {
        if (this.name === name) {
          this.active = true
        } else {
          this.active = false
        }
      })
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .tabsPane {
    &.active {
      background: green;
    }
  }
</style>