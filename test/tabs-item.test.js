const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/Tabs.vue";
import TabsBody from "../src/TabsBody.vue";
import TabsHead from "../src/TabsHead.vue";
import TabsItem from "../src/TabsItem.vue";
import TabsPane from "../src/TabsPane.vue";

Vue.component("w-tabs", Tabs);
Vue.component("w-tabs-body", TabsBody);
Vue.component("w-tabs-head", TabsHead);
Vue.component("w-tabs-item", TabsItem);
Vue.component("w-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
  it("TabsItem存在.", () => {
    expect(Tabs).to.be.ok;
  });
  it("接受name prop.", () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'tabsItemTest',
      }
    }).$mount()
    expect(vm.$el.getAttribute("data-name")).to.eq("tabsItemTest")
  });
  it("接受disabled prop.", () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
});
