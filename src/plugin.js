export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (params) {
      console.log('i\'m a toast');
    }
  }
}