<template>
  <div>
    <w-input :readonly="true" value="这是只读的"></w-input>
  </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
  components: {
    "w-input": Input
  },
};
</script>

<style scoped lang="scss">

</style>
