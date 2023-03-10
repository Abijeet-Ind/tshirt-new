// rgb(238, 39, 97) = box background color
// white = font color

const choose_size = document.querySelectorAll('.size');
const quantity = document.querySelectorAll('.qty');
const colors = document.querySelectorAll('.colors');


// function to change color and remove the previous color 
buttonColor = (onlyClick, className) => {
    onlyClick.forEach(el => {
        el.addEventListener('click', e => {
            onlyClick.forEach(ele => {
                if (ele.classList.contains(className)) {
                    ele.classList.remove(className)
                }
            })
            return el.classList.toggle(className);
        })
    })
}

buttonColor(choose_size, 'changeColor');
buttonColor(quantity, 'changeColor');
buttonColor(colors, 'applyBorder');
