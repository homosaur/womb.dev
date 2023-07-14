import lume from "lume/mod.ts";

const site = lume();

site.copy("_assets", ".");

export default site;
