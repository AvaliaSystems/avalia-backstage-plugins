import React from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import {
  VegaWidget,
  VegaLibrary,
} from '@avaliasystems/plugin-backstage-plugin-vega';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  grid: {
    display: 'flex',
  },
  item: {
    padding: '1rem',
    flexGrow: 1,
    flexShrink: 1,
    height: '350px',
    width: '300px'
  },
}));

export const VegaWidgetPageScrolling = () => {
  const classes = useStyles();

  return (
    <Page themeId="tool">
      <Header
        title="Avalia Vega Widget"
        subtitle="Bring Vega.js visualizations in Backstage"
      />
      <Content>
        <ContentHeader title="A grid of widgets with fixed height rows">
          <SupportButton>Created by Avalia Systems</SupportButton>
        </ContentHeader>

        <div className={classes.grid}>
          <div className={classes.item}>
            <VegaWidget
              library={VegaLibrary.VEGA}
              specUrl="/demo/vega-widget/git-authors.json"
              overrideConfig
            />
          </div>
          <div className={classes.item}>
            <VegaWidget
              library={VegaLibrary.VEGA}
              specUrl="/demo/vega-widget/monthly-commits-line.json"
              overrideConfig
            />
          </div>
        </div>
      
        <div className={classes.grid}>
          <div className={classes.item}>
            <VegaWidget
              library={VegaLibrary.VEGA_LITE}
              specUrl="/demo/vega-widget/vega-lite-bar-chart.json"
              overrideConfig
            />
          </div>
          <div className={classes.item}>
            <VegaWidget
              library={VegaLibrary.VEGA_LITE}
              specUrl="/demo/vega-widget/vega-lite-bar-chart-with-config.json"
              overrideConfig
            />
          </div>
          <div className={classes.item}>
            <VegaWidget
              library={VegaLibrary.VEGA}
              specUrl="/demo/vega-widget/vega-lite-bar-chart-with-config.json"
            />
          </div>
        </div>

      </Content>
    </Page>
  );
};
