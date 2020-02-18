import { text, withKnobs } from "@storybook/addon-knobs";

import { Cowsay } from "../../src";
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Cowsay", module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);
stories.add("default", () => <Cowsay message={text("message", "Mooooooo")} />);
