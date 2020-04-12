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