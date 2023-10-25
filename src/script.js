const target = document.querySelector('.circle');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  if (target.style.marginLeft == "70px") {
    target.style.backgroundColor = 'greenyellow'
    target.style.marginLeft = "0px"
  } else {
    target.style.backgroundColor = 'crimson'
    target.style.marginLeft = "70px"
  }
})
