<template>
  <div>
    <w-button>默认按钮</w-button>
    <w-button icon="setting">设置</w-button>
    <w-button :loading="true">加载</w-button>
    <w-button icon="awesome">👍</w-button>
    <w-button disabled>禁止</w-button>
    <w-button icon="left">上一页</w-button>
    <w-button icon="right" iconPosition="right">下一页</w-button>

    <!-- <pre><code>{{ content }}</code></pre> -->
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    "w-button": Button
  },
  data() {
    return {
      content: `
        <w-button>默认按钮</w-button>
    <w-button icon="setting">设置</w-button>
    <w-button :loading="true">加载</w-button>
    <w-button icon="awesome">👍</w-button>
    <w-button disabled>禁止</w-button>
    <w-button icon="left">上一页</w-button>
    <w-button icon="right" iconPosition="right">下一页</w-button>
      `.replace(/^\n+|\t+| +/g, "").trim()
    }
  },
};
</script>

<style>

</style>
