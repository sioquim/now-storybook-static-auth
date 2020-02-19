import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Examples", module).add(
  "list",
  withInfo()(() => (
    <a href="/example/" target="_blank">
      NextJS App
    </a>
  ))
);
