const getGit = async (category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=muONypZ8FcrR8aU996vr4vb7jAK7G85N`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    // setImages(gifs)
    return gifs
  };

  export default getGit