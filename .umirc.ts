import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: "https://khayliang.github.io/movie-web",
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/MoviePage' },
      ],
    },
  ],
});
