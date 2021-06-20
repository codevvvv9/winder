/**
 * 暂时作为项目的入口文件
 */
import Vue from 'vue'
import Button from './button.vue'

Vue.component('w-button', Button)
new Vue({
  el: '#app',
})