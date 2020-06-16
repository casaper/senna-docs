import { components } from '@senna-ui/docs/core.json';
import fs from 'fs-extra';
import { join, resolve } from 'path';

import {
  Page,
  buildPages
} from '../index';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages)
};

const getAPIPages = async (): Promise<Page[]> => {
  const pages = components.map(async component => {
    const title = component.tag;
    const path = `/docs/api/${title.slice(4)}`;
    const demoUrl = await getDemoUrl(component);
    const { readme, usage, props, methods, ...contents } = component;
    return {
      title,
      path,
      ...demoUrl,
      body: markdownRenderer(readme, path),
      usage: renderUsage(usage, path),
      props: renderDocsKey(props, path),
      methods: renderDocsKey(methods, path),
      template: 'api',
      ...contents
    };
  });
  return Promise.all(pages);
};

const renderUsage = (usage: any, baseUrl: any) => Object.keys(usage).reduce((out: any, key: any) => {
  out[key] = markdownRenderer(usage[key], baseUrl);
  return out;
}, {});

const renderDocsKey = (items: any, baseUrl: any) => items.map((item: any) => ({
  ...item,
  docs: markdownRenderer(item.docs, baseUrl)
}));

const DEMOS_PATH = resolve(__dirname, '../../../src/demos');

const getDemoUrl = async (component: any) => {
  const demoPath = `api/${component.tag.slice(4)}/index.html`;
  const hasDemo = await fs.pathExists(join(DEMOS_PATH, demoPath));
  if (hasDemo) {
    return {
      demoUrl: `/docs/demos/${demoPath}`,
      demoSourceUrl: `https://github.com/senna-ui/senna-docs/tree/master/src/demos/${demoPath}`
    };
  }
};
