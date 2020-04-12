document.querySelector('.one').onclick = () => {
    let a = document.querySelector('.i-1').value;
    console.log(a);
};

document.querySelector('.two').onclick = () => {
    let b = +document.querySelector('.i-2').value;
    console.log(b + 5);
};

document.querySelector('.color').onclick = () => {
    let c = document.querySelector('.i-3').value;
    document.querySelector('.color').style.background = c;
    console.log(c);
};

document.querySelector('.date').onclick = () => {
    let d = document.querySelector('.i-4').value;
    console.log(d);
};

document.querySelector('.numbers').onchange = () => {
    let e = document.querySelector('.numbers').value;
    console.log(e);
};

// document.querySelector('.numbers').value = 3;

document.querySelector('.ch-1').onchange = () => {
    if (document.querySelector('.ch-1').checked == true) {
        let ch = document.querySelector('.ch-1').value;
        console.log(ch);
    };
};

// document.querySelector('.ch-1').checked = true;
// document.querySelector('.ch-1').checked = false;