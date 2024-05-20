import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js"
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineClientConfig({
  // 你可以在这里添加或覆盖布局
  layouts: {
    // 例如，在这里我们将 vuepress-theme-hope 的默认布局更改为 layouts/Layout.vue
    // Layout,
  },
  setup() {
    setupRunningTimeFooter(
      new Date("2024-05-15"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar({ type: "homepage", light: "#333", dark: "#bbb" });
    setupSnowFall()
  },

  enhance({ app, router, siteData  }) {
    // register global components
    app.use(ElementPlus)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
});
