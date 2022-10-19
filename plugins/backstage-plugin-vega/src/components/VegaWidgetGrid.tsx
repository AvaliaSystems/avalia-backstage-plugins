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

import React from "react";
import { VegaLibrary, VegaWidgetDefinition } from "./types";
import { VegaWidget } from "./VegaWidget";

export const VegaWidgetGrid = () => {

  const vegaWidgets : VegaWidgetDefinition[] = [
    {
      title: "Monthly commits in Backstage",
      library: VegaLibrary.VEGA,
      spec: "/metrics/monthly-commits-line.json",
    },
    {
      title: "Monthly commits in Backstage",
      library: VegaLibrary.VEGA,
      spec: "/metrics/monthly-commits.json",
    },
    {
      title: "New contributors by month",
      library: VegaLibrary.VEGA,
      spec: "/metrics/new-contributors-by-month.json",
    },
  ];

  const vegaLiteWidgets : VegaWidgetDefinition[] = [
    {
      title: "Top contributors",
      library: VegaLibrary.VEGA,
      spec: "/metrics/top-contributors-by-commits.json",
    },
    {
      title: "Activity",
      library: VegaLibrary.VEGA_LITE,
      spec: "/metrics/activity-matrix.json",
    },
    {
      title: "Cumulative count of commits",
      library: VegaLibrary.VEGA_LITE,
      spec: "/metrics/commits-cumulative-count.json",
    },
  ];

  return (
    <div>
      <div className="widgetGrid">
        {vegaWidgets.map((widget, index) => {
          return <VegaWidget key={index} title={widget.title} library={widget.library} specUrl={widget.spec} />
        })}
      </div>
      <div className="widgetGrid">
      {vegaLiteWidgets.map((widget, index) => {
          return <VegaWidget key={index} title={widget.title} library={widget.library} specUrl={widget.spec} />
        })}
      </div>
    </div>
  );

}