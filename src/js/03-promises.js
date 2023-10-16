const form = document.querySelector("form");

form.addEventListener('submit', handlerBtn);
function handlerBtn(evt) {
  evt.preventDefault();
  const firstDelay = Number(evt.target.elements.delay.value);
  const delayStep = Number(evt.target.elements.step.value);

  for (let i = 0; i < evt.target.elements.amount.value; i++){
    createPromise(i, firstDelay + delayStep * i)
      .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({position: position, delay: delay});
    } else {
      rej({position: position, delay: delay});
    }
  });
}

