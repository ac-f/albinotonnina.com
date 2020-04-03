import { waitForWebfonts } from "./scripts/utilities";
import Site from "./scripts/Site";

const onLoad = () => {
  const site = new Site();
  site.start();
};

window.onload = waitForWebfonts(["Roboto:400,100,300,700,900"], onLoad);
