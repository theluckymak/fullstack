const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasksContainer = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    main.append(input);

    const addListener = (element, type) => {
        element.addEventListener('click', () => {
            const taskElement = document.createElement('span');
            const taskText = input.value;
            taskElement.dataset.type = type;
            taskElement.textContent = taskText;
            taskElement.addEventListener('click', () => {
                taskElement.remove();
            });

            input.value = '';
            tasksContainer.append(taskElement);
        });
    };

    const buttonPlanned = document.createElement('button');
    buttonPlanned.classList.add('btn', 'btn-danger');
    buttonPlanned.textContent = 'Добавить в план';

    const buttonCompleted = document.createElement('button');
    buttonCompleted.classList.add('btn', 'btn-success');
    buttonCompleted.textContent = 'Добавить в сделанные';

    addListener(buttonPlanned, 'planned');
    addListener(buttonCompleted, 'completed');

    main.append(buttonPlanned);
    main.append(buttonCompleted);
    // Конец
};

export default setToDo;