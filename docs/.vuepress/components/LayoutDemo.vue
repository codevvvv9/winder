<template>
  <div>
    <w-layout>
      <w-header>header</w-header>
      <w-content>content</w-content>
      <w-footer>footer</w-footer>
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

</style>
