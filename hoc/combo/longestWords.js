const words = [
    "banana",
    "extraordinary",
    "map",
    "supercalifragilisticexpialidocious",
    "blue",
    "elephant",
    "cat",
    "umbrella",
    "internationalization",
    "sun",
    "chocolate"
  ];

  

  const sortedArray = words.sort((a,b)=>b.length-a.length);
  const longest3 = sortedArray.slice(0,3);
  console.log(longest3);
  