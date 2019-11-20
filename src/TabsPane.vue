<template lang="">
  <div class="tabsPane">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "WinderTabsPane",
    inject: ['eventBus'],
    props: {
      // name: {
      //   type: String | Number,
      //   required: true
      // }
    },
    created() {
      this.eventBus.$on("update:selected", (name) => {
        console.log('name is', name);
      })
    },
    methods: {
    },
  }
</script>
<style lang="">
  .tabsPane {}
</style>