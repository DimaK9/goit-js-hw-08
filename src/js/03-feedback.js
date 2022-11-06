import throttle from 'lodash.throttle';

const STORAGE_KEY ='feedback-msg';

const refs = {
    form: document.querySelector('.feedback-form'),
    input:document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
console.log(refs.form);

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputChange, 500));
refs.textarea.addEventListener('input', throttle(onTextareaChange, 500));


function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInputChange(evt) {

}

function onTextareaChange(evt) {
const message = evt.currentTarget.value;

localStorage.setItem(STORAGE_KEY, message);
}