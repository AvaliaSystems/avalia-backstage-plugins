import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstagePluginVegaPlugin, BackstagePluginVegaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstagePluginVegaPlugin)
  .addPage({
    element: <BackstagePluginVegaPage />,
    title: 'Root Page',
    path: '/backstage-plugin-vega'
  })
  .render();
