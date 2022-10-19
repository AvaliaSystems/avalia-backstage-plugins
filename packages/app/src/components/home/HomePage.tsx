import React from 'react';

import {
  Content,
  ContentHeader,
  InfoCard,
  PageWithHeader,
} from '@backstage/core-components';
import { Button, Grid } from '@material-ui/core';

export const Actions = () => {
  return (
    <Button
      size="small"
      target='_blank'
      href='https://avalia.io'
    >
      Learn More...
    </Button>
  );
};
export const HomePage = () => {
  // return <div className={ title }>Welcome to Backstage (Avalia Edition)</div>;
  return (
    <PageWithHeader
      themeId="home"
      title="Avalia Systems plugins for Backstage"
      subtitle="These components are part of Avalia DX Hub"
    >
      <Content>
        <ContentHeader title="Overview" />
        <Grid container justifyContent="flex-start" spacing={6}>
          <Grid item xs={12} md={6}>
            <InfoCard title="About Avalia Systems" actions={<Actions />}>
              Avalia Systems is a company specialized in bla bla.
            </InfoCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard title="How to...">text</InfoCard>
          </Grid>
        </Grid>
      </Content>
    </PageWithHeader>
  );
};
