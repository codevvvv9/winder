import Toast from './Toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message] // default是一个数组
      toast.$mount()
      document.body.appendChild(toast.$el)

    }
  }
}