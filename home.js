//print 'Hello world!'
console.log('Hello world!');
//alert('Anjing!'); ==> DITUTUP DULU

//declare STRING
var b = 'bahlul';
console.log("'var b' isinya = " + b);

//declare INTEGER
var someNumber = 45;
console.log("'var someNumber' isinya : " + someNumber);

//TAKE OVER VALUE of <p id = "someText"> in file index.html
//document.getElementById('someText').innerHTML = 'kontol kuda'; ==> DITUTUP DULU

/**
 * MANIPULATE DOM with javascript
 * ... MEANING just FANCY WAY to change HTML with javascript
 */

//'prompt' is used to GET VALUE of 'VAR age' that is TYPED IN 'prompt'
var age = prompt('Sebutkan nama anjing paling bangsat?');
//VALUE of 'age' and THEN FILLED TO 'someText' IN HTML file
document.getElementById('someText').innerHTML = age;

/**
 * NUMBERS in javascript
 */
var num1 = 5.7;
console.log("hasil 4 x num1 =  " + 4 * num1);


var num2 = 10;
num2++;
//increment
console.log("increment 'num2' = " + num2--);
//decrement
console.log("decrement 'num2' = " + num2);
//remainder
console.log("num2 % 6 = " + num2 % 6);
//INCREMENT with ANY NUMBER
num2 += 10;
console.log("increment 'num2' with 10 = " + num2);

/**
 * FUNCTIONS in javascript ==> kaya METHOD di JAVA
 * 
 * STEP
 * 1. CREATE your function
 * 2. CALL the function
 */

//CREATE function fun()
function fun() {
    alert("Test function!");
}

//CALL function fun()
fun();

//this is FUNCTION with INPUT
function salam(yourName) {
    var tampilin = console.log("So, ur name is " + yourName);
}
var nama = prompt("What is your name?");
salam(nama);

//this is FUNCTION with PARAMETER
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log("Hasil jumlah num1 + num2 = " + result);
}

sumNumbers(13, 19); //FUNGSI ini JUMLAHIN 2 buah ANGKA
sumNumbers("cewek"," anjing"); //FUNGSI ini MENGGABUNGKAN 2 buah STRING berupa KATA
sumNumbers('01','02'); //FUNGSI ini MENGGABUNGKAN 2 buah STRING berupa INTEGER

/**
 * WHILE vs FOR loop in javascript
 * */
var num = 0;

//loop of WHILE
while(num < 10) {
    num += 1;
    console.log(num);
}

//loop of FOR
for(let num = 0; num < 10; num++) {
    console.log("for " + num);
}

/**
 * DATA TYPES in javascript
 */
let yourAge = 18; //number
let yourName = "Bob"; //string
let name = {first: "Jane", last: "Doe"}; //object - HAVE value pair --> called as 'DICTIONARY' in PHYTON
let truth = false; //boolean
let groceries = ["apple","banana","cherry"]; //array DO NOT have value pair --> called as 'LIST' in PHYTON
let random; //undefined
let nothing = null;
console.log("let 'random' isinya " + random);
console.log("let 'nothing' isinya " + nothing);

/**
 * STRINGS in javascript (COMMON method)
 */
let fruit = "PisangapeL"; // with NO NEW LINE
let fruit2 = "apel, bengkoang, ceri";
let moreFruits = "banana\napple"; //with NEW LINE
console.log(fruit);
console.log(moreFruits);

console.log("panjang character isi variable 'fruit' : " + fruit.length);
console.log("panjang array 'groceries' : " + groceries.length);

//TES INDEX dengan menggunakan HURUF SESUAI
console.log("suku kata 'nga' (HURUF SESUAI) dari variable 'fruit' ada di index ke : " + fruit.indexOf("nga"));
//TES INDEX dengan menggunakan HURUF TIDAK SESUAI
console.log("suku kata 'NGA' (HURUF TIDAK SESUAI) dari variable 'fruit' ada di index ke : " + fruit.indexOf("NGA"));
console.log("suku kata 'ngasal' dari variable 'fruit' ada di index ke : " + fruit.indexOf("ngasal"));
//MOTONG STRING dari ISI VARIABLE 'fruit' INDEX 0-2 (sebelum 3)
console.log("SLICING STRING from INDEX 0-2 : " + fruit.slice(0, 3));
//MOTONG STRING dari ISI VARIABLE 'fruit' INDEX 9-11 (sebelum 12)
console.log("SLICING STRING from INDEX 9-11 : " + fruit.slice(9, 12));
console.log(fruit.replace("apeL"," panjang"));
console.log("PisangapeL --> " + fruit.toUpperCase(fruit) + " <== toUpperCase");
console.log("PisangapeL --> " + fruit.toLowerCase(fruit) + " <== toLowerCase");
console.log(fruit.charAt(9) + " <-- ini AMBIL KARAKTER pake 'chartAt(x)");
console.log(fruit[9] + " <-- ini AMBIL KARAKTER pake '[x]'");
//ini DIPISAHIN pake 'split('')'
console.log(fruit.split(''));
//DIPISAHIN pake 'split(',') tapi GAK KEPISAH karena cuma SATU KATA
console.log(fruit.split(","));
console.log(fruit2.split(" "));
//ini GABUNGIN DUA VAR pakai 'concat'
console.log(fruit.concat(" " + fruit2) + " <-- ini GABUNGIN VARIABLE pakai '.concat()'");
console.log(fruit + " " + fruit2 + " <-- ini GABUNGIN VARIABLE pakai SIMBOL '+' BIASA");

