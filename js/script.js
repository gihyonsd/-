var newWin = window.open("popup.html", "popup", "width=500, height=700", "left=400, top=200");
if(newWin == null) {
  alert("팝업이 차단되었으니 해제해주세요.");
}
function clickEffect(e){
  var d=document.createElement("div");
  d.className="clickEffect";
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click', clickEffect);




let menu;
let price;
let sum = 0;
let suma = 0;
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


function add1(menu, price) {
  if (menu == "a") {
    suma += parseInt(price);
    count1++;
  }
  let a = document.getElementById('mainName1').innerText;
  let b = document.getElementById('mainPrice1').innerText;
  let msg1 = a + " : " + b;
  document.querySelector("#msg1").innerHTML = msg1;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub1(menu, price) {
  if (menu == "a" && suma >= 0)
    suma -= parseInt(price);
  count1--;
  if (count1 < 0) {
    count1 = 0;
  }
  else if (count1 == 0) {
    document.querySelector("#msg1").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add2(menu, price) {
  if (menu == "b") {
    suma += parseInt(price);
    count2++;
  }
  let c = document.getElementById('mainName2').innerText;
  let d = document.getElementById('mainPrice2').innerText;
  let msg2 = c + " : " + d;
  document.querySelector("#msg2").innerHTML = msg2;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub2(menu, price) {
  if (menu == "b" && suma >= 0)
    suma -= parseInt(price);
  count2--;
  if (count2 < 0) {
    count2 = 0;
  }
  else if (count2 == 0) {
    document.querySelector("#msg2").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add3(menu, price) {
  if (menu == "c") {
    suma += parseInt(price);
    count3++;
  }
  let e = document.getElementById('mainName3').innerText;
  let f = document.getElementById('mainPrice3').innerText;
  let msg3 = e + " : " + f;
  document.querySelector("#msg3").innerHTML = msg3;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub3(menu, price) {
  if (menu == "c" && suma >= 0)
    suma -= parseInt(price);
  count3--;
  if (count3 < 0) {
    count3 = 0;
  }
  else if (count3 == 0) {
    document.querySelector("#msg3").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}


function add4(menu, price) {
  if (menu == "d") {
    suma += parseInt(price);
    count4++;
  }
  let g = document.getElementById('mainName4').innerText;
  let h = document.getElementById('mainPrice4').innerText;
  let msg4 = g + " : " + h;
  document.querySelector("#msg4").innerHTML = msg4;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub4(menu, price) {
  if (menu == "d" && suma >= 0)
    suma -= parseInt(price);
  count4--;
  if (count4 < 0) {
    count4 = 0;
  }
  else if (count4 == 0) {
    document.querySelector("#msg4").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add5(menu, price) {
  if (menu == "e") {
    suma += parseInt(price);
    count5++;
  }
  let i = document.getElementById('sideName1').innerText;
  let j = document.getElementById('sidePrice1').innerText;
  let msg5 = i + " : " + j;
  document.querySelector("#msg5").innerHTML = msg5;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub5(menu, price) {
  if (menu == "e" && suma >= 0)
    suma -= parseInt(price);
  count5--;
  if (count5 < 0) {
    count5 = 0;
  }
  else if (count5 == 0) {
    document.querySelector("#msg5").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add6(menu, price) {
  if (menu == "f") {
    suma += parseInt(price);
    count6++;
  }
  let k = document.getElementById('sideName2').innerText;
  let l = document.getElementById('sidePrice2').innerText;
  let msg6 = k + " : " + l;
  document.querySelector("#msg6").innerHTML = msg6;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub6(menu, price) {
  if (menu == "f" && suma >= 0)
    suma -= parseInt(price);
  count6--;
  if (count6 < 0) {
    count6 = 0;
  }
  else if (count6 == 0) {
    document.querySelector("#msg6").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add7(menu, price) {
  if (menu == "g") {
    suma += parseInt(price);
    count7++;
  }
  let m = document.getElementById('sideName3').innerText;
  let n = document.getElementById('sidePrice3').innerText;
  let msg7 = m + " : " + n;
  document.querySelector("#msg7").innerHTML = msg7;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub7(menu, price) {
  if (menu == "g" && suma >= 0)
    suma -= parseInt(price);
  count7--;
  if (count7 < 0) {
    count7 = 0;
  }
  else if (count7 == 0) {
    document.querySelector("#msg7").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add8(menu, price) {
  if (menu == "h") {
    suma += parseInt(price);
    count8++;
  }
  let o = document.getElementById('sideName4').innerText;
  let p = document.getElementById('sidePrice4').innerText;
  let msg8 = o + " : " + p;
  document.querySelector("#msg8").innerHTML = msg8;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub8(menu, price) {
  if (menu == "h" && suma >= 0)
    suma -= parseInt(price);
  count8--;
  if (count8 < 0) {
    count8 = 0;
  }
  else if (count8 == 0) {
    document.querySelector("#msg8").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add9(menu, price) {
  if (menu == "i") {
    suma += parseInt(price);
    count9++;
  }
  let q = document.getElementById('drinkName1').innerText;
  let r = document.getElementById('drinkPrice1').innerText;
  let msg9 = q + " : " + r;
  document.querySelector("#msg9").innerHTML = msg9;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub9(menu, price) {
  if (menu == "i" && suma >= 0)
    suma -= parseInt(price);
  count9--;
  if (count9 < 0) {
    count9 = 0;
  }
  else if (count9 == 0) {
    document.querySelector("#msg9").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add10(menu, price) {
  if (menu == "j") {
    suma += parseInt(price);
    count10++;
  }
  let s = document.getElementById('drinkName2').innerText;
  let t = document.getElementById('drinkPrice2').innerText;
  let msg10 = s + " : " + t;
  document.querySelector("#msg10").innerHTML = msg10;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub10(menu, price) {
  if (menu == "j" && suma >= 0)
    suma -= parseInt(price);
  count10--;
  if (count10 < 0) {
    count10 = 0;
  }
  else if (count10 == 0) {
    document.querySelector("#msg10").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add11(menu, price) {
  if (menu == "k") {
    suma += parseInt(price);
    count11++;
  }
  let u = document.getElementById('drinkName3').innerText;
  let v = document.getElementById('drinkPrice3').innerText;
  let msg11 = u + " : " + v;
  document.querySelector("#msg11").innerHTML = msg11;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub11(menu, price) {
  if (menu == "k" && suma >= 0)
    suma -= parseInt(price);
  count11--;
  if (count11 < 0) {
    count11 = 0;
  }
  else if (count11 == 0) {
    document.querySelector("#msg11").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function add12(menu, price) {
  if (menu == "l") {
    suma += parseInt(price);
    count12++;
  }
  let w = document.getElementById('drinkName4').innerText;
  let x = document.getElementById('drinkPrice4').innerText;
  let msg12 = w + " : " + x;
  document.querySelector("#msg12").innerHTML = msg12;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
}

function sub12(menu, price) {
  if (menu == "l" && suma >= 0)
    suma -= parseInt(price);
  count12--;
  if (count12 < 0) {
    count12 = 0;
  }
  else if (count12 == 0) {
    document.querySelector("#msg12").innerHTML = "";
  }
  sum = suma;
  if (suma >= 0) {
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if (suma < 0) {
    suma = 0;
  }
}

function reset() {
  suma = 0;
  sumb = 0;
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
  document.querySelector("#total").innerHTML = "";
}