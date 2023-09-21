const areaList = ["آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان", "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"];
const phoneCode = [];
const homeCode = ["041", "044", "045", "031", "084", "077", "021", "038", "051", "056", "058", "061", "024", "023", "054", "071", "026", "025", "028", "087", "034", "083", "074", "017", "013", "066", "011", "086", "076", "081", "035"];

const inputPhoneArea = document.querySelector("#input-phone-area");
const inputHomeArea = document.querySelector("#input-home-area");
const inputPhoneCode = document.querySelector("#input-phone-code");
const inputHomeCode = document.querySelector("#input-home-code");

const textPhoneArea = document.querySelector("#text-phone-area");
const textHomeArea = document.querySelector("#text-home-area");
const textPhoneCode = document.querySelector("#text-phone-code");
const textHomeCode = document.querySelector("#text-home-code");


function areaPopulating(input, list){
    for (let i=0; i<areaList.length; i++){
        const optionElememt = document.createElement("option");
        optionElememt.innerHTML = list[i];
        input.appendChild(optionElememt);
    }
}

function homeAreaToCode(){
    if (inputHomeArea.value === ""){
        textHomeCode.innerHTML = "یک استان انتخاب کنید";
    }
    else{
        const index = areaList.indexOf(inputHomeArea.value);
        textHomeCode.innerHTML = homeCode[index];
    }
}

function homeCodeToArea(){
    if (inputHomeCode.value === ""){
        textHomeArea.innerHTML = "یک کد انتخاب کنید";
    }
    else{
        const index = homeCode.indexOf(inputHomeCode.value);
        textHomeArea.innerHTML = areaList[index];
    }
}


areaPopulating(inputPhoneArea, areaList);
areaPopulating(inputHomeArea, areaList);
// areaPopulating(inputPhoneCode, phoneCode);
areaPopulating(inputHomeCode, homeCode);


inputHomeArea.addEventListener("input", homeAreaToCode);
inputHomeCode.addEventListener("input", homeCodeToArea);