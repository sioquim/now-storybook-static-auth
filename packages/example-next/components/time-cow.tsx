import { Cowsay } from "@esglobalfe/constructicons";
import { format } from "date-fns";

const TimeCow = () => (
  <Cowsay message={format(new Date(), "'The time is' hh:mmaaa OOOO")} />
);

export default TimeCow;
