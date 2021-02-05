const calcForm = document.querySelector(".calc__form");
const calcSum = document.querySelector(".calc__summary");
const total = document.querySelector("#total-price");
const sumTotal = document.querySelector(".total__price");
const price = calcSum.querySelectorAll(".item__price");
sumTotal.innerHTML = "$0";
total.style.display = " flex";

const elementsSum = function () {
    let sum = 0;
    price.forEach(el => {
        if (el.value !== 0) {
            sum += +el.getAttribute("value");
        }
    });
    return (sum.toFixed(2));
}



//INPUTY


const inputOne = calcForm.querySelector("#products");
const inputTwo = calcForm.querySelector("#orders");

function calcInputs(input) {

    input.addEventListener("input", e => {
        const id = input.id;
        const value = input.value;
        const div = document.querySelector(`[data-id="${id}"]`);
        if (value !== "") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
        const calc = div.querySelector(".item__calc");
        const price = div.querySelector(".item__price");
        calc.innerHTML = `${value} * $0.5`;
        price.innerHTML = `$${value * 0.5}`;
        price.setAttribute("value", `${value * 0.5}`);
        sumTotal.innerHTML = "";
        sumTotal.append("$" + elementsSum());
    });
}

calcInputs(inputOne);
calcInputs(inputTwo);



//CHECKBOXY


const chbxAcc = calcForm.querySelector("#accounting");
const chbxTerminal = calcForm.querySelector("#terminal");

function checkbox(chbx) {

    chbx.addEventListener("click", e => {
        const id = chbx.id;
        const status = chbx.checked;
        const div = document.querySelector(`[data-id="${id}"]`);
        if (status === true) {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
        const accValue = calcSum.querySelector("[data-id = accounting]");
        const termValue = calcSum.querySelector("[data-id = terminal]");


        if (chbx.id === "accounting"){
            const price = status ? "25" : "0";
            accValue.children[1].setAttribute("value", price);
        }else if (chbx.id === "terminal"){
            const price = status ? "10" : "0";
            termValue.children[1].setAttribute("value", price);
        }


        sumTotal.innerHTML = "";
        sumTotal.append("$" + elementsSum());
    });
}

checkbox(chbxAcc);
checkbox(chbxTerminal);




//SELECT


const select = document.querySelector("#package");
const arrow = document.querySelector(".select__input");
const selectOpt = select.querySelectorAll("li");

arrow.addEventListener("click", e => {
    select.classList.add("open");
});

function packagePrice(element) {
    const basic = document.querySelector(".option__price");
    const prof = document.querySelector(".option__price2");
    const premium = document.querySelector(".option__price3");
    if (element.innerHTML === "Premium") {
        element.parentElement.children[2].innerHTML = premium.innerHTML;
        const pacValue = calcSum.querySelector("[data-id = package]");
        pacValue.children[2].setAttribute("value", "60");
    } else if (element.innerHTML === "Professional") {
        element.parentElement.children[2].innerHTML = prof.innerHTML;
        const pacValue = calcSum.querySelector("[data-id = package]");
        pacValue.children[2].setAttribute("value", "25");
    } else {
        element.parentElement.children[2].innerHTML = basic.innerHTML;
        const pacValue = calcSum.querySelector("[data-id = package]");
        pacValue.children[2].setAttribute("value", "0");
    }
}

selectOpt.forEach(el => {
    el.addEventListener("click", e => {
        select.classList.remove("open");
        select.dataset.value = el.dataset.value;
        arrow.innerHTML = el.innerHTML;

        const id = select.id;
        const div = document.querySelector(`[data-id="${id}"]`);
        const pack = div.querySelector(".item__calc");
        if (select.dataset.value === el.dataset.value) {
            pack.innerHTML = arrow.innerHTML;
            packagePrice(pack);
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
        sumTotal.innerHTML = "";
        sumTotal.append("$" + elementsSum());
    })
})

















