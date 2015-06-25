./appa.txt
appendix: Awful Parts
==================
var foo = value;
    
    
====================================
window.foo = value;
    
    
====================================
foo = value;
    
    
====================================
return
{
    status: true
};
    
    
====================================
return {
    status: true
};
    
    
====================================
abstract boolean break byte case catch char class const continue
 debugger default delete do double else enum export extends false final
 finally float for
 function goto if implements import in instanceof int interface long native new null
 package private protected public return short static super switch synchronized this
 throw throws transient true try typeof var volatile void while with
    
    
====================================
var method;                // ok
var class;                 // illegal
object = {box: value};     // ok
object = {case: value};    // illegal
object = {'case': value};  // ok
object.box = value;        // ok
object.case = value;       // illegal
object['case'] = value;    // ok
    
    
====================================
typeof 98.6
    
    
====================================
typeof null
    
    
====================================
my_value === null
    
    
====================================
if (my_value && typeof my_value === 'object') {
    // my_value is an object or an array!
}
    
    
====================================
typeof /a/
    
    
====================================
typeof NaN === 'number'    // true
    
    
====================================
+ '0'       // 0
+ 'oops'    // NaN
    
    
====================================
NaN === NaN    // false
NaN !== NaN    // true
    
    
====================================
isNaN(NaN)       // true
isNaN(0)         // false
isNaN('oops')    // true
isNaN('0')       // false
    
    
====================================
var isNumber = function isNumber(value) {
            return typeof value === 'number' && isFinite(value);
};
    
    
====================================
if (Object.prototype.toString.apply(my_value) === '[object Array]'){
   // my_value is truly an array!
}
    
    
====================================
if (my_value && typeof my_value === 'object' &&
        typeof my_value.length === 'number' &&
        !(my_value.propertyIsEnumerable('length')) {
    // my_value is truly an array!
}
    
    
====================================
value = myObject[name];
if (value == null) {
   alert(name + ' not found.');
}
    
    
====================================
var name;
another_stooge.hasOwnProperty = null;       // trouble
for (name in another_stooge) {
    if (another_stooge.hasOwnProperty(name)) { // boom
        document.writeln(name + ': ' + another_stooge[name]);
    }
}
    
    
====================================
var i;
var word;
var text =
        "This oracle of comfort has so pleased me, " +
        "That when I am in heaven I shall desire " +
        "To see what this child does, " +
        "and praise my Constructor.";

var words = text.toLowerCase(  ).split(/[\s,.]+/);
var count = {};
for (i = 0; i < words.length; i += 1) {
    word = words[i];
    if (count[word]) {
        count[word] += 1;
    } else {
        count[word] = 1;
    }
}
    
    
====================================
if (typeof count[word] === 'number') {
    
    
==================


./appb.txt
appendix: Bad Parts
==================
'' == '0'          // false
0 == ''            // true
0 == '0'           // true

false == 'false'   // false
false == '0'       // true

false == undefined // false
false == null      // false
null == undefined  // true

' \t\r\n ' == 0    // true
    
    
====================================
with (obj) {
    a = b;
}
    
    
====================================
if (obj.a === undefined) {
    a = obj.b === undefined ? b : obj.b;
} else {
    obj.a = obj.b === undefined ? b : obj.b;
}
    
    
====================================
a = b;
a = obj.b;
obj.a = b;
obj.a = obj.b;
    
    
====================================
eval("myValue = myObject." + myKey + ";");
    
    
====================================
myvalue = myObject[myKey];
    
    
====================================
if (ok)
    t = true;
    
    
====================================
if (ok)
    t = true;
    advance(  );
    
    
====================================
if (ok) {
    t = true;
    advance(  );
}
    
    
====================================
if (ok) {
    t = true;
}
advance(  );
    
    
====================================
for (p = src, q = dest; !*p; p++, q++) *q = *p;
    
    
====================================
&    and
|    or
^    xor
˜    not
>>   signed right shift
>>>  unsigned right shift
<<   left shift
    
    
====================================
function foo(  ) {}
    
    
====================================
var foo = function foo(  ) {};
    
    
====================================
(function (  ) {
    var hidden_variable;

    // This function can have some impact on
    // the environment, but introduces no new
    // global variables.
}());
    
    
====================================
new Boolean(false)
    
    
==================


./appc.txt
appendix: JSLint
==================
/*global getElementByAttribute, breakCycles, hanoi */
    
    
====================================
/*members doTell, iDoDeclare, mercySakes,
    myGoodness, ohGoOn, wellShutMyMouth */
    
    
====================================
/*jslint nomen: true, evil: false */
    
    
====================================
, ; : { } ( [ = < > ? ! + - * / % ˜ ^ | &
== != <= >= += -= *= /= %= ^= |= &= << >> || &&
=== !== <<= >>= >>> >>>=
    
    
====================================
) ] . ++ --
    
    
====================================
if (condition)
    statement;
    
    
====================================
if (condition) {
    statements;
}
    
    
====================================
for (name in object) {
    if (object.hasOwnProperty(name)) {
        ....
    }
}
    
    
====================================
if (a = b) {
    ...
}
    
    
====================================
if (a == b) {
    ...
}
    
    
====================================
0 '' undefined null false true
    
    
====================================
(foo != 0)
    
    
====================================
(foo)
    
    
====================================
(foo == 0)
    
    
====================================
(!foo)
    
    
==================


./appe.txt
appendix: JSON
==================
[
    {
        "first": "Jerome",
        "middle": "Lester",
        "last": "Howard",
        "nick-name": "Curly",
        "born": 1903,
        "died": 1952,
        "quote": "nyuk-nyuk-nyuk!"
    },
    {
        "first": "Harry",
        "middle": "Moses",
        "last": "Howard",
        "nick-name": "Moe",
        "born": 1897,
        "died": 1975,
        "quote": "Why, you!"
    },
    {
        "first": "Louis",
        "last": "Feinberg",
        "nick-name": "Larry",
        "born": 1902,
        "died": 1975,
        "quote": "I'm sorry. Moe, it was an accident!"
    }
]
    
    
====================================
var myData = eval('(' + myJSONText + ')');
    
    
====================================
var json_parse = function () {

// This is a function that can parse a JSON text, producing a JavaScript
// data structure. It is a simple, recursive descent parser.

// We are defining the function inside of another function to avoid creating
// global variables.

     var at,     // The index of the current character
         ch,     // The current character
         escapee = {
             '"':  '"',
             '\\': '\\',
             '/':  '/',
             b:    'b',
             f:    '\f',
             n:    '\n',
             r:    '\r',
             t:    '\t'
         },
         text,

         error = function (m) {

// Call error when something is wrong.

             throw {
                 name:    'SyntaxError',
                 message: m,
                 at:      at,
                 text:    text
             };
         },

         next = function (c) {

// If a c parameter is provided, verify that it matches the current character.

             if (c && c !== ch) {
                 error("Expected '" + c + "' instead of '" + ch + "'");
             }

// Get the next character. When there are no more characters,
// return the empty string.

             ch = text.charAt(at);
             at += 1;
             return ch;
         },

         number = function () {

// Parse a number value.

             var number,
                 string = '';

             if (ch === '-') {
                 string = '-';
                 next('-');
             }
             while (ch >= '0' && ch <= '9') {
                 string += ch;
                 next();
             }
             if (ch === '.') {
                 string += '.';
                 while (next() && ch >= '0' && ch <= '9') {
                     string += ch;
                 }
             }
             if (ch === 'e' || ch === 'E') {
                 string += ch;
                 next();
                 if (ch === '-' || ch === '+') {
                     string += ch;
                     next();
                 }
                 while (ch >= '0' && ch <= '9') {
                     string += ch;
                     next();
                 }
             }
             number = +string;
             if (isNaN(number)) {
                 error("Bad number");
             } else {
                 return number;
             }
         },

         string = function () {

// Parse a string value.

             var hex,
                 i,
                 string = '',
                 uffff;

// When parsing for string values, we must look for " and \ characters.

             if (ch === '"') {
                 while (next()) {
                     if (ch === '"') {
                         next();
                         return string;
                     } else if (ch === '\\') {
                         next();
                         if (ch === 'u') {
                             uffff = 0;
                             for (i = 0; i < 4; i += 1) {
                                 hex = parseInt(next(), 16);
                                 if (!isFinite(hex)) {
                                     break;
                                 }
                                 uffff = uffff * 16 + hex;
                             }
                             string += String.fromCharCode(uffff);
                         } else if (typeof escapee[ch] === 'string') {
                             string += escapee[ch];
                         } else {
                             break;
                         }
                     } else {
                         string += ch;
                     }
                 }
             }
             error("Bad string");
         },

         white = function () {

// Skip whitespace.

             while (ch && ch <= ' ') {
                 next();
             }
         },

         word = function () {

// true, false, or null.

             switch (ch) {
             case 't':
                 next('t');
                 next('r');
                 next('u');
                 next('e');
                 return true;
             case 'f':
                 next('f');
                 next('a');
                 next('l');
                 next('s');
                 next('e');
                 return false;
             case 'n':
                 next('n');
                 next('u');
                 next('l');
                 next('l');
                 return null;
             }
             error("Unexpected '" + ch + "'");
         },

         value,  // Place holder for the value function.

         array = function () {

// Parse an array value.

             var array = [];

             if (ch === '[') {
                 next('[');
                 white();
                 if (ch === ']') {
                     next(']');
                     return array;   // empty array
                 }
                 while (ch) {
                     array.push(value());
                     white();
                     if (ch === ']') {
                         next(']');
                         return array;
                     }
                     next(',');
                     white();
                 }
             }
             error("Bad array");
         },

         object = function () {

// Parse an object value.

             var key,
                 object = {};

             if (ch === '{') {
                 next('{');
                 white();
                 if (ch === '}') {
                     next('}');
                     return object;   // empty object
                 }
                 while (ch) {
                     key = string();
                     white();
                     next(':');
                     object[key] = value();
                     white();
                     if (ch === '}') {
                         next('}');
                         return object;
                     }
                     next(',');
                     white();
                 }
             }
             error("Bad object");
         };

     value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

         white();
         switch (ch) {
         case '{':
             return object();
         case '[':
             return array();
         case '"':
             return string();
         case '-':
             return number();
         default:
             return ch >= '0' && ch <= '9' ? number() : word();
         }
     };

// Return the json_parse function. It will have access to all of the above
// functions and variables.

     return function (source, reviver) {
         var result;

         text = source;
         at = 0;
         ch = ' ';
         result = value();
         white();
         if (ch) {
             error("Syntax error");
         }

// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible
// transformation, starting with a temporary boot object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.

         return typeof reviver === 'function' ?
             function walk(holder, key) {
                 var k, v, value = holder[key];
                 if (value && typeof value === 'object') {
                     for (k in value) {
                         if (Object.hasOwnProperty.call(value, k)) {
                             v = walk(value, k);
                             if (v !== undefined) {
                                 value[k] = v;
                             } else {
                                 delete value[k];
                             }
                         }
                     }
                 }
                 return reviver.call(holder, key, value);
             }({'': result}, '') : result;

     };
}();
    
    
==================


./ch01.txt
chapter: Good Parts
==================
<html><body><pre><script src="program.js">
</script></pre></body></html>
    
    
====================================
document.writeln('Hello, world!');
    
    
====================================
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
    
    
==================


./ch02.txt
chapter: Grammar
==================
var that = this;
    
    
====================================
/*
    var rm_a = /a*/.match(s);
*/
    
    
====================================
abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with
    
    
====================================
"A" === "\u0041"
    
    
====================================
'c' + 'a' + 't' === 'cat'
    
    
====================================
'cat'.toUpperCase(  ) === 'CAT'
    
    
====================================
for (myvar in obj) {
    if (obj.hasOwnProperty(myvar)) {
        ...
    }
}
    
    
====================================
2 + 3 * 5 === 17
(2 + 3) * 5 === 25
    
    
==================


./ch03.txt
chapter: Objects
==================
var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
    
    
====================================
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
    
    
====================================
stooge["first-name"]     // "Jerome"
flight.departure.IATA    // "SYD"
    
    
====================================
stooge["middle-name"]    // undefined
flight.status            // undefined
stooge["FIRST-NAME"]     // undefined
    
    
====================================
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
    
    
====================================
flight.equipment                              // undefined
flight.equipment.model                        // throw "TypeError"
flight.equipment && flight.equipment.model    // undefined
    
    
====================================
stooge['first-name'] = 'Jerome';
    
    
====================================
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
    
    
====================================
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object

var a = {}, b = {}, c = {};
    // a, b, and c each refer to a
    // different empty object
a = b = c = {};
    // a, b, and c all refer to
    // the same empty object
    
    
====================================
if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}
var another_stooge = Object.create(stooge);
    
    
====================================
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
    
    
====================================
stooge.profession = 'actor';
another_stooge.profession    // 'actor'
    
    
====================================
typeof flight.number      // 'number'
typeof flight.status      // 'string'
typeof flight.arrival     // 'object'
typeof flight.manifest    // 'undefined'
    
    
====================================
typeof flight.toString    // 'function'
typeof flight.constructor // 'function'
    
    
====================================
flight.hasOwnProperty('number')         // true
flight.hasOwnProperty('constructor')    // false
    
    
====================================
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(name + ': ' + another_stooge[name]);
    }
}
    
    
====================================
var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' +
            another_stooge[properties[i]]);
    }

    
    
