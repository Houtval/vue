import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'',

  server: {
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
        target: 'http://127.0.0.1:9527',
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace('/api', '') 
      }
    }
},


build: {
  sourcemap: false,
  minify: 'terser',
  chunkSizeWarningLimit: 1500,
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  },
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id
            .toString()
            .split('node_modules/')[1]
            .split('/')[0]
            .toString();
        }
      },
      chunkFileNames: (chunkInfo) => {
        const facadeModuleId = chunkInfo.facadeModuleId
          ? chunkInfo.facadeModuleId.split('/')
          : [];
        const fileName =
          facadeModuleId[facadeModuleId.length - 2] || '[name]';
        return `js/${fileName}/[name].[hash].js`;
      }
    }
  }
}


})
