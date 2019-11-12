import Toast from "./Toast.vue";

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        message, 
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    };
  }
};

/**
 * create a Toast instance
 * @param { Object } param0 
 */
function createToast({ Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData
  });
  toast.$slots.default = [message]; // default是一个数组
  toast.$mount();
  toast.$on("close", onClose)
  document.body.appendChild(toast.$el);
  return toast
}
