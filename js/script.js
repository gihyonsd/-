//  var newWin = window.open("popup.html", "popup", "width=100, height=700", "left=400, top=200");
//  if(newWin == null) {
//    alert("팝업이 차단되었으니 해제해주세요.");
// }
// function clickEffect(e) {
//   var d = document.createElement("div");
//   d.className = "clickEffect";
//   d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
//   document.body.appendChild(d);
//   d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
// }
// document.addEventListener('click', clickEffect);


let menu;
let price;
let sum = 0;
let suma = 0;
let sumb = 0;
let sumc = 0;
let sumd = 0;
let sume = 0;
let sumf = 0;
let sumg = 0;
let sumh = 0;
let sumi = 0;
let sumj = 0;
let sumk = 0;
let suml = 0;
let summ = 0;
let sumn = 0;
let sumo = 0;
let sump = 0;
let sumq = 0;
let sumr = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let count13 = 0;
let count14 = 0;
let count15 = 0;
let count16 = 0;
let count17 = 0;
let count18 = 0;

// var current = 0;
// showSlides();
// function showSlides() {
//   var slides = document.querySelectorAll(".slideShow > img");
//   for(let i = 0; i<slides.length; i++) {
//     slides[i].style.display = "none"; /* 모든 이미지 감춤 */
//   }
//   current++; /* 다음 이미지로 이동 */
//   if(current > slides.length) /* 마지막 이미지 */
//   current=1; /* 첫번째 이미지로 초기화 */
//   /* 현재 위치에 이미지 보이게 */
//   slides[current - 1].style.display = "block"; 
//   setTimeout(showSlides, 2000); /* 2초마다 showSlides() 실행 */
// }


