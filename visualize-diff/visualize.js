#!node
import getStdin from "get-stdin";
import fs from "fs";
import {execSync} from "child_process";

(async () => {
    const stdin = await getStdin();

    const path = `./visualize-diff/build/${Math.random()}.html`;
    fs.writeFileSync(path, `
    <script>
    window.DATA=${stdin};
    </script>
    ${fs.readFileSync("./visualize-diff/build/index.html", {encoding: "utf8"})}
    `, {encoding: "utf8"});

    execSync(`open ${path}`);

    setTimeout(() => {
        fs.unlinkSync(path);
    }, 3000);

})();
