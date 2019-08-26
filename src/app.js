import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component("w-input", Input)

new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    setTimeout(() => {
      let event = new Event("change")
      let inputElement = this.$el.querySelector("input")
      // Dispatch the event.
      inputElement.dispatchEvent(event);
    }, 300)
  },
  methods: {
    inputChange(e) {
      console.log("$event is", e);
    }
  },
})