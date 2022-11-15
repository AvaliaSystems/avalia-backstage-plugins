import React from 'react';

import {
  Content,
  ContentHeader,
  InfoCard,
  PageWithHeader,
} from '@backstage/core-components';
import { Button, Grid } from '@material-ui/core';
import { VegaWidget, VegaLibrary } from '@avaliasystems/backstage-plugin-vega';
import avaliaLogo from './avalia-logo.png';

export const Actions = () => {
  return (
    <Button size="small" target="_blank" href="https://avalia.io">
      Learn More...
    </Button>
  );
};
export const HomePage = () => {
  return (
    <PageWithHeader
      themeId="home"
      title="Avalia Systems plugins for Backstage"
      subtitle="These components are part of Avalia DX Hub"
    >
      <Content>
        <ContentHeader title="Welcome!" />
        <Grid container direction="row" justifyContent="flex-start" spacing={6}>
          {/* -- Column 1 --------------*/}
          <Grid
            container
            item
            md={6}
            direction="column"
            justifyContent="flex-start"
            spacing={3}
          >
            <Grid item>
              <InfoCard title="About Avalia Systems" actions={<Actions />}>
                <p>
                  Avalia Systems is a company specialized in software analytics
                  and developer experience.
                </p>
                <p>
                  The plugins in this repo are part of <b>DX Hub</b>, our
                  solution built on top of Backstage.
                </p>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <img alt="avalia logo" src={avaliaLogo} />
                </div>
              </InfoCard>
            </Grid>
            <Grid item>
              <InfoCard title="Current plugins">
                <ul>
                  <li>
                    <b>Vega Widget</b> is a frontend plugin to bring{' '}
                    <a href="https://vega.github.io/vega/">Vega.js</a>{' '}
                    visualizations into Backstage.
                  </li>
                </ul>
              </InfoCard>
            </Grid>
            <Grid item>
              <InfoCard title="Coming soon...">
                <ul>
                  <li>
                    <b>Avalia Vibes</b> is a set of backend and frontend plugins
                    created to share feedback in Backstage. Users can express
                    opinions about any entity in the catalog, and this feedback
                    is presented to the community.
                  </li>
                  <li>
                    <b>Avalia Butterfly</b> is a frontend plugin that provides a
                    visual risk modeling interface, based on the bowtie
                    technique.
                  </li>
                  <li>
                    <b>The Aquarium</b> is a frontend plugin that brings
                    gamification into Backstage. See{' '}
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=yVyHghC_4IM&list=PL9Ebq0G5q5SEbKkwKVtYOZZpqt0IKX1Kb"
                    >
                      this video
                    </a>
                    .
                  </li>
                </ul>
              </InfoCard>
            </Grid>
          </Grid>

          {/* -- Column 2 --------------*/}
          <Grid
            style={{ maxWidth: '100%', overflow: 'auto' }}
            container
            item
            md={6}
            direction="column"
            justifyContent="flex-start"
            spacing={3}
          >
            <Grid item style={{ maxWidth: '100%', overflow: 'auto' }}>
              <InfoCard
                title="Vega plugin"
                subheader="Top contributors in the Backstage git repo"
              >
                <div style={{ width: '100%', height: '320px' }}>
                  <VegaWidget
                    library={VegaLibrary.VEGA}
                    specUrl="/demo/vega-widget/git-authors.json"
                    overrideConfig
                  />
                </div>
              </InfoCard>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </PageWithHeader>
  );
};
