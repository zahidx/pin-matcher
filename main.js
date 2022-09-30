let tr = 3;
btnDisable();

document.getElementById('btn-style').addEventListener('click', function () {
    let x = Math.floor((Math.random() * 10000));
    if (x < 1000) {
        x = x * 10;
    }
    document.getElementById('rand-pin').value = x;
});

document.getElementById('btn-7').addEventListener('click', function () {

    const num = document.getElementById('match-pin');
    const a = num.value + "7";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }

});

document.getElementById('btn-8').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "8";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }

});

document.getElementById('btn-9').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "9";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }

});

document.getElementById('btn-1').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "1";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }

});

document.getElementById('btn-2').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "2";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }

});

document.getElementById('btn-3').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "3";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }


});

document.getElementById('btn-4').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "4";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }


});

document.getElementById('btn-5').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "5";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }


});

document.getElementById('btn-6').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "6";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }


});

document.getElementById('btn-0').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = num.value + "0";
    document.getElementById('match-pin').value = a;
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }


});

document.getElementById('btn-clear').addEventListener('click', function () {

    document.getElementById('match-pin').value = "";
    document.getElementById('btn1').disabled = true;

    btnDisable();


});

document.getElementById('btn-back').addEventListener('click', function () {
    const num = document.getElementById('match-pin');
    const a = parseInt(num.value / 10);
    if (a == 0) {
        document.getElementById('match-pin').value = '';
    }
    else {
        document.getElementById('match-pin').value = a;
    }
    if (parseInt(a) >= 1000 && parseInt(a) < 10000 && tr > 0) {
        btnEnable();
    }
    else {
        btnDisable();
    }

});
function btnEnable() {
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn1').style.backgroundColor = "#0f12dc";
    document.getElementById('btn1').style.color = "white";

}
function btnDisable() {
    document.getElementById('btn1').style.backgroundColor = "#414395";
    document.getElementById('btn1').style.color = "#9aa1a7";
    document.getElementById('btn1').disabled = true;
}

document.getElementById('btn1').addEventListener('click', function () {
    const randPin = document.getElementById('rand-pin');
    const matchPin = document.getElementById('match-pin');

    if (document.getElementById('btn1').value == '') {
        document.getElementById('btn1').disabled = true;
    }

    if (randPin.value == matchPin.value) {
        const result = document.getElementById('success');
        document.getElementById('fail').style.display = 'none';
        result.style.display = 'block';
    }
    else {
        tr = tr - 1;
        const result = document.getElementById('fail');
        document.getElementById('success').style.display = 'none';
        result.style.display = 'block';
        document.getElementById('try').innerText = tr;
    }
    if (tr <= 0) {
        btnDisable();
        const result = document.getElementById('fail');
        const output=result.innerText+"\nTry later.";
        result.innerText=output;

        document.getElementById('try1').style.color = "red";
    }
    else if (tr == 2) {
        document.getElementById('try1').style.color = "greenyellow";

    }
    else if (tr == 1) {
        document.getElementById('try1').style.color = "#B0BF1A";

    }
    randPin.value = '';
    matchPin.value = '';
    btnDisable();



});




