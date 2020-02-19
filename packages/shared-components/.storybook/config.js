import { addDecorator, configure } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);

const loaderFn = () => {
  [
    require.context("../stories/styles", true, /\.stories\.tsx?$/),
    require.context("../stories/components", true, /\.stories\.tsx$/)
  ].forEach(req => req.keys().forEach(fname => req(fname)));

  require("../stories/examples.stories.tsx");
};

configure(loaderFn, module);
