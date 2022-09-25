const cardno_input = document.querySelector("#cardno_input");
const cardname_input = document.querySelector("#name");
const datem = document.querySelector("#date");
const datey = document.querySelector("#date1");
const cvv = document.querySelector("#number");
const cardexpmonth_output = document.querySelector("#cardexpmonth_output");
const cardexpyear_output = document.querySelector("#cardexpyear_output");
const cardcvv_output = document.querySelector("#cardcvv_output");
const cardno_output = document.querySelector("#cardno_output"); 
const cardname_output = document.querySelector("#cardname_output");
const btn = document.querySelector("button");


cardno_input.addEventListener("input",()=>{
    cardno_output.innerHTML = cardno_input.value;
    console.log(cardno_input.value);
})
cardname_input.addEventListener("input", () => {
    cardname_output.innerHTML = cardname_input.value;
    console.log(cardname_input.value);
})
datem.addEventListener("input", () => {
    cardexpmonth_output.innerHTML = datem.value;
    console.log(datem.value);
})
datey.addEventListener("input", () => {
    cardexpyear_output.innerHTML = datey.value;
    console.log(datey.value);
})
cvv.addEventListener("input", () => {
    cardcvv_output.innerHTML = cvv.value;
    console.log(cvv.value);
})

