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
    const Constructor = Vue.extend(Input)
    let vm
    afterEach( () => {
      vm.$destroy()
    })
    it('接受value', () => {
      vm = new Constructor({
        propsData: {
          value: 'wushao'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('wushao')
      vm.$destroy()
    })
    it("接受disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement['disabled']).to.equal(true)
    })
    it("接受readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement['readOnly']).to.equal(true)
    })
    it("接受 error", () => {
      vm = new Constructor({
        propsData: {
          error: "你写错了"
        }
      }).$mount()
      const useElement = vm.$el.querySelector("use")
      expect(useElement.getAttribute('xlink:href')).to.equal("#i-error")
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.innerText).to.equal("你写错了")
    })
    describe("事件", () => {
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(() => {
        vm.$destroy()
      })
      it("支持change事件", () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on('change', callback)
        //重点是如何主动触发事件
        var event = new Event('change');
        var inputElement = vm.$el.querySelector("input")
        // Dispatch the event.
        inputElement.dispatchEvent(event);
        //测试change是否触发了
        expect(callback).to.have.been.called
        //测试change事件的第一个参数
        expect(callback).to.have.been.calledWith(event)
      })
      it("支持input事件", () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on('input', callback)
        //重点是如何主动触发事件
        var event = new Event('input');
        var inputElement = vm.$el.querySelector("input")
        // Dispatch the event.
        inputElement.dispatchEvent(event);
        //测试change是否触发了
        expect(callback).to.have.been.called
        //测试change事件的第一个参数
        expect(callback).to.have.been.calledWith(event)
      })
      it("支持focus事件", () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on('focus', callback)
        //重点是如何主动触发事件
        var event = new Event('focus');
        var inputElement = vm.$el.querySelector("input")
        // Dispatch the event.
        inputElement.dispatchEvent(event);
        //测试change是否触发了
        expect(callback).to.have.been.called
        //测试change事件的第一个参数
        expect(callback).to.have.been.calledWith(event)
      })
      it("支持blur事件", () => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake();
        vm.$on('blur', callback)
        //重点是如何主动触发事件
        var event = new Event('blur');
        var inputElement = vm.$el.querySelector("input")
        // Dispatch the event.
        inputElement.dispatchEvent(event);
        //测试change是否触发了
        expect(callback).to.have.been.called
        //测试change事件的第一个参数
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})