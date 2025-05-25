import fs from "fs/promises";
import { dirname, resolve } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//console.log(__dirname);

async function example(files) {
  try {
    const data = await fs.readFile(`${__dirname}/a.txt`, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
//example();

function mockReadFile(filename) {
  const delay = Math.floor(Math.random() * 3000) + 1000;
  return new Promise((resolve) => {
    setTimeout(async () => {
      const content = await fs.readFile(filename, { encoding: "utf8" });
      resolve(content);
    }, delay);
  });
}

async function readAllfiles() {
  const files = [
    `${__dirname}/a.txt`,
    `${__dirname}/b.txt`,
    `${__dirname}/c.txt`,
  ];

  const results = await Promise.all(files.map((file) => mockReadFile(file)));

  const combined = results.join("\n");
  console.log(combined);
}
readAllfiles();
