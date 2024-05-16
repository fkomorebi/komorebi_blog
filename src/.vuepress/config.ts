import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import viteBundler from "@vuepress/bundler-vite";
import { alphaTab } from "@coderline/alphatab/vite";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "komorebi的杂物间",
  description: "komorebi的博客",

  alias: {
    "@TabView": path.resolve(__dirname, "components/TabView.vue"),
  },
  theme,
  bundler: viteBundler({
    viteOptions:{
      plugins: [alphaTab({
        alphaTabSourceDir: path.resolve(__dirname, '../../node_modules/@coderline/alphaTab/dist'),
        audioWorklets: false,
        // assetOutputDir: path.resolve(__dirname, 'public/assets/'),
        webWorkers: true
      })],
      optimizeDeps: {
        exclude: ['@coderline/alphatab']
      },
    },
    vuePluginOptions: {}
  })
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
