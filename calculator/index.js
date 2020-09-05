var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// getting the value of the buttons when they are clicked
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == '×') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}