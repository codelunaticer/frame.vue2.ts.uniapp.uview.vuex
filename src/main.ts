/*
 * @Author: mfxhb
 * @Date: 2022-12-01 08:41:14
 * @LastEditTime: 2022-12-01 15:54:06
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";

import uView from "uview-ui";
import { useVuex } from "@/plugins/vuex/vuex";
import installHttp from "@/plugins/request/request";

Vue.use(uView);
Vue.use(useVuex);

uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    // rpx 在平板上会导致尺寸超大
    // unit: "rpx",
  },
  // 修改$u.props对象的属性
  props: {
    // 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
    radio: {
      // size: 15,
    },
    // 其他组件属性配置
    // ......
  },
});

Vue.config.productionTip = false;

const app = new (
  typeof App === "function"
    ? App
    : Vue.extend(Object.assign({ mpType: "app" }, App))
)();
installHttp(app);
app.$mount();