function add1(menu, price) {
  if (menu == "a") {
    suma += parseInt(price);
    count1++;
    let resultElement = document.getElementById('result1');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let a = document.getElementById('mainName1').innerText;
  let msg1 = a + " : " + suma + " " + count1 + "개";
  document.querySelector("#msg1").innerHTML = msg1;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub1(menu, price) {
  if (menu == "a" && suma > 0) {
    suma -= parseInt(price);
    count1--;
    let a = document.getElementById('mainName1').innerText;
    let msg1 = a + " : " + suma + " " + count1 + "개";
    document.querySelector("#msg1").innerHTML = msg1;

    let resultElement = document.getElementById('result1');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count1 < 0) {
    count1 = 0;
  }
  else if (count1 == 0) {
    document.querySelector("#msg1").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;  
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add2(menu, price) {
  if (menu == "b") {
    sumb += parseInt(price);
    count2++;
    let resultElement = document.getElementById('result2');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let b = document.getElementById('mainName2').innerText;
  let msg2 = b + " : " + sumb + " " + count2 + "개";
  document.querySelector("#msg2").innerHTML = msg2;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;  
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub2(menu, price) {
  if (menu == "b" && sumb > 0) {
    sumb -= parseInt(price);
    count2--;
    let b = document.getElementById('mainName2').innerText;
    let msg2 = b + " : " + sumb + " " + count2 + "개";
    document.querySelector("#msg2").innerHTML = msg2;

    let resultElement = document.getElementById('result2');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count2 < 0) {
    count2 = 0;
  }
  else if (count2 == 0) {
    document.querySelector("#msg2").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;  
  if (sumb >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumb < 0) {
    sumb = 0;
  }
}

function add3(menu, price) {
  if (menu == "c") {
    sumc += parseInt(price);
    count3++;
    let resultElement = document.getElementById('result3');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let c = document.getElementById('mainName3').innerText;
  let msg3 = c + " : " + sumc + " " + count3 + "개";
  document.querySelector("#msg3").innerHTML = msg3;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;  
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub3(menu, price) {
  if (menu == "c" && sumc > 0) {
    sumc -= parseInt(price);
    count3--;
    let c = document.getElementById('mainName3').innerText;
    let msg3 = c + " : " + sumc + " " + count3 + "개";
    document.querySelector("#msg3").innerHTML = msg3;

    let resultElement = document.getElementById('result3');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count3 < 0) {
    count3 = 0;
  }
  else if (count3 == 0) {
    document.querySelector("#msg3").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;  
  if (sumc >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumc < 0) {
    sumc = 0;
  }
}

function add4(menu, price) {
  if (menu == "d") {
    sumd += parseInt(price);
    count4++;
    let resultElement = document.getElementById('result4');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let d = document.getElementById('mainName4').innerText;
  let msg4 = d + " : " + sumd + " " + count4 + "개";
  document.querySelector("#msg4").innerHTML = msg4;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub4(menu, price) {
  if (menu == "d" && sumd > 0) {
    sumd -= parseInt(price);
    count4--;
    let d = document.getElementById('mainName4').innerText;
    let msg4 = d + " : " + sumd + " " + count4 + "개";
    document.querySelector("#msg4").innerHTML = msg4;

    let resultElement = document.getElementById('result4');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count4 < 0) {
    count4 = 0;
  }
  else if (count4 == 0) {
    document.querySelector("#msg4").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumd >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumd < 0) {
    sumd = 0;
  }
}

function add5(menu, price) {
  if (menu == "e") {
    sume += parseInt(price);
    count5++;
    let resultElement = document.getElementById('result5');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let e = document.getElementById('mainName5').innerText;
  let msg5 = e + " : " + sume + " " + count5 + "개";
  document.querySelector("#msg5").innerHTML = msg5;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub5(menu, price) {
  if (menu == "e" && sume > 0) {
    sume -= parseInt(price);
    count5--;
    let e = document.getElementById('mainName5').innerText;
    let msg5 = e + " : " + sume + " " + count5 + "개";
    document.querySelector("#msg5").innerHTML = msg5;

    let resultElement = document.getElementById('result5');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count5 < 0) {
    count5 = 0;
  }
  else if (count5 == 0) {
    document.querySelector("#msg5").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sume >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sume < 0) {
    sume = 0;
  }
}

function add6(menu, price) {
  if (menu == "f") {
    sumf += parseInt(price);
    count6++;
    let resultElement = document.getElementById('result6');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let f = document.getElementById('mainName3').innerText;
  let msg6 = f + " : " + sumf + " " + count6 + "개";
  document.querySelector("#msg6").innerHTML = msg6;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub6(menu, price) {
  if (menu == "f" && sumf > 0) {
    sumf -= parseInt(price);
    count6--;
    let f = document.getElementById('mainName3').innerText;
    let msg6 = f + " : " + sumf + " " + count6 + "개";
    document.querySelector("#msg6").innerHTML = msg6;

    let resultElement = document.getElementById('result6');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count6 < 0) {
    count6 = 0;
  }
  else if (count6 == 0) {
    document.querySelector("#msg6").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumf >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumf < 0) {
    sumf = 0;
  }
}

function add7(menu, price) {
  if (menu == "g") {
    sumg += parseInt(price);
    count7++;
    let resultElement = document.getElementById('result7');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let g = document.getElementById('sideName7').innerText;
  let msg7 = g + " : " + sumg + " " + count7 + "개";
  document.querySelector("#msg7").innerHTML = msg7;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub7(menu, price) {
  if (menu == "g" && sumg > 0) {
    sumg -= parseInt(price);
    count7--;
    let g = document.getElementById('sideName7').innerText;
    let msg7 = g + " : " + sumg + " " + count7 + "개";
    document.querySelector("#msg7").innerHTML = msg7;

    let resultElement = document.getElementById('result7');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count7 < 0) {
    count7 = 0;
  }
  else if (count7 == 0) {
    document.querySelector("#msg7").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumg >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumg < 0) {
    sumg = 0;
  }
}

function add8(menu, price) {
  if (menu == "h") {
    sumh += parseInt(price);
    count8++;
    let resultElement = document.getElementById('result8');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let h = document.getElementById('sideName8').innerText;
  let msg8 = h + " : " + sumh + " " + count8 + "개";
  document.querySelector("#msg8").innerHTML = msg8;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub8(menu, price) {
  if (menu == "h" && sumh > 0) {
    sumh -= parseInt(price);
    count8--;
    let h = document.getElementById('sideName8').innerText;
    let msg8 = h + " : " + sumh + " " + count8 + "개";
    document.querySelector("#msg8").innerHTML = msg8;

    let resultElement = document.getElementById('result8');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count8 < 0) {
    count8 = 0;
  }
  else if (count8 == 0) {
    document.querySelector("#msg8").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumh >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumh < 0) {
    sumh = 0;
  }
}

function add9(menu, price) {
  if (menu == "i") {
    sumi += parseInt(price);
    count9++;
    let resultElement = document.getElementById('result9');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let i = document.getElementById('sideName9').innerText;
  let msg9 = i + " : " + sumi + " " + count9 + "개";
  document.querySelector("#msg9").innerHTML = msg9;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub9(menu, price) {
  if (menu == "i" && sumi > 0) {
    sumi -= parseInt(price);
    count9--;
    let i = document.getElementById('sideName9').innerText;
    let msg9 = i + " : " + sumi + " " + count9 + "개";
    document.querySelector("#msg9").innerHTML = msg9;

    let resultElement = document.getElementById('result9');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count9 < 0) {
    count9 = 0;
  }
  else if (count9 == 0) {
    document.querySelector("#msg9").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumi >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumi < 0) {
    sumi = 0;
  }
}

function add10(menu, price) {
  if (menu == "j") {
    sumj += parseInt(price);
    count10++;
    let resultElement = document.getElementById('result10');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let j = document.getElementById('sideName10').innerText;
  let msg10 = j + " : " + sumj + " " + count10 + "개";
  document.querySelector("#msg10").innerHTML = msg10;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub10(menu, price) {
  if (menu == "j" && sumj > 0) {
    sumj -= parseInt(price);
    count10--;
    let j = document.getElementById('sideName10').innerText;
    let msg10 = j + " : " + sumj + " " + count10 + "개";
    document.querySelector("#msg10").innerHTML = msg10;

    let resultElement = document.getElementById('result10');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count10 < 0) {
    count10 = 0;
  }
  else if (count10 == 0) {
    document.querySelector("#msg10").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumj >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumj < 0) {
    sumj = 0;
  }
}

function add11(menu, price) {
  if (menu == "k") {
    sumk += parseInt(price);
    count11++;
    let resultElement = document.getElementById('result11');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let k = document.getElementById('sideName11').innerText;
  let msg11 = k + " : " + sumk + " " + count11 + "개";
  document.querySelector("#msg11").innerHTML = msg11;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub11(menu, price) {
  if (menu == "k" && sumk > 0) {
    sumk -= parseInt(price);
    count11--;
    let k = document.getElementById('sideName11').innerText;
    let msg11 = k + " : " + sumk + " " + count11 + "개";
    document.querySelector("#msg11").innerHTML = msg11;

    let resultElement = document.getElementById('result11');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count11 < 0) {
    count11 = 0;
  }
  else if (count11 == 0) {
    document.querySelector("#msg11").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumk >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumk < 0) {
    sumk = 0;
  }
}

function add12(menu, price) {
  if (menu == "l") {
    suml += parseInt(price);
    count12++;
    let resultElement = document.getElementById('result12');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let l = document.getElementById('sideName12').innerText;
  let msg12 = l + " : " + suml + " " + count12 + "개";
  document.querySelector("#msg12").innerHTML = msg12;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub12(menu, price) {
  if (menu == "l" && suml > 0) {
    suml -= parseInt(price);
    count12--;
    let l = document.getElementById('sideName12').innerText;
    let msg12 = l + " : " + suml + " " + count12 + "개";
    document.querySelector("#msg12").innerHTML = msg12;

    let resultElement = document.getElementById('result12');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count12 < 0) {
    count12 = 0;
  }
  else if (count12 == 0) {
    document.querySelector("#msg12").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (suml >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suml < 0) {
    suml = 0;
  }
}

function add13(menu, price) {
  if (menu == "m") {
    summ += parseInt(price);
    count13++;
    let resultElement = document.getElementById('result13');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let m = document.getElementById('drinkName13').innerText;
  let msg13 = m + " : " + summ + " " + count13 + "개";
  document.querySelector("#msg13").innerHTML = msg13;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub13(menu, price) {
  if (menu == "m" && summ > 0) {
    summ -= parseInt(price);
    count13--;
    let m = document.getElementById('drinkName13').innerText;
    let msg13 = m + " : " + summ + " " + count13 + "개";
    document.querySelector("#msg13").innerHTML = msg13;

    let resultElement = document.getElementById('result13');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count13 < 0) {
    count13 = 0;
  }
  else if (count13 == 0) {
    document.querySelector("#msg13").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (summ >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (summ < 0) {
    summ = 0;
  }
}

function add14(menu, price) {
  if (menu == "n") {
    sumn += parseInt(price);
    count14++;
    let resultElement = document.getElementById('result14');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let n = document.getElementById('drinkName14').innerText;
  let msg14 = n + " : " + sumn + " " + count14 + "개";
  document.querySelector("#msg14").innerHTML = msg14;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub14(menu, price) {
  if (menu == "n" && sumn > 0) {
    sumn -= parseInt(price);
    count14--;
    let n = document.getElementById('drinkName14').innerText;
    let msg14 = n + " : " + sumn + " " + count14 + "개";
    document.querySelector("#msg14").innerHTML = msg14;

    let resultElement = document.getElementById('result14');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count14 < 0) {
    count14 = 0;
  }
  else if (count14 == 0) {
    document.querySelector("#msg14").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumn >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumn < 0) {
    sumn = 0;
  }
}

function add15(menu, price) {
  if (menu == "o") {
    sumo += parseInt(price);
    count15++;
    let resultElement = document.getElementById('result15');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let o = document.getElementById('drinkName15').innerText;
  let msg15 = o + " : " + sumo + " " + count15 + "개";
  document.querySelector("#msg15").innerHTML = msg15;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub15(menu, price) {
  if (menu == "o" && sumo > 0) {
    sumo -= parseInt(price);
    count15--;
    let o = document.getElementById('drinkName15').innerText;
    let msg15 = o + " : " + sumo + " " + count15 + "개";
    document.querySelector("#msg15").innerHTML = msg15;

    let resultElement = document.getElementById('result15');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count15 < 0) {
    count15 = 0;
  }
  else if (count15 == 0) {
    document.querySelector("#msg15").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumo >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumo < 0) {
    sumo = 0;
  }
}

function add16(menu, price) {
  if (menu == "p") {
    sump += parseInt(price);
    count16++;
    let resultElement = document.getElementById('result16');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let p = document.getElementById('drinkName16').innerText;
  let msg16 = p + " : " + sump + " " + count16 + "개";
  document.querySelector("#msg16").innerHTML = msg16;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub16(menu, price) {
  if (menu == "p" && sump > 0) {
    sump -= parseInt(price);
    count16--;
    let p = document.getElementById('drinkName16').innerText;
    let msg16 = p + " : " + sump + " " + count16 + "개";
    document.querySelector("#msg16").innerHTML = msg16;

    let resultElement = document.getElementById('result16');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count16 < 0) {
    count16 = 0;
  }
  else if (count16 == 0) {
    document.querySelector("#msg16").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sump >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sump < 0) {
    sump = 0;
  }
}

function add17(menu, price) {
  if (menu == "q") {
    sumq += parseInt(price);
    count17++;
    let resultElement = document.getElementById('result17');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let q = document.getElementById('drinkName17').innerText;
  let msg17 = q + " : " + sumq + " " + count17 + "개";
  document.querySelector("#msg17").innerHTML = msg17;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub17(menu, price) {
  if (menu == "q" && sumq > 0) {
    sumq -= parseInt(price);
    count17--;
    let q = document.getElementById('drinkName17').innerText;
    let msg17 = q + " : " + sumq + " " + count17 + "개";
    document.querySelector("#msg17").innerHTML = msg17;

    let resultElement = document.getElementById('result17');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count17 < 0) {
    count17 = 0;
  }
  else if (count17 == 0) {
    document.querySelector("#msg17").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumq >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumq < 0) {
    sumq = 0;
  }
}

function add18(menu, price) {
  if (menu == "r") {
    sumr += parseInt(price);
    count18++;
    let resultElement = document.getElementById('result18');
    let number = resultElement.innerText;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let r = document.getElementById('drinkName18').innerText;
  let msg18 = r + " : " + sumr + " " + count18 + "개";
  document.querySelector("#msg18").innerHTML = msg18;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub18(menu, price) {
  if (menu == "r" && sumr > 0) {
    sumr -= parseInt(price);
    count18--;
    let r = document.getElementById('drinkName18').innerText;
    let msg18 = r + " : " + sumr + " " + count18 + "개";
    document.querySelector("#msg18").innerHTML = msg18;

    let resultElement = document.getElementById('result18');
    let number = resultElement.innerText;
    if(number >= 0){
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }
  if (count18 < 0) {
    count18 = 0;
  }
  else if (count18 == 0) {
    document.querySelector("#msg18").innerHTML = "";
  }
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh +sumi + sumj + sumk + suml + summ + sumn + sumo + sump + sumq + sumr;
  if (sumr >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (sumr < 0) {
    sumr = 0;
  }
}

function reset() {
  sum = 0;
  suma = 0;
  sumb = 0;
  sumc = 0;
  sumd = 0;
  sume = 0;
  sumf = 0;
  sumg = 0;
  sumh = 0;
  sumi = 0;
  sumj = 0;
  sumk = 0;
  suml = 0;
  summ = 0;
  sumn = 0;
  sumo = 0;
  sump = 0;
  sumq = 0;
  sumr = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  count9 = 0;
  count10 = 0;
  count11 = 0;
  count12 = 0;
  count14 = 0;
  count15 = 0;
  count16 = 0;
  count17 = 0;
  count18 = 0;

  document.querySelector("#result1").innerHTML = 0;
  document.querySelector("#result2").innerHTML = 0;
  document.querySelector("#result3").innerHTML = 0;
  document.querySelector("#result4").innerHTML = 0;
  document.querySelector("#result5").innerHTML = 0;
  document.querySelector("#result6").innerHTML = 0;
  document.querySelector("#result7").innerHTML = 0;
  document.querySelector("#result8").innerHTML = 0;
  document.querySelector("#result9").innerHTML = 0;
  document.querySelector("#result10").innerHTML = 0;
  document.querySelector("#result11").innerHTML = 0;
  document.querySelector("#result12").innerHTML = 0;
  document.querySelector("#result13").innerHTML = 0;
  document.querySelector("#result14").innerHTML = 0;
  document.querySelector("#result15").innerHTML = 0;
  document.querySelector("#result16").innerHTML = 0;
  document.querySelector("#result17").innerHTML = 0;
  document.querySelector("#result18").innerHTML = 0;
    

  
  document.querySelector("#msg1").innerHTML = "";
  document.querySelector("#msg2").innerHTML = "";
  document.querySelector("#msg3").innerHTML = "";
  document.querySelector("#msg4").innerHTML = "";
  document.querySelector("#msg5").innerHTML = "";
  document.querySelector("#msg6").innerHTML = "";
  document.querySelector("#msg7").innerHTML = "";
  document.querySelector("#msg8").innerHTML = "";
  document.querySelector("#msg9").innerHTML = "";
  document.querySelector("#msg10").innerHTML = "";
  document.querySelector("#msg11").innerHTML = "";
  document.querySelector("#msg12").innerHTML = "";
  document.querySelector("#msg13").innerHTML = "";
  document.querySelector("#msg14").innerHTML = "";
  document.querySelector("#msg15").innerHTML = "";
  document.querySelector("#msg16").innerHTML = "";
  document.querySelector("#msg17").innerHTML = "";
  document.querySelector("#msg18").innerHTML = "";
  document.querySelector("#total").innerHTML = "";
}