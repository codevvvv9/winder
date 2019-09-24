const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.ok
  })
  it('接受span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1',
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受offset属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '1',
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受pc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: { span: "1", offset: "2"},
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受ipad属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {
          span: "3",
          offset: "2"
        },
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-ipad-3')).to.eq(true)
    expect(element.classList.contains('offset-ipad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受narrowPc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {
          span: "4",
          offset: "4"
        },
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-narrow-pc-4')).to.eq(true)
    expect(element.classList.contains('offset-narrow-pc-4')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受widePc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: {
          span: "6",
          offset: "6"
        },
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-wide-pc-6')).to.eq(true)
    expect(element.classList.contains('offset-wide-pc-6')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})