function renderSneakers() {
  const img = document.createElement("img");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  console.log(userInfo);
  fetch(
    `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&name=${userInfo.name}&releaseYear=${userInfo.year}&brand=${userInfo.brand}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c1a9a5c52msh230a7f2d99ccc15p10ad0djsn27e4137a93bc",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      console.log(data.results[0].media.smallImageUrl);
      img.src = data.results[0].media.smallImageUrl;
      console.log(img.src);
      $("#shoe-img").append(img);
      $("#shoe-name").html(data.results[0].shoe);
      $("#relDate").html("Release Date: " + data.results[0].releaseDate);
      $("#retailPrice").html("Current Cost: $" + data.results[0].retailPrice);
      $("#styleID").html("Style ID: " + data.results[0].styleId);
    })
    .catch((err) => {
      console.error(err);
    });
}

renderSneakers();