====================================
another_stooge.nickname    // 'Moe'

// Remove nickname from another_stooge, revealing
// the nickname of the prototype.

delete another_stooge.nickname;

another_stooge.nickname    // 'Curly'
    
    
====================================
var MYAPP = {};
    
    
====================================
MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
    
    
==================



./ch04.txt
chapter: Functions
==================
// Create a variable called add and store a function
// in it that adds two numbers.

var add = function (a, b) {
    return a + b;
};
    
    
====================================
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment(  );
document.writeln(myObject.value);    // 1

myObject.increment(2);
document.writeln(myObject.value);    // 3
    
    
====================================
var sum = add(3, 4);    // sum is 7
    
    
====================================
// Augment myObject with a double method.

myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value);
    };

    helper(  );    // Invoke helper as a function.
};

// Invoke double as a method.

myObject.double(  );
document.writeln(myObject.value);     // 6 
    
    
====================================
// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function (  ) {
    return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status(  ));  // confused
    
    
====================================
// Make an array of 2 numbers and add them.

var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7

// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
    // status is 'A-OK'
    
    
====================================
// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function (  ) {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108
    
    
====================================
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}
    
    
====================================
// Make a try_it function that calls the new add
// function incorrectly.

var try_it = function (  ) {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it(  );
    
    
====================================
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
    
    
====================================
Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10 / 3).integer(  ));  // -3
    
    
====================================
String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + "   neat   ".trim(  ) + '"');
    
    
====================================
// Add a method conditionally.

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
    
    
====================================
var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc +
                ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};

