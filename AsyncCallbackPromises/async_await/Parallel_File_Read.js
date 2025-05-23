import fs from "fs/promises";
import { dirname } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

async function example() {
  try {
    const data = await fs.readFile(`${__dirname}/a.txt`, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example();
