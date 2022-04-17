// uso de fetch API

const apiKey = "rgNRvlapgaZjsAmFD9Wc51kF7uJ09IKc";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }) // promesas en cadena, ya que el primer then devuelve una 
    .catch(console.log);
