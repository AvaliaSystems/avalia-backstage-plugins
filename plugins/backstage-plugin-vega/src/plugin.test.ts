import { backstagePluginVegaPlugin } from './plugin';

describe('backstage-plugin-vega', () => {
  it('should export plugin', () => {
    expect(backstagePluginVegaPlugin).toBeDefined();
  });
});
