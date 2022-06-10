/*    Jeff    6/10/2022

Home-made Calculator
*/

"use strict";


// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('Text1').addEventListener('onclick', XXXXXXXXXXXXXXX)
// })


let arr1 = [];
let arr1Numbers = [];

let description;
description = document.getElementById("info1");

function Add() {

    let val1 = document.getElementById('Text1').value;
    let val2 = document.getElementById('Text2').value;

    arr1.push(val1, val2);

    for (var i = 0; i < arr1.length; i++)
        arr1Numbers.push(parseInt(arr1[i])
        );

    if (arr1Numbers.length > 2) {
        let subTotal = arr1Numbers[arr1Numbers.length - 2] + arr1Numbers[arr1Numbers.length - 1];
        description.innerHTML = subTotal.toFixed(3);
        console.log("arr1numbers more than 1")
    } else {
        console.log("arr1numbers less than 1")
        description.innerHTML = arr1Numbers[0] + arr1Numbers[1];
    }

    // document.forms[0].reset();
}

function Subtract() {

    let val1 = document.getElementById('Text1').value;
    let val2 = document.getElementById('Text2').value;

    arr1.push(val1, val2);

    for (var i = 0; i < arr1.length; i++)
        arr1Numbers.push(parseInt(arr1[i])
        );

    if (arr1Numbers.length > 2) {
        let subTotal = arr1Numbers[arr1Numbers.length - 2] - arr1Numbers[arr1Numbers.length - 1];
        description.innerHTML = subTotal.toFixed(3);
        console.log("arr1numbers more than 1")
    } else {
        console.log("arr1numbers less than 1")
        description.innerHTML = arr1Numbers[0] + arr1Numbers[1];
    }
}

function Multiply() {

    let val1 = document.getElementById('Text1').value;
    let val2 = document.getElementById('Text2').value;

    arr1.push(val1, val2);

    for (var i = 0; i < arr1.length; i++)
        arr1Numbers.push(parseInt(arr1[i])
        );
    console.log(arr1Numbers);

    if (arr1Numbers.length > 2) {
        let subTotal = arr1Numbers[arr1Numbers.length - 2] * arr1Numbers[arr1Numbers.length - 1];
        description.innerHTML = subTotal.toFixed(3);
        console.log("arr1numbers more than 1")
    } else {
        console.log("arr1numbers less than 1")
        description.innerHTML = arr1Numbers[0] + arr1Numbers[1];
    }
}

function Divide() {

    let val1 = document.getElementById('Text1').value;
    let val2 = document.getElementById('Text2').value;

    arr1.push(val1, val2);

    for (var i = 0; i < arr1.length; i++)
        arr1Numbers.push(parseInt(arr1[i])
        );
    console.log(arr1Numbers);

    if (arr1Numbers.length > 2) {
        let subTotal = arr1Numbers[arr1Numbers.length - 2] / arr1Numbers[arr1Numbers.length - 1];
        description.innerText = subTotal.toFixed(3);
        console.log("arr1numbers more than 1")
    } else {
        console.log("arr1numbers less than 1")
        description.innerHTML = arr1Numbers[0] + arr1Numbers[1];
    }
}
/* ____ Remove Buttons ____*/

function RemoveOne() {
    arr1.splice(0, arr1.length)
    document.getElementById('Text1').value = "";
}
function RemoveTwo() {
    arr1.splice(0, arr1.length)
    document.getElementById('Text2').value = "";
}