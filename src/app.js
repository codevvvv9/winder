import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    test() {
      
    }
  },
})
// 开启单元测试
const expect = chai.expect
chai.use(spies) //使用chai-spies监听函数
try {
  {
    // 测试icon的name: name字段是不是正常
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: "settings"
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.equal("#i-settings")
    vm.$el.remove()
    vm.$destroy()
  } {
    //测试icon name中的 loading属性
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: "setting",
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.equal("#i-loading")
    vm.$el.remove()
    vm.$destroy()
  } {
    // 测试icon中的iconPosition
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: "setting",
        iconPosition: "left"
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    let {
      order
    } = window.getComputedStyle(svg)
    expect(order).to.equal("1")
    vm.$el.remove()
    vm.$destroy()
  } {
    //监听click事件
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: "setting"
      }
    })
    vm.$mount()
    let spy = chai.spy(function () {
      console.log("click 被点击了");
    })
    vm.$on("click", spy)
    //期望这个函数会被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach( error => {
    console.error(error.message)
  });
}
