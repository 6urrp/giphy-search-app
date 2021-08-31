export const getGifs = input => {
    const apiKey = `28sK8621WhfgbPuc7zi0ovbWGU3NqBFC`;
    let endpoint = `https://api.giphy.com/v1/gifs/search`
    return fetch(`${endpoint}?api_key=${apiKey}&q=${input}`)
    .then(response => response.json())
    .then(context => context.data);
}