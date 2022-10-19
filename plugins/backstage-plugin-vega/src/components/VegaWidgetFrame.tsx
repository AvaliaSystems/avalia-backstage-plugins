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

import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

interface FrameProps {
  width: string;
  height: string;
  margin: string;
}

const useStyles = makeStyles(() => ({
  root: (props: FrameProps) => ({
    width: props.width,
    height: props.height,
    margin: props.margin,
  })
}));

export const VegaWidgetFrame = (props: React.PropsWithChildren<FrameProps>) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}