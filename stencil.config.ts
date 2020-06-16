import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/styles/global.css',
  // excludeUnusedDependencies: true,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://senna-ui.com/docs',
      prerenderConfig: 'prerender.config.js',
      serviceWorker: null,
      copy: [
        { src: 'pages/**/*.json' },
        { src: 'demos', dest: 'demos' },
        { src: 'assets', dest: 'assets' },
        { src: 'manifest.json', dest: 'manifest.json' },
        { src: '../node_modules/@senna-ui/core/dist', dest: 'assets/senna' },
      ]
    }
  ]
};
