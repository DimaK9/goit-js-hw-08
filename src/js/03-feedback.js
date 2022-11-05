const refs = {
    form: document.querySelector('.feedback-form'),
    input:document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
console.log(refs);

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInputChange);
refs.textarea.addEventListener('input', onTextareaChange);

function onFormSubmit(evt) {

}

function onInputChange(evt) {

}

function onTextareaChange(evt) {
const message = evt.currentTarget.value;

localStorage.setItem('feedback-msg', message);
}