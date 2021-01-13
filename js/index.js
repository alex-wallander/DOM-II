// Your code goes here
const navButton = document.querySelectorAll('.nav-link');
const highlight = document.querySelector('h2');
const source = document.querySelector('p');
const image = document.querySelectorAll('img');
const logo = document.querySelector('.logo-heading');

navButton.forEach((elem) => {
    elem.addEventListener('click', (event) =>{
        console.log('target', event.target);
        console.log('Current Target', event.currentTarget)
        event.preventDefault();
        event.stopPropagation();
    })
})

highlight.addEventListener('mouseover', function (event) {
    event.target.style.color = "blue";
    console.log('Welcome to the Fun Bus has been highlighted');
});

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
    console.log('Content copied');
    event.stopPropagation();
});

function tabKey(event) {
    if (event.key === 'Tab') {
        console.log('tab pressed');
    }
}
document.addEventListener("keydown", tabKey);

image.forEach((elem) =>{
    elem.addEventListener('dblclick', (event) => {
        console.log('Picture has been double-clicked', event.target);
    });
})

image.forEach((elem) =>{
    elem.addEventListener('mouseenter', (event) =>{
        console.log('The mouse has entered the image', event.target);
        event.stopPropagation();
    });
})


image.forEach((elem) =>{
    elem.addEventListener('mouseleave', (event) =>{
        console.log('The mouse has left the image', event.target);
        event.stopPropagation();
    });
})


window.addEventListener('resize', () =>{
    console.log(`Window Height: ${window.innerHeight}, Window Width: ${window.innerWidth}`);
})

window.addEventListener('scroll', (event) =>{
    console.log('This window is being scrolled', event.target);
})

window.addEventListener('keyup', (event) =>{
    document.querySelector('body').style.backgroundColor = "green";
})

window.addEventListener('load', (event) => {
    logo.style.color = 'purple';
    setInterval(function () {
        let color = logo.style.color;
        if (color === 'purple') {
            logo.style.color = 'blue';
        } else {
            logo.style.color = 'purple';
        }
    }, 500);
});