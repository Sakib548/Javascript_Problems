//const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://httpstat.us/200?sleep=10000";
async function fetchWithRetryAndTimeout(
  url,
  options = {},
  retries = 3,
  timeoutId,
  state
) {
  for (let i = 0; i < retries; i++) {
    if (state.cancelled === true) {
      console.log("⛔ Cancelled, stopping retries.");
      break;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      clearTimeout(timeoutId);
      return data;
      // console.log(data);

      //console.log(data);
    } catch (error) {
      if (i !== retries - 1) {
        console.log("Attempt", i + 1);

        await new Promise((resolve) => setTimeout(resolve, 3000));
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}

async function withTimeout(fn, timeout) {
  let timeoutId;
  let promise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      state.cancelled = true;
      reject(new Error("Timeout"));
    }, timeout);
  });
  let result = fn(url, {}, 3, timeoutId, state);
  return Promise.race([result, promise]);
}

const state = { cancelled: false };
withTimeout(fetchWithRetryAndTimeout, 10000)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//fetchWithRetryAndTimeout(url, {});
