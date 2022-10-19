/*
 * Copyright 2022 Avalia Systems SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { csvParse, autoType } from 'd3-dsv';

import React, { useEffect, useState } from 'react';
import './VegaWidget.css';
import { Vega, VegaLite, View, VisualizationSpec } from 'react-vega';

import {Config as VgConfig} from 'vega';
import {Config as VlConfig} from 'vega-lite';

import { scheme } from 'vega';
import { scaleSequential } from 'd3-scale';
import { VegaLibrary } from './types';
import { makeStyles, useTheme } from '@material-ui/core';
import { BackstageTheme } from '@backstage/theme';
import defaultVegaLiteConfig from './vega-configs/vega-lite-config-default.json';
import defaultVegaConfig from './vega-configs/vega-config-default.json';

export interface WidgetProps {
  title?: string;
  specUrl: string;
  dataUrl?: string;
  library: VegaLibrary;
  overrideConfig?: boolean | Object;
}

const useStyles = makeStyles<BackstageTheme>(() => ({
  widget: {
    flexGrow: 1,
    flexShrink: 1,
    padding: '0rem',
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  vgResizeFix: {
    display: 'flex !important',
  },
  /*
  widgetFrame: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.8rem',
    padding: '0.8rem',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: '10rem',
    minHeight: '10rem',
    width: '30rem',
    height: '20rem',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    maxWidth: 450,
  },
  */
}));

scheme('seq', scaleSequential(['white', 'purple']));

export const VegaWidget = (props: WidgetProps) => {
  const [_, setData] = useState<Record<string, unknown>>();
  const [vegaSpec, setVegaSpec] = useState<VisualizationSpec>();
  const [vegaWidth, setVegaWidth] = React.useState(0);
  const [vegaHeight, setVegaHeight] = React.useState(0);
  const vegaRef = React.useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const theme = useTheme() as BackstageTheme;
  scheme('backstage-theme-main', [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
    theme.palette.secondary.light,
    theme.palette.secondary.main,
    theme.palette.secondary.dark,
    theme.palette.gold,
    theme.palette.success.main,
    theme.palette.error.main,
  ]);
  scheme('backstage-theme-status', [
    theme.palette.status.ok,
    theme.palette.status.running,
    theme.palette.status.aborted,
    theme.palette.status.pending,
    theme.palette.status.warning,
    theme.palette.status.error,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      if (!props.dataUrl) {
        return;
      }
      const response = await fetch(props.dataUrl);
      const text = await response.text();
      const csv = csvParse(text, autoType);
      setData({ table: csv });
    };
    fetchData();
  }, [props.dataUrl]);

  useEffect(() => {
    const fetchVegaSpec = async () => {
      const response = await fetch(props.specUrl);
      const vegaSpecification = (await response.json()) as VisualizationSpec;

      if (props.overrideConfig) {
        if (props.library === VegaLibrary.VEGA) {
          const vgc_default = defaultVegaConfig.config as VgConfig;
          const vgc_override = vegaSpecification.config as VgConfig;
          vegaSpecification.config = {
            ...vgc_default,
            ...vgc_override,
          };
        } else {
          const vlc_default = defaultVegaLiteConfig.config as VlConfig;
          const vlc_override = vegaSpecification.config as VlConfig;
          vegaSpecification.config = {
            ...vlc_default,
            ...vlc_override,
          };
        }
      }

      vegaSpecification.autosize = {
        type: 'fit',
        resize: false,
        contains: 'padding',
      };
      vegaSpecification.padding = 10;

      if (props.library === VegaLibrary.VEGA) {
        if ('signals' in vegaSpecification) {
          vegaSpecification.signals?.push({
            name: 'theme',
            value: theme,
          });
        }
      }

      vegaSpecification.background = undefined; // for Vega Lite
      vegaSpecification.background = theme.palette.background.paper;

      setVegaSpec(vegaSpecification);
    };
    fetchVegaSpec();
  }, [
    props.library,
    props.overrideConfig,
    props.specUrl,
    theme,
    theme.palette,
  ]);

  const updateDimensions = () => {
    if (vegaRef.current) {
      setVegaWidth(vegaRef.current.clientWidth);
      setVegaHeight(vegaRef.current.clientHeight);
    }
  };

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleNewView = (view: View) => {
    console.log(view);
    // view.signal("theme", theme).run();
    // view.signal("secondaryColor", theme.palette.warning.main).run();
  };

  return (
    <div className={classes.widget} ref={vegaRef}>
      {vegaSpec && props.library === VegaLibrary.VEGA && (
        <Vega
          renderer='svg'
          className={classes.vgResizeFix}
          width={vegaWidth}
          height={vegaHeight}
          actions={false}
          spec={vegaSpec}
          onNewView={handleNewView}
        />
      )}
      {vegaSpec && props.library === VegaLibrary.VEGA_LITE && (
        <VegaLite
          renderer='svg'
          className={classes.vgResizeFix}
          width={vegaWidth}
          height={vegaHeight}
          actions={false}
          spec={vegaSpec}
          onNewView={handleNewView}
        />
      )}
    </div>
  );
};
