const form = document.querySelector('.feedback-form');
const formState = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formState[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const savedState = localStorage.getItem('feedback-form-state');

if (savedState) {
  const parsedState = JSON.parse(savedState);

  formState.email = parsedState.email || '';

  formState.message = parsedState.message || '';
  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formState.email || !formState.message) {
    alert(`Fill please all fields`);
    return;
  }
  console.log({ ...formState });
  localStorage.removeItem('feedback-form-state');

  form.reset();

  formState.email = '';
  formState.message = '';
});
