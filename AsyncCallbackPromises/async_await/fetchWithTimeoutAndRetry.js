async function fetchData(times) {
  for (let i = 0; i < times; i++) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.co/posts");
      const data = await response.json();
      console.log(data);
      break;
    } catch (err) {
      if (i !== times - 1) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}

fetchData(3);
