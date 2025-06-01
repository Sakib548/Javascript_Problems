import { nanoid } from "nanoid";

const url = "http://localhost:3000/posts";

async function fetchData(url) {
  try {
    if (!url || typeof url !== "string") {
      throw new Error("Please provide a valid url");
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error", err.message);
  }
}

fetchData(url);
const post = { id: nanoid(), title: "", body: "WEWEWEEWE" };
async function postData() {
  try {
    if (!post.title || !post.body) {
      throw new Error("Please include title and body");
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error(`Failed to post ${response.status}`);
    }

    const data = await response.json();
    console.log("Post Successful", data);
  } catch (err) {
    console.log("Error", err.message);
  }
}

const post2 = { title: "PEOWPEOPWOEP", body: "WEWEWEEWE" };

async function updateData() {
  try {
    if (!post2.title || !post2.body) {
      throw new Error("Please include title and body");
    }
    const response = await fetch(`${url}/NIjPHFX9oTOZ5gHoQKIRR`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post2),
    });
    if (!response.ok) {
      throw new Error(`Failed to post ${response.status}`);
    }

    const data = await response.json();
    console.log("Post Successful", data);
  } catch (err) {
    console.log("Error", err.message);
  }
}

async function deleteData() {
  try {
    const response = await fetch(`${url}/NIjPHFX9oTOZ5gHoQKIRR`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to post ${response.status}`);
    }

    const data = await response.json();
    console.log("Delete Successful", response.status);
  } catch (err) {
    console.log("Error", err.message);
  }
}
//postData();
//updateData();
deleteData();