hanoi(3, 'Src', 'Aux', 'Dst');
    
    
====================================
Move disc 1 from Src to Dst
Move disc 2 from Src to Aux
Move disc 1 from Dst to Aux
Move disc 3 from Src to Dst
Move disc 1 from Aux to Src
Move disc 2 from Aux to Dst
Move disc 1 from Src to Dst
    
    
====================================
// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
                (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};
    
    
====================================
// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.

// JavaScript does not currently optimize this form.

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};

document.writeln(factorial(4));    // 24
    
    
====================================
var foo = function (  ) {
    var a = 3, b = 5;

    var bar = function (  ) {
        var b = 7, c = 11;

// At this point, a is 3, b is 7, and c is 11

        a += b + c;

// At this point, a is 21, b is 7, and c is 11

    };

// At this point, a is 3, b is 5, and c is not defined

    bar(  );

// At this point, a is 21, b is 5

};
    
    
====================================
var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function (  ) {
            return value;
        }
    };
}());
    
    
====================================
// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
    return {
        get_status: function (  ) {
            return status;
        }
    };
};

// Make an instance of quo.

var myQuo = quo("amazed");

document.writeln(myQuo.get_status(  ));
    
    
====================================
// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
    var level = 1;
    var step = function (  ) {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);
    
    
