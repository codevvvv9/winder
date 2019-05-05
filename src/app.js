import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)

new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false
    }
  },
})