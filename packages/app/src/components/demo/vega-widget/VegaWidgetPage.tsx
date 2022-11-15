import React from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { VegaWidget, VegaLibrary } from '@avaliasystems/backstage-plugin-vega';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  forVega: {
    overflow: 'auto',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  widgetGrid: {
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
  },
  horizontalScroll: {
    maxWidth: '90%',
  },
}));

export const VegaWidgetPage = () => {
  const classes = useStyles();

  return (
    <Page themeId="tool">
      <Header
        title="Avalia Vega Widget"
        subtitle="Bring Vega.js visualizations in Backstage"
      />
      <Content className={classes.forVega}>
        <ContentHeader title="A grid of widgets that takes 100% of the viewport">
          <SupportButton>Created by Avalia Systems</SupportButton>
        </ContentHeader>

        <div className={`${classes.widgetGrid}`}>
          <VegaWidget
            library={VegaLibrary.VEGA}
            specUrl="/demo/vega-widget/git-authors.json"
            overrideConfig
          />
          <VegaWidget
            library={VegaLibrary.VEGA_LITE}
            specUrl="/demo/vega-widget/vega-lite-bar-chart.json"
            overrideConfig
          />
          <VegaWidget
            library={VegaLibrary.VEGA}
            specUrl="/demo/vega-widget/monthly-commits-line.json"
            overrideConfig
          />
          <VegaWidget
            library={VegaLibrary.VEGA_LITE}
            specUrl="/demo/vega-widget/vega-lite-bar-chart-with-config.json"
          />
          <VegaWidget
            library={VegaLibrary.VEGA_LITE}
            specUrl="/demo/vega-widget/vega-lite-bar-chart-with-config.json"
            overrideConfig
          />
        </div>
      </Content>
    </Page>
  );
};
