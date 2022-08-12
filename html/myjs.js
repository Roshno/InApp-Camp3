let mytext = "Hello and Welcome";
//let parttext = mytext.slice(4,10);
//let parttext = mytext.slice(-11,-4);
//let parttext = mytext.slice(5);
let parttext = mytext.substring(5);
//alert(parttext);

//string replacement with replace()
mytext = "Hi There! How are you. ";
let newtext = mytext.replace("How", "Who");
//alert(newtext);

//joining tw strings using javascript
mytext2 = "Hope you are doing fine";
let myjoinedtext = mytext.concat(mytext);
//alert(myjoinedtext);

//changing case
//alert(mytext2.toUpperCase());
//alert(mytext2.toLowerCase());

//trim space
//var mytext3 = "  hi   ";
//alert(mytext3.trim());

//select char/ascii from the string
let text4 = "Hello World";
//alert(text4.charAt(3));
//alert(text4.charCodeAt(3));

//basic arithymetic operations in js
var a = 3, b = 2;
var result = a + b;
//alert(result);


//evaluate math expresiion using js
var result = eval("a*b+b+2+3");
//alert(result);

a = 5, b = 10, c = 5;
var result = a === b;
//alert(result);

var result = a !== b;
//alert(result);

var result = a>b;
//alert(result);

//conditional operators
var a = 5;
var b = 10;
if (a>b) {
    //alert(a+' is greater than '+b)
} else {
    //alert(a+' is less or equal than '+b)
}

//switch case\
var day;
switch (new Date().getDay()) {
    case 1: 
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3: 
        day = "Wednesday";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
    default:
        day = "Weekend";
}
//alert(day);


//loops in javascript
//while loop
var a = 5;
while (a<10) {
    //alert(a);
    a ++;
}

//for loop
for (var i = 1; i < 10; i++) {
    //alert(i);
}

//JavaScript functions
//simple function declaration
function add(a,b) {
    return a+b;
}

// OR

add = function(a,b) {
    return a+b;
}
var result = add(3,4);
//alert(result);

//arrow functions declaration in javascript
var square = a => {
    //console.log("The number is "+a);
    return a*a;
};
var result = square(4);
//console.log(result);

//a single line arrow function ( if only one statement)
var square = a => a*a;
var result = square(25);
//console.log(result);

//mapping an array to an arrow function
var myarray = [2, 4, 6];
var sqaure_array = myarray.map(a => a*a);
//console.log(square_array);

//arrays in javascript
var myarray = ['apple', 'orange', 'grapes'];
//alert(myarray);
//alert(myarray[1]);
myarray[1] = 'pineapple';
//alert(myarray)

//console.log(myarray.length);
myarray.push('strawberry');
//console.log(myarray);
myarray.pop();
//console.log(myarray);

//for and for each loop to traverse through the array
for(var i=0; i<myarray.length; i++) {
    //alert(myarray[i]);

}
//myarray.forEach(i => {alert(i)});

//concat for immutable arrays
var myarray = ['abhi','subi','bibi'];
var myarray2 = myarray.concat('sibi');
//alert(myarray2);

//destructuring a js array
//assigning each value of array to a variable
t = [1, 2, 3, 4, 5, 6, 7, 8];
[first, second,third,...fourth] = t;
//console.log(first); // 1 is printed
//console.log(second); //2 is printed
//console.log(third); // 3 is printed
//console.log(fourth); // 4,5,6,7,8 is printed


//JavaScript Objects (collection of variable and functions)
var student = {
    studname: "Roshni",
    age: 22,
    talk: function () {
        //alert("Hello Roshni");
    }
}

//alert(student.studname);
student.studname = "Libi";
//alert(student.studname);
//alert(student.age);
student.talk();

//include a nested object in an existing obj
student.address ={
    door_no: 10,
    district: "Delhi",
}

//alert(student.address.door_no);

//declaring an empty object 
var car ={};
car.model = 'swift';
car.stop = function(){
    //alert(this.model+"car stopped");
}
//alert(car.model);
car.stop();

//OOPs in JavaScript
class Person {
    //declaring a constructor
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        //console.log('Hello '+this.name);
    }
}
//creating
var tom = new Person('Tom', 30);
//tom.greet();

//JSON Objects
//Creating a JSON object using the stringify() method
var jsonstring = JSON.stringify({
    name: "Abhi",
    age: 30,
    Address: {
        district: "TVM",
        location: "Technopark"
    }
});
//console.log(jsonstring)


//parsing the JSON string
var parsedjson = JSON.parse(jsonstring)
//alert(parsedjson.name)
//alert(parsedjson.age)
//alert(parsedjson.Address.district)
//alert(parsedjson.Address.location)

//select Html elements using javascript
var mypelements = document.getElementsByTagName('p');
var myh2withid = document.getElementById('myh2elemid');
var myh3withid = document.getElementsByClassName('myh3elemclass');

//using css selectors (he same style of selection used in css)
//selecting a single or first occurence of an element
var myheaderwithid = document.querySelector('#header');
var myallbtns = document.querySelectorAll('.btn');

//fetching values or data inside the html element after selecting it
//getting the text content inside an element
//alert(mypelements[0].textContent)
//alert(mypelements[1].textContent)
//get the value from html elements like in textbox 
var mytxtname = document.getElementsByName("txtcustname");
//alert(mytxtname[0].value);
//getting the inner html content of an element
//alert(myheaderwithid.innerHTML)

var handleClick = function(event) {
    //getting the textbox value and orinting it
    alert(document.getElementById("mytxtbox").value)
    //assigning a new value to the textbox
    document.getElementById("mytxtbox").value = "The new value";

}

var mybtn = document.getElementById('btn1');
mybtn.addEventListener('click',handleClick);















