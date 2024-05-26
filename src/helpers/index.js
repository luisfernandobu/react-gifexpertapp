export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bzeQYOepUaZUXhP6KkrciV5mFkOtgHWr&limit=10&q=${category}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title ? gif.title : 'GIF sin nombre',
        url: gif.images.downsized.url
    }));

    // console.log(data);
    return gifs;
}
