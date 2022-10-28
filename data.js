function bg1() {
    let bg1 = document.getElementById("bgm1")

bg1.addEventListener('mouseover', () => {
    bgm1.style.backgroundImage = `url('Images/bg-gif1.gif')`;
});

}

function bgb1() {

    let bg1 = document.getElementById("bgm1")

    bg1.addEventListener('mouseover', () => {
        bgm1.style.backgroundImage = `url('Images/bg-1.jpg')`;
    });
}

function bg2() {
    let bg1 = document.getElementById("bgm1")

bg1.addEventListener('mouseover', () => {
    bgm1.style.backgroundImage = `url('Images/letsgo-gif.gif')`;
});



}

function bgb2() {

    let bg1 = document.getElementById("bgm1")

    bg1.addEventListener('mouseover', () => {
        bgm1.style.backgroundImage = `url('Images/bg-1.jpg')`;
    });
}

let background = document.getElementById('background1')
let mode = document.getElementById('mode')


function darkMode() {
    if (mode.textContent = "DarkMode" ) {
        mode.textContent = `LightMode`;

        background.classList.toggle("dark");
        
    }
}