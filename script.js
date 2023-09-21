const areaList = ["آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان", "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"];
const homeCode = ["041", "044", "045", "031", "084", "077", "021", "038", "051", "056", "058", "061", "024", "023", "054", "071", "026", "025", "028", "087", "034", "083", "074", "017", "013", "066", "011", "086", "076", "081", "035"];
const phoneCode = {
    1: ["0914"],
    2: ["0914"],
    3: ["0914"],
    4: ["0913", "0914", "0916"],
    5: ["0919", "0912"],
    6: ["0918"],
    7: ["0917"],
    8: ["0919", "0912"],
    9: ["0913", "0914"],
    10: ["0913", "0915"],
    11: ["0915"],
    12: ["0915"],
    13: ["0916"],
    14: ["0919", "0912"],
    15: ["0919", "0912"],
    16: ["0915"],
    17: ["0917", "0916"],
    18: ["0919", "0912"],
    19: ["0912", "0912"],
    20: ["0918"],
    21: ["0913"],
    22: ["0918"],
    23: ["0917"],
    24: ["0911"],
    25: ["0911"],
    26: ["0916"],
    27: ["0911"],
    28: ["0918", "0912"],
    29: ["0917"],
    30: ["0918"],
    31: ["0913"],
}

const inputPhoneArea = document.querySelector("#input-phone-area");
const inputHomeArea = document.querySelector("#input-home-area");
const inputHomeCode = document.querySelector("#input-home-code");

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

function phoneAreaToCode(){
    if (inputPhoneArea.value === ""){
        textPhoneCode.innerHTML = "یک استان انتخاب کنید";
    }
    else{
        const index = areaList.indexOf(inputPhoneArea.value);
        textPhoneCode.innerHTML = phoneCode[index+ 1];
    }
}



areaPopulating(inputPhoneArea, areaList);
areaPopulating(inputHomeArea, areaList);
areaPopulating(inputHomeCode, homeCode);


inputHomeArea.addEventListener("input", homeAreaToCode);
inputHomeCode.addEventListener("input", homeCodeToArea);
inputPhoneArea.addEventListener("input", phoneAreaToCode);


