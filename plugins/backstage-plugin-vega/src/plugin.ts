import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const backstagePluginVegaPlugin = createPlugin({
  id: 'backstage-plugin-vega',
  routes: {
    root: rootRouteRef,
  },
});

export const BackstagePluginVegaPage = backstagePluginVegaPlugin.provide(
  createRoutableExtension({
    name: 'BackstagePluginVegaPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
