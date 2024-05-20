import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/komorebi_blog/",

  lang: "zh-CN",
  title: "komorebi的杂物间",
  description: "komorebi的博客",

  alias: {
    "@TabView": path.resolve(__dirname, "components/TabView.vue"),
  },
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
