import Throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
  };
  
  const STORAGE_KEY = 'feedback-form-state';
  let dataForm = {};
  
  refs.form.addEventListener('submit', onFormSubmit);
  refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(event) {
    event.preventDefault();

     console.log(dataForm);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    dataForm[refs.input.name] = '';
    dataForm[refs.textarea.name] = '';
  }
  
  function onTextareaInput(event) {
    dataForm[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
  }
  
  populateTextarea();
  
  function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    if (savedMessage) {
      if (parsedMessage.email) {
        refs.input.value = parsedMessage.email;
        dataForm[refs.input.name] = parsedMessage.email;
      }

      if (parsedMessage.message) {
        refs.textarea.value = parsedMessage.message;
        dataForm[refs.textarea.name] = parsedMessage.message;
      }
    }
  }
  