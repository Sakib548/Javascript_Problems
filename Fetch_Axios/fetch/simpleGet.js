//const url = "https://jsonplaceholder.typicode.com/posts/1";
const url = true;
async function fetchData(url) {
  try {
    if (!url || typeof url !== "string") {
      throw new Error(`Please provide a valid url `);
    }
    const response = await fetch(url);
    //fetch won't throw an error for non-200 responses (like 404),
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.title);
  } catch (err) {
    console.log("Failed to fetch post Title", err.message);
  }
}

fetchData(url);
