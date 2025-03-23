const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
  }
});

form.addEventListener('input', event => {
  const { name, value } = event.target;

  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  savedData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.email.value;
  const message = form.message.value;

  localStorage.removeItem('feedback-form-state');
  form.reset();

  console.log({ email, message });
});
