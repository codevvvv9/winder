<template>
  <div>
    <w-layout>
      <w-sider class="w-sider">sider</w-sider>
      <w-layout>
        <w-header class="w-header">header</w-header>
        <w-content class="w-content">content</w-content>
        <w-footer class="w-footer">footer</w-footer>
      </w-layout>
    </w-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/Layout'
  import Header from '../../../src/Header'
  import Content from '../../../src/Content'
  import Footer from '../../../src/Footer'
  import Sider from '../../../src/Sider'
  export default {
    components: {
      "w-layout": Layout,
      "w-header": Header,
      "w-content": Content,
      "w-footer": Footer,
      "w-sider": Sider
    },
  };
</script>

<style scoped lang="scss">
  .w-header,
  .w-footer {
    text-align: center;
    line-height: 60px;
    background: #b3c0d1;
  }

  .w-content {
    line-height: 160px;
    background: #e9eef3;
    text-align: center;
  }

  .w-sider {
    width: 100px;
    background: #d3dce6;
  }
</style>