// async y await simplifican la forma en que se hacen peticiones con fetch

// Este código es un poco largo de lograr entender
// const getImagen = () => new Promise(resolve => resolve('Se ha traido a la imágen'));

// getImagen().then(console.log);

const getImagen = async () => {
    // await siempre va de la mano con async y permite que las operaciones sean síncronas
    // para manejar el error con async y await se usa try/catch
    try {
        const apiKey = "rgNRvlapgaZjsAmFD9Wc51kF7uJ09IKc";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // aqui se debe de tratar el error
    }

}

getImagen();