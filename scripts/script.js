console.log(document.querySelectorAll('.button'));
let option;

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    option = button.innerHTML;
    removeClass();
    document.querySelector(`.b${option}`).classList.add('white');
    document.querySelector('.js-button').classList.add('opacity')
  })
});

document.querySelector('.js-button').addEventListener('click', () => {
  if (option) {
    document.body.innerHTML = `
      <main id="main">
        <img id="img" src="images/illustration-thank-you.svg" alt="illustration-thank-you">
        <div class="js-div"></div>
        <p id="p1">Thank you!</p>
        <p id="p2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </main>
    `
    document.querySelector('.js-div').innerHTML = `You selected ${option} out of 5`
  }
})

function removeClass() {
  document.querySelectorAll('.button').forEach((button) => {
    button.classList.remove('white')
  });
};