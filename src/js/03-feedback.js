import Throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', Throttle(onInputChange, 500)); 
refs.textarea.addEventListener('input', Throttle(onTextareaChange, 500));

const STORAGE_KEY = "feedback-form-state";
const storageValues = {
    email: '',
    textarea: '',
};

onDataReturn();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onInputChange(evt) {
    const inputEmail = evt.target.value;

    storageValues.email = inputEmail;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValues));
};

function onTextareaChange(evt) {
    const textareaMessage = evt.target.value;

    storageValues.textarea = textareaMessage;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValues));
};

function onDataReturn() {
    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(parsedData) {
         refs.input.value = parsedData.email;
         refs.textarea.value = parsedData.textarea;
    }
    
}