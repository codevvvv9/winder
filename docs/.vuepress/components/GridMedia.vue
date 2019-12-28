<template>
  <div>
    <w-row gutter="20">
      <w-col span="12" class="blueCol" :ipad="ipadObj">col-12</w-col>
      <w-col span="12" class="darkBlueCol">col-12</w-col>
    </w-row>
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'

export default {
  components: {
    "w-col": Col,
    "w-row": Row
  },
  data() {
    return {
      ipadObj: {
        span: "3",
        offset: "2"
      }
    }
  },
};
</script>

<style scoped lang="scss">
  $first-color: #00a0e9b3;
  $second-color: #2fc0ff;
  .blueCol {
    background: $second-color;
  }
  .darkBlueCol {
    background: $first-color
  }
  .row {
    flex-wrap: nowrap;
  }
</style>
