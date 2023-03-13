#!node
import getStdin from "get-stdin";
import fs from "fs";
import {dirname, join as pathjoin} from "path";
import {execSync} from "child_process";
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
    const stdin = await getStdin();

    const path = pathjoin(__dirname, `./build/${Math.random()}.html`);
    fs.writeFileSync(path, `
    <script>
    window.DATA=${stdin};
    </script>
    ${fs.readFileSync(pathjoin(__dirname, "./build/index.html"), {encoding: "utf8"})}
    `, {encoding: "utf8"});

    execSync(`open ${path}`);

    setTimeout(() => {
        fs.unlinkSync(path);
    }, 3000);

})();
