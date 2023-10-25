const target = document.querySelector('.circle');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    if (target.style.transform == "translate(25%, 0%)") {
        target.style.backgroundColor = 'greenyellow'
        target.style.transform = "translate(-120%, -0%)"
    } else {
        target.style.backgroundColor = 'crimson'
        target.style.transform = "translate(25%, 0%)"
    }
})
