// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const originalData = [
  { role: "admin" },
  { role: "editor" },
  { role: "moderator" },
  { role: "guest" },
];

function filtertedData(query) {
  const filtered = originalData.filter((item) => {
    return item.role.toLowerCase().includes(query.toLowerCase());
  });

  const ul = document.getElementById("results");
  ul.innerHTML = "";
  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.role;
    ul.appendChild(li);
  });
}

const input = document.getElementById("search");
const handleDebouncedInput = debounce(
  (e) => filtertedData(e.target.value),
  500
);

input.addEventListener("input", handleDebouncedInput);
