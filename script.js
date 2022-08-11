const allCardsLink = document.querySelectorAll('.card-link');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const closeIcon = document.querySelector('.close-icon');
const arrowDownIcon = document.querySelector('.bx-down-arrow-alt');
const showModal = function () {
  overlay.classList.add('show');
};
const hiddeModal = function () {
  overlay.classList.remove('show');
};

allCardsLink.forEach(function (link) {
  link.addEventListener('click', function (event) {
    const cardBackgroundColor = getComputedStyle(this.parentElement).backgroundColor;
    const cardFontColor = getComputedStyle(this.parentElement).color;
    const cardText = this.previousElementSibling.textContent;
    event.preventDefault();
    showModal();
    modalText.scrollTop = 0;
    modal.style.background = cardBackgroundColor;
    modal.style.color = cardFontColor;
    modalText.textContent = cardText;
  });
});

closeIcon.addEventListener('click', hiddeModal);

overlay.addEventListener('click', function (event) {
  if (this === event.target) hiddeModal();
});

window.addEventListener('keyup', function (event) {
  const pressKeyEscape = event.key === 'Escape';
  if (pressKeyEscape) hiddeModal();
});

modalText.addEventListener('scroll', function () {
  const isTheEndOfText =
    modalText.scrollHeight - modalText.scrollTop === Number(getComputedStyle(modalText).maxHeight.replace(/\D/g, ''));
  if (isTheEndOfText) {
    arrowDownIcon.style.opacity = '0';
  } else {
    arrowDownIcon.style.opacity = '1';
  }
});
