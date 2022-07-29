import vue from '@vitejs/plugin-vue';
import path from 'path';

console.log(__dirname);
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
    },
  },
  server: {
    hmr: {
      port: 443
    }
  }
};
