const fetchShoes = async () => {
  let res = await fetch(
    "https://app.retailed.io/api/sneakers?extended=true&name=jordan"
  );

  res = await res.json();

  console.log(res);
};

fetchShoes();