====================================
// BAD EXAMPLE

// Make a function that assigns event handler functions to an array
 of nodes the wrong way.
// When you click on a node, an alert box is supposed to display the ordinal
of the node.
// But it always displays the number of nodes instead.

var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};

// END BAD EXAMPLE
    
    
====================================
// BETTER EXAMPLE

// Make a function that assigns event handler functions to an array of nodes.
// When you click on a node, an alert box will display the ordinal of the node.

var add_the_handlers = function (nodes) {
    var helper = function (i) {
       return function (e) {
          alert(i);
       };
    };
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        modes[i].onclick = helper(i);
    }
};
    
    
====================================
request = prepare_the_request(  );
response = send_request_synchronously(request);
display(response);
    
    
====================================
request = prepare_the_request(  );
send_request_asynchronously(request, function (response) {
    display(response);
    });
    
    
====================================
String.method('deentityify', function (  ) {

// The entity table. It maps entity names to
// characters.

    var entity = {
        quot: '"',
        lt:   '<',
        gt:   '>'
    };

// Return the deentityify method.

    return function (  ) {

// This is the deentityify method. It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'. If the characters in
// between are in the entity table, then replace the
// entity with the character from the table. It uses
// a regular expression (Chapter 7).

        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}(  ));
    
    
====================================
document.writeln(
    '&lt;&quot;&gt;'.deentityify(  ));  // <">
    
    
====================================
var serial_maker = function (  ) {

// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number. The object comes with
// methods for setting the prefix and sequence
// number, and a gensym method that produces unique
// strings.

    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function ( ) {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker( );
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym( ); // unique is "Q1000"
    
    
====================================
getElement('myBoxDiv')
    .move(350, 150)
    .width(100)
    .height(100)
    .color('red')
    .border('10px outset')
    .padding('4px')
    .appendText("Please stand by")
    .on('mousedown', function (m) {
        this.startDrag(m, this.getNinth(m));
    }).
    .on('mousemove', 'drag')
    .on('mouseup', 'stopDrag')
    .later(2000, function (  ) {
        this
            .color('yellow')
            .setHTML("What hath God wraught?")
            .slide(400, 40, 200, 200);
    })
    .tip("This box is resizeable");
    
    
====================================
var add1 = add.curry(1);
document.writeln(add1(6));    // 7
    
    
====================================
Function.method('curry', function (  ) {
    var args = arguments, that = this;
    return function (  ) {
        return that.apply(null, args.concat(arguments));
    };
});    // Something isn't right...
    
    
====================================
Function.method('curry', function (  ) {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function (  ) {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
    
    
====================================
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacci(i));
}

// 0: 0
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55
    
    
====================================
var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( ));
    
    
====================================
var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};
    
    
====================================
var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});
    
    
====================================
var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});
    
    
==================