/**
 * ARRAYS in Javascript
 */
let fruit3 = ["strawberry","orange","pineappe","watermelon"];
fruit3 = new Array("strawberry","orange","pineapple","watermelon");

console.log("ISI 'fruit3' index 0 --> " + fruit3[0]);
console.log("ISI 'fruit3' index 2 --> " + fruit3[2]);

fruit3[1] = "jeruk";
console.log(fruit3);
for(let i = 0; i < fruit3.length; i++) {
    console.log(fruit3[i] + " <-- PRINTED with 'for' LOOP");
}
//ini GABUNGIN 2 buah PRINT pakai KOMA (2 parameter)
console.log("toString ==>", fruit3.toString());
console.log(fruit3.join(" * ") + " <-- ISI array DIPISAH-PISAH terus DIGABUNG pakai CHARACTER ' * '");
console.log(fruit3, fruit3.pop(), fruit3); //'.pop()' REMOVE LAST ITEM from array/list
console.log(fruit3.push("new fruit"), fruit3); //'.push()' APPEND NEW ITEM to array/list AT LAST POSITION
console.log(fruit3, fruit3.shift(), fruit3); //'.shift()' REMOVE 1st ITEM from array/list
console.log(fruit3.unshift("kiwi"), fruit3); //'.unshift()' APPEND NEW ITEM to array/list AT 1st POSITION

let vegetable = ["asparagus","tomato","brocoli"];
let allGroceries = fruit3.concat(vegetable); //ARRAY GABUNGAN dari 'fruit3' & 'allGroceries'
console.log(allGroceries + " <-- ARRAY 'allGroceries' di-PRINT sesuai URUTAN ASLI"); 
console.log(allGroceries.reverse() + " <-- ARRAY 'allGroceries' di-PRINT dengan URUTAN TERBALIK"); //PRINTING ARRAY dengan URUTAN TERBALIK
console.log(allGroceries.slice(1, 4)); //MOTONG ISI ARRAY dari index 1-3
console.log(allGroceries[0].slice(1, 4)); //MOTONG ISI ARRAY index 0 DARI CHARAcTER 1-3
console.log(allGroceries.sort()); //SORTIR isi ARRAY dengan URUTAN ASCENDING

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumbers);
console.log(someNumbers.sort()); //SORTIR dilakukan dengan URUTAN ASCENDING
console.log(someNumbers.sort(function(a, b) {return a-b})); //SORTIR dengan urutan KECIL -> BESAR
console.log(someNumbers.sort(function(a, b) {return b-a})); //SORTIR dengan urutan BESAR -> KECIL

console.log("test popping : " + someNumbers.pop());

let emptyArray = new Array(); //'new ARRAY()' HARUS DI-DEFINE supaya BISA MENGGUNAKAN PROPERTI 'push()'
for(let num = 0; num <= 10; num++) {
    emptyArray.push(num);
    console.log(emptyArray);
}

/**
 * OBJECTS in Javascript ==> KNOWN AS 'dictionaries' in Python
 */
//this is JAVASCRIPT Array FORMATTING
 let student = {
    first:"Rafeh",
    last:"Qazi",
    age:25,
    height:170,
    studentInfo: function() {
        //FUNGSI 'this.' MIRIP seperti 'self.' di PHYTON
        return this.first + '\n'  + this.last + " " + this.age;
    }
};
console.log(student.first + " <-- PRINTING pakai '.attribute'");
console.log(student["first"] + " <-- {PRINTING} pakai '[\"attribute\"]'");
//console.log(student[first] + " <-- PRINTING pakai '[attribute]'") ==> UNWORKING EXAMPLE
console.log(student.last);

student.first = "noRafeh";
console.log(student.first + " <-- ISI array 'student.first' DIUBAH JADI 'noRafeh' (TADINYA 'Rafeh')");
student.age++;
console.log(student.age);
console.log(student["age++"] + " <== ADDING INCREMENT using '[\"age++\"]' DOESN'T WORK!");
console.log(student.studentInfo() + " <== APPLY FUNCTION studentInfo()");

/**
 * IF-ELSE CONDITIONALS and SWITCH STATEMENT in Javascript
 */
// Conditionals, Control Flows (IF-ELSE)

// e.g: 18-35 is demographic criteria
// && AND; || OR

// 'let' CAN'T BE USED for 'prompt', USE 'var' instead
var age = prompt("What is your age");

if ((age >= 18) && (age <= 35)) {
    status = "target demo";
    alert(status);
} else {
    status = "not my audience";
    alert(status);
}

// SWITCH statement
// how-to DIFFERENTIATE weekend VS weekdays
// day 0 --> sunday --> weeked
// day 1 --> monday
// day 2 --> tuesday
// day 3 --> wednesday
// day 4 --> thursday
// day 5 --> friday --> weeked
// day 6 --> saturday --> weeked
var daysIndex = prompt("Input the days index!");
switch (daysIndex) {
    case 0:
        dayStatus = "weekend";
        break;
    case 5:
        dayStatus = "weekend";
        break;
    case 6:
        dayStatus = "weekend";
        break;
    default:
        dayStatus = "weekdays";
}
console.log("Days index of " + daysIndex + " is " + dayStatus);
console.log(name[0]);