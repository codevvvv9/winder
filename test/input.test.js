const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe("props", () => {
    it('接受value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: 'wushao'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('wushao')
      vm.$destroy()
    })
    it("接受disabled", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement['disabled']).to.equal(true)
    })
    it("接受readonly", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement['readOnly']).to.equal(true)
    })
    it("接受 error", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: "你写错了"
        }
      }).$mount()
      const useElement = vm.$el.querySelector("use")
      expect(useElement.getAttribute('xlink:href')).to.equal("#i-error")
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.innerText).to.equal("你写错了")
    })
  })
})