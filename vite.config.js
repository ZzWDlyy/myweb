import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";



export default defineConfig({
  assetsInclude: ['**/*.nii.gz'],
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }
  },
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('el-')
  },
  server: {
    port: 8080, 
  },
   transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: "https://mock.apifox.cn/m1/2693194-0-default",
        changeOrigin: true,
      },
    },
  },
});