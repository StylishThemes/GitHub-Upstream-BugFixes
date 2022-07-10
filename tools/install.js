import open from "open";
import {createServer} from "http";
import {dirname, resolve} from "path";
import {readFileSync} from "fs";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = readFileSync(resolve(__dirname, "../github-dark.user.css"));

const server = createServer((_, res) => {
  res.setHeader("content-type", "text/css");
  res.on("close", () => {
    setTimeout(() => {
      process.exit(0);
    }, 4000);
  });
  res.end(file);
});

server.listen(() => {
  open(`http://localhost:${server.address().port}/github-dark.user.css`);
});
