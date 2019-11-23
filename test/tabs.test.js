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

describe("Tabs", () => {
  it("Tabs存在.", () => {
    expect(Tabs).to.be.ok;
  });
  it("接受selected prop.", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <w-tabs selected="finance">
    <w-tabs-head>
      <w-tabs-item name="sports"> 体育 </w-tabs-item>
      <w-tabs-item name="finance"> 经济</w-tabs-item>
      <w-tabs-item name="history"> 历史 </w-tabs-item>
    </w-tabs-head>
    <w-tabs-body>
      <w-tabs-pane name="sports"> 体育新闻 </w-tabs-pane>
      <w-tabs-pane name="finance"> 财经新闻 </w-tabs-pane>
      <w-tabs-pane name="history"> 历史趣事 </w-tabs-pane>
    </w-tabs-body>
  </w-tabs>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      const selectedVm = vm.$el.querySelector(`.tabsItem[data-name="finance"]`);
      expect(selectedVm.classList.contains('active')).to.be.true
      done()
    })
  });
  it("接受direction prop.", () => {

  })
});
