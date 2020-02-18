import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Typography", module).add(
  "default",
  withInfo()(() => <div>Typography</div>)
);
