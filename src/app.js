import Vue from "vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input.vue";
import Row from "./Row.vue";
import Col from "./Col.vue";
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
import Sider from "./Sider.vue";
import Toast from "./Toast.vue";
import plugin from "./plugin";
import Tabs from './Tabs.vue'
import TabsBody from './TabsBody.vue'
import TabsHead from './TabsHead.vue'
import TabsItem from './TabsItem.vue'
import TabsPane from './TabsPane.vue'

Vue.component("w-tabs", Tabs)
Vue.component("w-tabs-body", TabsBody)
Vue.component("w-tabs-head", TabsHead)
Vue.component("w-tabs-item", TabsItem)
Vue.component("w-tabs-pane", TabsPane)
Vue.component("w-button", Button);
Vue.component("w-icon", Icon);
Vue.component("w-button-group", ButtonGroup);
Vue.component("w-input", Input);
Vue.component("w-row", Row);
Vue.component("w-col", Col);
Vue.component("w-layout", Layout);
Vue.component("w-header", Header);
Vue.component("w-content", Content);
Vue.component("w-footer", Footer);
Vue.component("w-sider", Sider);
Vue.component("w-toast", Toast);
Vue.use(plugin);

new Vue({
  el: "#app",
  data() {
    return {
      isLoading: false,
      message: "hi, v-model",
      selectedTab: "finance"
    };
  },
  created() {},
  methods: {
    changeMessage() {
      this.message += "!";
    },
    showToast1() {
      this.showToast("top")
    },
    showToast2() {
      this.showToast("middle")
    },
    showToast3() {
      this.showToast("bottom")
    },
    showToast(position) {
      this.$toast(
        "<p><strong>hi </strong>你好好我是一个html标签你好好我是一个html标签你好好我是一个html标签你好好我是一个html标签你好好我是一个html标签你好好我是一个html标签你好好我是一个html标签<p>",
        {
          closeButton: {
            text: "关闭",
            callback(toast) {
              toast.log();
              console.log("关闭被触发了");
            }
          },
          enableHtml: true,
          autoClose: false,
          position
        }
      );
    }
  }
});
