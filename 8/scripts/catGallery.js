import axios from 'axios';

function setCatGallery() {
    const mainContainer = document.querySelector('.main__container');

    const catPromises = [];

    for (let i = 0; i < 10; i++) {
        const catPromise = axios.get('https://api.thecatapi.com/v1/images/search')
            .then((response) => {
                const imageUrl = response.data[0].url;

                const catImage = document.createElement('img');
                catImage.src = imageUrl;

                mainContainer.appendChild(catImage);
            })
            .catch((error) => {
                console.error('Error fetching cat image:', error);
            });

        catPromises.push(catPromise);
    }

    return Promise.all(catPromises)
        .then(() => 'Cat gallery is ready!')
        .catch((error) => console.error('Error setting cat gallery:', error));
}

export default setCatGallery;