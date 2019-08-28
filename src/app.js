import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'
import Row from './Row.vue'
import Col from './Col.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component("w-input", Input)
Vue.component("w-row", Row)
Vue.component("w-col", Col)

new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false,
      message: 'hi, v-model'
    }
  },
  created() {
    
  },
  methods: {
    changeMessage() {
      this.message += '!'
    }
  },
})