let idx = 1;
let heightPercent = [85, 64, 58, 53, 50];
let widthPercent = [95, 64, 62, 60, 58];
let borderRadius = [2.5, 2.0, 1.8, 1.65, 1.5];
let brightness = [1, .5, .38, .30, .24];
let grayscale = [0, .5, .65, .8, 1];
let saturate = [1, .5, .42, .36, .32];
let flex = [176, 120, 90, 72, 60];

const fn = function () {
    let items = document.getElementsByClassName('item');

    items[idx].classList.toggle("hover");

    idx = (idx + 1) % 5;

    items[idx].classList.toggle("hover");

    for (let i = 0; i < 5; i++) {
        let lvl = (i > idx) ? i - idx : idx - i;

        items[i].style.flex = `${flex[lvl]}%`;

        image = items[i].getElementsByTagName("img")[0];
        image.style.borderRadius = `${borderRadius[lvl]}vh`;
        image.style.height = `${heightPercent[lvl]}%`;
        image.style.filter = `brightness(${brightness[lvl]}) grayscale(${grayscale[lvl]}) saturate(${saturate[lvl]})`;
    }

    document.body.style.backgroundImage = `url("./assets/imgs/00${idx + 1}.jpg")`;
}

const interval = setInterval(fn, 10000);
