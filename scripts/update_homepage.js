/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-var-requires */

import { writeFileSync as save } from "fs";

const pkgJson =
    require.main.paths[1].split("node_modules")[0]+ "package.json";

const json = require(pkgJson);

if(json.hasOwnProperty("homepage")){
 json.homepage = "https://rococo-sunflower-9e123e.netlify.app/"
}
console.log("test");
save(pkgJson, JSON.stringify(json, null, 2));