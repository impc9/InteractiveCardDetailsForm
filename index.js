let yourName = document.getElementById("yourName");
let cardNum = document.getElementById("cardNum");
let dateMM = document.getElementById("dateMM");
let dateYY = document.getElementById("dateYY");
let cardCVC = document.getElementById("cardCVC");

// Input validation
let validName = false;
let validNum = false;
let validDate = false;
let validCVC = false;

if(yourName.value==="" || cardNum.value==="" || dateMM.value==="" || dateYY.value==="" || cardCVC.value===""){
    validName = false;
    validNum = false;
    validDate = false;
    validCVC = false;
}

// Taking input value with validation
yourName.addEventListener("blur", ()=>{
    let regex = /^[a-zA-Z]([0-9\sa-zA-Z]){2,30}$/;
    if(regex.test(yourName.value)){
        document.getElementById("nameValid").style.display = "none";
        yourName.style.border = "2px solid hsl(278, 94%, 30%)";
        validName = true;
    }
    else{
        document.getElementById("nameValid").style.display = "block";
        yourName.style.border = "2px solid hsl(0, 100%, 66%)";
    }
})

cardNum.addEventListener("blur", ()=>{
    let regex = /^([0-9\s]){19}$/;
    if(regex.test(cardNum.value)){
        document.getElementById("numValid").style.display = "none";
        cardNum.style.border = "2px solid hsl(278, 94%, 30%)";
        validNum = true;
    }
    else{
        document.getElementById("numValid").style.display = "block";
        cardNum.style.border = "2px solid hsl(0, 100%, 66%)";
    }
})

dateMM.addEventListener("blur", ()=>{
    let regex = /^([0-3]){1}([0-9]){1}$/;
    if(regex.test(dateMM.value)){
        document.getElementById("dateValid").style.display = "none";
        dateMM.style.border = "2px solid hsl(278, 94%, 30%)";
        validDate = true;
    }
    else{
        document.getElementById("dateValid").style.display = "block";
        dateMM.style.border = "2px solid hsl(0, 100%, 66%)";
    }
})

dateYY.addEventListener("blur", ()=>{
    let regex = /^([0-9]){2}$/;
    if(regex.test(dateYY.value)){
        document.getElementById("dateValid").style.display = "none";
        dateYY.style.border = "2px solid hsl(278, 94%, 30%)";
        validDate = true;
    }
    else{
        document.getElementById("dateValid").style.display = "block";
        dateYY.style.border = "2px solid hsl(0, 100%, 66%)";
    }
})

cardCVC.addEventListener("blur", ()=>{
    let regex = /^([0-9]){3}$/;
    if(regex.test(cardCVC.value)){
        document.getElementById("cvcValid").style.display = "none";
        cardCVC.style.border = "2px solid hsl(278, 94%, 30%)";
        validCVC = true;
    }
    else{
        document.getElementById("cvcValid").style.display = "block";
        cardCVC.style.border = "2px solid hsl(0, 100%, 66%)";
    }
})

// Adding auto space in number input
cardNum.addEventListener("input", ()=>{
    cardNum.value = cardNum.value.replace(/(\s)/g, "").replace(/(\d{4})/g, "$1 ").trim();
})

// function for taking all the input values
function cardDetails(){
    if(yourName.value==0){
        document.getElementById("showName").innerHTML = "YOUR NAME";
    }
    else{
        document.getElementById("showName").innerHTML = yourName.value.toUpperCase();
    }
    if(cardNum.value==0){
        document.getElementById("showNum").innerHTML  = "0000   0000   0000   0000   ";
    }
    else{
        document.getElementById("showNum").innerHTML  = cardNum.value;
    }
    if(dateMM.value==0 && dateYY.value==0){
        document.getElementById("showExpDate").innerHTML = "00/00";
    }
    else if(dateMM.value !=0 && dateYY.value==0){
        document.getElementById("showExpDate").innerHTML = dateMM.value+"/00";
    }
    else if(dateMM.value ==0 && dateYY.value!=0){
        document.getElementById("showExpDate").innerHTML = "00/"+dateYY.value;
    }
    else{
        document.getElementById("showExpDate").innerHTML = dateMM.value+"/"+dateYY.value;
    }
    if(cardCVC.value==0){
        document.getElementById("showCVC").innerHTML = "000";
    }
    else{
        document.getElementById("showCVC").innerHTML = cardCVC.value;
    }
}
    
// Live changes in card details
setInterval(cardDetails, 0);

// Completing the card details submittion
let confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click", ()=>{
    if(validName && validNum && validDate && validCVC){
        console.log("valid")
        document.getElementById("showName").innerHTML = yourName.value.toUpperCase();
        document.getElementById("showNum").innerHTML  = cardNum.value;
        document.getElementById("showExpDate").innerHTML = dateMM.value+"/"+dateYY.value;
        document.getElementById("showCVC").innerHTML = cardCVC.value;
        document.getElementById("workingPage").style.display = "none";
        document.getElementById("completePage").style.display = "flex";
    }
    else{
        document.getElementById("confirmValid").style.display = "block";
    }
})

// Continue to again start with new card details
let continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", ()=>{
    document.getElementById("workingPage").style.display = "block";
    document.getElementById("completePage").style.display = "none";
    document.getElementById("confirmValid").style.display = "none";
    yourName.value="";
    cardNum.value="";
    dateMM.value="";
    dateYY.value="";
    cardCVC.value="";

})
