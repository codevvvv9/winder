const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/Toast";
import { it } from "mocha";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在Toast.", () => {
    expect(Toast).to.be.ok;
  });

  describe("props", () => {
    it("接受autoClose", done => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div);
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        console.log("done is coming");
        done();
      });
    });
    it("接受closeButton", () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭吧",
            callback
          }
        }
      }).$mount();
      let closeButtonElement = vm.$el.querySelector(".close");
      expect(closeButtonElement.textContent.trim()).to.eq("关闭吧");
      closeButtonElement.click()
      expect(callback).to.have.been.called
    });
    it("接受enableHtml", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      });
      vm.$slots.default = ['<strong id="test">hi,enableHtml</strong>'];
      vm.$mount();
      let enableHtmlElement = vm.$el.querySelector("#test");
      expect(enableHtmlElement).to.exist;
    });
    it("接受position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "bottom"
        }
      }).$mount();
      expect(vm.$el.classList.contains("position-bottom")).to.be.eq(true);
    });
  });
});
