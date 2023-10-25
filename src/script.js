const target = document.querySelector('.circle');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  if (target.style.marginLeft == "69px") {
    target.style.backgroundColor = 'greenyellow'
    target.style.marginLeft = "0px"
  } else {
    target.style.backgroundColor = 'crimson'
    target.style.marginLeft = "69px"
  }
})