./ch05.txt
chapter: Inheritance
==================
this.prototype = {constructor: this};
    
    
====================================
Function.method('new', function (  ) {

// Create a new object that inherits from the
// constructor's prototype.

    var that = Object.beget(this.prototype);

// Invoke the constructor, binding -this- to
// the new object.

    var other = this.apply(that, arguments);

// If its return value isn't an object,
// substitute the new object.

    return (typeof other === 'object' && other) || that;
});
    
    
====================================
var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function (  ) {
    return this.name;
};

Mammal.prototype.says = function (  ) {
    return this.saying || '';
};
    
    
====================================
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(  ); // 'Herb the Mammal'
    
    
====================================
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal

Cat.prototype = new Mammal(  );

// Augment the new prototype with
// purr and get_name methods.

Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
Cat.prototype.get_name = function (  ) {
    return this.says(  ) + ' ' + this.name + ' ' + this.says(  );
};

var myCat = new Cat('Henrietta');
var says = myCat.says(  ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name(  );
//            'meow Henrietta meow'
    
    
====================================
Function.method('inherits', function (Parent) {
    this.prototype = new Parent(  );
    return this;
});
    
    
====================================
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}.
    inherits(Mammal).
    method('purr', function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    }).
    method('get_name', function (  ) {
        return this.says(  ) + ' ' + this.name + ' ' + this.says(  );
    });
    
    
====================================
var myObject = maker(f, l, m, c, s);
    
    
====================================
var myObject = maker({
    first: f,
    last: l,
    middle: m
    state: s,
    city: c
});
    
    
====================================
var myMammal = {
    name : 'Herb the Mammal',
    get_name : function (  ) {
        return this.name;
    },
    says : function (  ) {
        return this.saying || '';
    }
};
    
    
====================================
var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function (  ) {
    return this.says() + ' ' + this.name + ' ' + this.says();
};
    
    
====================================
var block = function (  ) {

// Remember the current scope. Make a new scope that
// includes everything from the current one.

    var oldScope = scope;
    scope = Object.create(scope);

// Advance past the left curly brace.

    advance('{');

// Parse using the new scope.

    parse(scope);

// Advance past the right curly brace and discard the
// new scope, restoring the old one.

    advance('}');
    scope = oldScope;
};
    
    
====================================
var constructor = function (spec, my) {
    var that, other private instance variables;
    my = my || {};

    Add shared variables and functions to my

    that = a new object;

    Add privileged methods to that

    return that;
};
    
    
====================================
my.member = value;
    
    
====================================
var methodical = function (  ) {
    ...
};
that.methodical = methodical;
    
    
====================================
var mammal = function (spec) {
    var that = {};

    that.get_name = function (  ) {
        return spec.name;
    };

    that.says = function (  ) {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({name: 'Herb'});
    
    
====================================
var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var myCat = cat({name: 'Henrietta'});
    
    
====================================
Object.method('superior', function (name) {
    var that = this,
        method = that[name];
    return function (  ) {
        return method.apply(that, arguments);
    };
});
    
    
====================================
var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + super_get_name(  ) + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name(  );
//        'like meow Bix meow baby'
    
    
====================================
var eventuality = function (that) {
    var registry = {};

    that.fire = function (event) {

// Fire an event on an object. The event can be either
// a string containing the name of the event or an
// object containing a type property containing the
// name of the event. Handlers registered by the 'on'
// method that match the event name will be invoked.

        var array,
            func,
            handler,
            i,
            type = typeof event === 'string' ? event : event.type;

// If an array of handlers exist for this event, then
// loop through it and execute the handlers in order.

        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i < array.length; i += 1) {
                handler = array[i];

// A handler record contains a method and an optional
// array of parameters. If the method is a name, look
// up the function.

                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func];
                }

// Invoke a handler. If the record contained
// parameters, then pass them. Otherwise, pass the
// event object.

                func.apply(this,
                    handler.parameters || [event]);
            }
        }
        return this;
    };

    that.on = function (type, method, parameters) {

// Register an event. Make a handler record. Put it
// in a handler array, making one if it doesn't yet
// exist for this type.

        var handler = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler);
        } else {
            registry[type] = [handler];
        }
        return this;
    };
    return that;
};
    
    
====================================
eventuality(that);
    
    
==================


./ch06.txt
chapter: Arrays
==================
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

empty[1]          // undefined
numbers[1]        // 'one'

empty.length      // 0
numbers.length    // 10
    
    
====================================
var numbers_object = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};
    
    
====================================
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];
misc.length    // 10
    
    
====================================
var myArray = [];
myArray.length             // 0

myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.
    
    
====================================
numbers.length = 3;
// numbers is ['zero', 'one', 'two']
    
    
====================================
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']
    
    
====================================
numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']
    
    
====================================
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']
    
    
====================================
numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']
    
    
====================================
var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]);
}
    
    
====================================
var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};
    
    
====================================
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object 
Array]';
};
    
    
====================================
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});
    
    
====================================
// Create an array of numbers.

var data = [4, 8, 15, 16, 23, 42];

// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};

// Invoke the data's reduce method, passing in the
// add function.

var sum = data.reduce(add, 0);    // sum is 108

// Invoke the reduce method again, this time passing
// in the multiply function.

var product = data.reduce(mult, 1);
    // product is 7418880
    
    
====================================
// Give the data array a total function.

data.total = function (  ) {
    return this.reduce(add, 0);
};

total = data.total(  );    // total is 108
    
    
====================================
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

// Make an array containing 10 zeros.

var myArray = Array.dim(10, 0);
    
    
====================================
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
matrix[2][1]    // 7
    
    
====================================
for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}

// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.
    
    
====================================
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Make a 4 * 4 matrix filled with zeros.

var myMatrix = Array.matrix(4, 4, 0);

document.writeln(myMatrix[3][3]);    // 0

// Method to make an identity matrix.

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);

document.writeln(myMatrix[3][3]);    // 1
    
    
==================


./ch07.txt
chapter: Regular Expressions
==================
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";
    
    
====================================
var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port',
    'path', 'query', 'hash'];

var blanks = '       ';
var i;

for (i = 0; i < names.length; i += 1) {
    document.writeln(names[i] + ':' +
        blanks.substring(names[i].length), result[i]);
}
    
    
====================================
url:    http://www.ora.com:80/goodparts?q#fragment
scheme: http
slash:  //
host:   www.ora.com
port:   80
path:   goodparts
query:  q
hash:   fragment
    
    
====================================
^
    
    
====================================
(?:([A-Za-z]+):)?
    
    
====================================
(\/{0,3})
    
    
====================================
([0-9.\-A-Za-z]+)
    
    
====================================
(?::(\d+))?
    
    
====================================
(?:\/([^?#]*))?
    
    
====================================
(?:\?([^#]*))?
    
    
====================================
(?:#(.*))?
    
    
====================================
$
    
    
====================================
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
    document.writeln(parse_number.test(num));
};

test('1');                // true
test('number');           // false
test('98.6');             // true
test('132.21.86.100');    // false
test('123.45E-67');       // true
test('123.45D-67');       // false
    
    
====================================
/^   $/i
    
    
====================================
-?
    
    
====================================
\d+
    
    
====================================
(?:\.\d*)?
    
    
====================================
(?:e[+\-]?\d+)?
    
    
====================================
// Make a regular expression object that matches
// a JavaScript string.

var my_regexp = /"(?:\\.|[^\\\"])*"/g;
    
    
====================================
// Make a regular expression object that matches
// a JavaScript string.

var my_regexp = new RegExp("\"(?:\\\\.|[^\\\\\\\"])*\"", 'g');
    
    
====================================
function make_a_matcher(  ) {
    return /a/gi;
}

var x = make_a_matcher(  );
var y = make_a_matcher(  );

// Beware: x and y are the same object!

x.lastIndex = 10;

document.writeln(y.lastIndex);    // 10
    
    
====================================
"into".match(/in|int/)
    
    
====================================
\ / [ ] ( ) { } ? + * | . ^ $
    
    
====================================
var doubled_words = /([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]+)\s+\1/gi;
    
    
====================================
! " # $ % & ' ( ) * +, - . / :
; < = > ? @ [ \ ] ^ _ ` { | } ˜
    
    
====================================
(?:!|"|#|\$|%|&|'|\(|\)|\*|\+|,|-|\.|\/|:|;|<|=|>|@|\[|\\|]|\^|_|` |\{|\||\}|˜)
    
    
====================================
[!-\/:-@\[-`{-˜]
    
    
====================================
- / [ \ ] ^
    
    
==================


./ch08.txt
chapter: Methods
==================
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]
    
    
====================================
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');    // c is 'abcd';
    
    
====================================
var a = ['a', 'b', 'c'];
var c = a.pop(  );    // a is ['a', 'b'] & c is 'c'
    
    
====================================
Array.method('pop', function (  ) {
    return this.splice(this.length - 1, 1)[0];
});
    
    
====================================
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;
    
    
====================================
Array.method('push', function (  ) {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
});
    
    
====================================
var a = ['a', 'b', 'c'];
var b = a.reverse(  );
// both a and b are ['c', 'b', 'a']
    
    
====================================
var a = ['a', 'b', 'c'];
var c = a.shift(  );    // a is ['b', 'c'] & c is 'a'
    
    
====================================
Array.method('shift', function (  ) {
    return this.splice(0, 1)[0];
});
    
    
====================================
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1);    // b is ['a']
var c = a.slice(1);       // c is ['b', 'c']
var d = a.slice(1, 2);    // d is ['b']
    
    
====================================
var n = [4, 8, 15, 16, 23, 42];
n.sort(  );
// n is [15, 16, 23, 4, 42, 8]
    
    
====================================
n.sort(function (a, b) {
    return a - b;
});
// n is [4, 8, 15, 16, 23, 42];
    
    
====================================
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']
    
    
====================================
// Function by takes a member name string and returns
// a comparison function that can be used to sort an
// array of objects that contain that member.

var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name;
            };
        }
    };
};

var s = [
    {first: 'Joe',   last: 'Besser'},
    {first: 'Moe',   last: 'Howard'},
    {first: 'Joe',   last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
s.sort(by('first'));    // s is [
//    {first: 'Curly', last: 'Howard'},
//    {first: 'Joe',   last: 'DeRita'},
//    {first: 'Joe',   last: 'Besser'},
//    {first: 'Larry', last: 'Fine'},
//    {first: 'Moe',   last: 'Howard'},
//    {first: 'Shemp', last: 'Howard'}
// ]
    
    
====================================
s.sort(by('first')).sort(by('last'));
    
    
====================================
// Function by takes a member name string and an
// optional minor comparison function and returns
// a comparison function that can be used to sort an
// array of objects that contain that member. The
// minor comparison function is used to break ties
// when the o[name] and p[name] are equal.

var by = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name;
            };
        }
    };
};

s.sort(by('last', by('first')));    // s is [
//    {first: 'Joe',   last: 'Besser'},
//    {first: 'Joe',   last: 'DeRita'},
//    {first: 'Larry', last: 'Fine'},
//    {first: 'Curly', last: 'Howard'},
//    {first: 'Moe',   last: 'Howard'},
//    {first: 'Shemp', last: 'Howard'}
// ]
    
    
====================================
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']
    
    
====================================
Array.method('splice', function (start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0),
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;

    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = max(min(typeof deleteCount === 'number' ?
            deleteCount : len, len - start), 0);
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while (k < deleteCount) {
        element = this[start + k];
        if (element !== undefined) {
            result[k] = element;
        }
        k += 1;
    }
    shift_count = len - start - deleteCount;
    if (delta < 0) {
        k = start + insertCount;
        while (shift_count) {
            this[k] = this[k - delta];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    } else if (delta > 0) {
        k = 1;
        while (shift_count) {
            this[new_len - k] = this[len - k];
            k += 1;
            shift_count -= 1;
         }
            this.length = new_len;
     }
    for (k = 0; k < insertCount; k += 1) {
        this[start + k] = arguments[k + 2];
    }
    return result;
});
    
    
====================================
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
    
    
====================================
Array.method('unshift', function (  ) {
    this.splice.apply(this,
        [0, 0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
});
    
    
====================================
Function.method('bind', function (that) {

// Return a function that will call this function as
// though it is a method of that object.

    var method = this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
    return function (  ) {
        return method.apply(that,
            args.concat(slice.apply(arguments, [0])));
    };
});

var x = function (  ) {
    return this.value;
}.bind({value: 666});
alert(x(  )); // 666
    
    
====================================
document.writeln(Math.PI.toExponential(0));
document.writeln(Math.PI.toExponential(2));
document.writeln(Math.PI.toExponential(7));
document.writeln(Math.PI.toExponential(16));
document.writeln(Math.PI.toExponential(  ));

// Produces

3e+0
3.14e+0
3.1415927e+0
3.1415926535897930e+0
3.141592653589793e+0
    
    
====================================
document.writeln(Math.PI.toFixed(0));
document.writeln(Math.PI.toFixed(2));
document.writeln(Math.PI.toFixed(7));
document.writeln(Math.PI.toFixed(16));
document.writeln(Math.PI.toFixed(  ));

// Produces

3
3.14
3.1415927
3.1415926535897930
3
    
    
====================================
document.writeln(Math.PI.toPrecision(2));
document.writeln(Math.PI.toPrecision(7));
document.writeln(Math.PI.toPrecision(16));
document.writeln(Math.PI.toPrecision(  ));

// Produces

3.1
3.141593
3.141592653589793
3.141592653589793
    
    
====================================
document.writeln(Math.PI.toString(2));
document.writeln(Math.PI.toString(8));
document.writeln(Math.PI.toString(16));
document.writeln(Math.PI.toString(  ));

// Produces

11.001001000011111101101010100010001000010110100011
3.1103755242102643
3.243f6a8885a3
3.141592653589793
    
    
====================================
var a = {member: true};
var b = Object.create(a);              // from Chapter 3
var t = a.hasOwnProperty('member');   // t is true
var u = b.hasOwnProperty('member');   // u is false
var v = b.member;                     // v is true
    
    
====================================
// Break a simple html text into tags and texts.
// (See string.replace for the entityify method.)

// For each tag or text, produce an array containing
// [0] The full matched tag or text
// [1] The /, if there is one
// [2] The tag name
// [3] The attributes, if any

var text = '<html><body bgcolor=linen><p>' +
        'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

while ((a = tags.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        document.writeln(('// [' + i + '] ' + a[i]).entityify(  ));
    }
    document.writeln(  );
}

// Result:

// [0] <html>
// [1]
// [2] html
// [3]

// [0] <body bgcolor=linen>
// [1]
// [2] body
// [3]  bgcolor=linen

// [0] <p>
// [1]
// [2] p
// [3]

// [0] This is
// [1] undefined
// [2] undefined
// [3] undefined

// [0] <b>
// [1]
// [2] b
// [3]

// [0] bold
// [1] undefined
// [2] undefined
// [3] undefined

// [0] </b>
// [1] /
// [2] b
// [3]

// [0] !
// [1] undefined
// [2] undefined
// [3] undefined

// [0] </p>
// [1] /
// [2] p
// [3]

// [0] </body>
// [1] /
// [2] body
// [3]

// [0] </html>
// [1] /
// [2] html
// [3]
    
    
====================================
var b = /&.+;/.test('frank &amp; beans');
// b is true
    
    
====================================
RegExp.method('test', function (string) {
    return this.exec(string) !== null;
});
    
    
====================================
var name = 'Curly';
var initial = name.charAt(0);    // initial is 'C'
    
    
====================================
String.method('charAt', function (pos) {
return this.slice(pos, pos + 1);
});
    
    
====================================
var name = 'Curly';
var initial = name.charCodeAt(0);    // initial is 67
    
    
====================================
var s = 'C'.concat('a', 't');    // s is 'Cat'
    
    
====================================
var text = 'Mississippi';
var p = text.indexOf('ss');    // p is 2
p = text.indexOf('ss', 3);     // p is 5
p = text.indexOf('ss', 6);     // p is -1
    
    
====================================
var text = 'Mississippi';
var p = text.lastIndexOf('ss');    // p is 5
p = text.lastIndexOf('ss', 3);     // p is 2
p = text.lastIndexOf('ss', 6);     // p is 5
    
    
====================================
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function (a, b) {
    return a.localeCompare(b);
});
// m (in some locale) is
//      ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']
    
    
====================================
var text = '<html><body bgcolor=linen><p>' +
        'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

a = text.match(tags);
for (i = 0; i < a.length; i += 1) {
    document.writeln(('// [' + i + '] ' + a[i]).entityify(  ));
}

// The result is

// [0] <html>
// [1] <body bgcolor=linen>
// [2] <p>
// [3] This is
// [4] <b>
// [5] bold
// [6] </b>
// [7] !
// [8] </p>
// [9] </body>
// [10] </html>
    
    
====================================
var result = "mother_in_law".replace('_', '-');
    
    
====================================
// Capture 3 digits within parens

var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');
// p is '555-666-1212'
    
    
====================================
String.method('entityify', function (  ) {

    var character = {
        '<' : '&lt;',
        '>' : '&gt;',
        '&' : '&amp;',
        '"' : '&quot;'
    };

// Return the string.entityify method, which
// returns the result of calling the replace method.
// Its replaceValue function returns the result of
// looking a character up in an object. This use of
// an object usually outperforms switch statements.

    return function (  ) {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
}(  ));
alert("<&>".entityify(  ));  // &lt;&amp;&gt;
    
    
====================================
var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/);    // pos is 18
    
    
====================================
var text = 'and in it he says "Any damn fool could';
var a = text.slice(18);
// a is '"Any damn fool could'
var b = text.slice(0, 3);
// b is 'and'
var c = text.slice(-5);
// c is 'could'
var d = text.slice(19, 32);
// d is 'Any damn fool'
    
    
====================================
var digits = '0123456789';
var a = digits.split('', 5);
// a is ['0', '1', '2', '3', '4']
    
    
====================================
var ip = '192.168.1.0';
var b = ip.split('.');
// b is ['192', '168', '1', '0']

var c = '|a|b|c|'.split('|');
// c is ['', 'a', 'b', 'c', '']

var text = 'last,  first ,middle';
var d = text.split(/\s*,\s*/);
// d is [
//    'last',
//    'first',
//    'middle'
// ]
    
    
====================================
var e = text.split(/\s*(,)\s*/);
// e is [
//    'last',
//    ',',
//    'first',
//    ',',
//    'middle'
// ]
    
    
====================================
var f = '|a|b|c|'.split(/\|/);
// f is ['a', 'b', 'c'] on some systems, and
// f is ['', 'a', 'b', 'c', ''] on others
    
    
====================================
var a = String.fromCharCode(67, 97, 116);
// a is 'Cat'
    
    
==================


./ch09.txt
chapter: Style
==================
if (a)
    b(  );
    
    
====================================
if (a)
    b(  );
    c(  );
    
    
====================================
if (a) {
    b(  );
    c(  );
}
    
    
====================================
if (a) {
    b(  );
}
c(  );
    
    
====================================
i = 0; // Set i to zero.
    
    
====================================
if (a = b) { ... }
    
    
====================================
if (a === b) { ... }
    
    
==================


