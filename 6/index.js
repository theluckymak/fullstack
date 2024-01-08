import watch from 'melanke-watchjs';

function setNewsMaker() {
    const model = {
        newsList: [],
    };

    const view = {
        renderNews: function(newsElement) {
            const newsContainer = document.querySelector('.news__container');
            newsContainer.insertBefore(newsElement, newsContainer.firstChild);
        },

        clearInput: function() {
            const newsInput = document.querySelector('.form-control');
            newsInput.value = '';
        },
    };

    const controller = {
        addNews: function() {
            const newsInput = document.querySelector('.form-control').value.trim();
            if (newsInput) {
                const currentDate = new Date().toLocaleString();
                const newsElement = createNewsElement(currentDate, newsInput);
                model.newsList.unshift(newsElement.outerHTML);
                view.renderNews(newsElement);
                view.clearInput();
            }
        },
    };

    watch(model, 'newsList', () => {
        console.log('News list updated:', model.newsList);
    });

    document.querySelector('.btn-primary').addEventListener('click', controller.addNews);

    function createNewsElement(date, text) {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news__news-element');

        const dateElement = document.createElement('h5');
        dateElement.textContent = date;

        const textElement = document.createElement('div');
        textElement.textContent = text;

        newsElement.appendChild(dateElement);
        newsElement.appendChild(textElement);

        return newsElement;
    }
}

export default setNewsMaker;