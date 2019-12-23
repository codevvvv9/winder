<template>
  <div>
    <w-button-group>
      <w-button icon="setting">设置</w-button>
      <w-button :loading="true">加载</w-button>
      <w-button icon="awesome">👍</w-button>
      <w-button icon="left">上一页</w-button>
      <w-button icon="right" iconPosition="right">下一页</w-button>
    </w-button-group>

  </div>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from '../../../src/ButtonGroup'
export default {
  components: {
    "w-button": Button,
    "w-button-group": ButtonGroup
  },
  data() {
    return {
    }
  },
};
</script>

<style>

</style>
