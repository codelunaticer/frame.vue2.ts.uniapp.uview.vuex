/*
 * @Author: mfxhb
 * @Date: 2022-12-01 08:51:05
 * @LastEditTime: 2022-12-01 15:00:48
 * @Description:
 */
import type { ProjectOptions } from "@vue/cli-service";
import path from "path";

module.exports = {
  transpileDependencies: ["uview-ui"],
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    https: false,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
} as ProjectOptions;
