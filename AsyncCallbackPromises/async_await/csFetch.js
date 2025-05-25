const csvData = `name,age
Alice,30
Bob,25
Charlie,22`;

const lines = csvData.split("\n");

function simulateCSVRead(lines, delay = 500) {
  const headers = lines[0].split(",");
  let result = [];

  return new Promise((resolve) => {
    let i = 1;

    const interval = setInterval(() => {
      if (i >= lines.length) {
        clearInterval(interval);
        resolve(result);
        return;
      }

      const values = lines[i].split(",");

      const row = Object.fromEntries(
        headers.map((key, index) => [key, values[index]])
      );
      result.push(row);
      i++;
    }, delay);
  });
}

simulateCSVRead(lines, 500).then((data) => console.log(data));

// const result = await simulateCSVRead(lines);
// console.log(result);
