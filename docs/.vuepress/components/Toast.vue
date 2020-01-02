<template>
  <div>
    <w-toast :autoClose="false" position="middle">Toast</w-toast>
  </div>
</template>

<script>
  import Toast from '../../../src/Toast'
  export default {
    components: {
      "w-toast": Toast
    },
  };
</script>

<style scoped lang="scss">

</style>