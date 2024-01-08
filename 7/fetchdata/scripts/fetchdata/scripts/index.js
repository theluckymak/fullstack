function fetchData(inputElement) {
    let debounceTimer;

    function showAlert() {
        const searchText = inputElement.value;
        alert(`Ищем: ${searchText}`);
    }

    inputElement.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(showAlert, 1000);
    });
}

export default fetchData;