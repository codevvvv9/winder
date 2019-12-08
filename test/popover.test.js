const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/Popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover", () => {
  it("存在.", () => {
    expect(Popover).to.be.ok;
  });
  it("可以设置position", (done) => {
    Vue.component("w-popover", Popover);

    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <w-popover position="bottom" ref="popoverDemo">
      <template slot="content">
          弹出内容
      </template>
      <button>点我</button>
    </w-popover>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.popoverDemo.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  });
});
