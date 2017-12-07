var javascriptTrivia = {
    question1: {
        type: "radio",
        question: `<div class="code-question">function outer(){<br/>
                        &emsp; var x = 1;<br/>
                        &emsp; var inner = function () {<br/>
                        &emsp;&emsp; alert(">" + x);<br/>
                        &emsp; }<br/>
                    &emsp; x=2;<br/>
                    return inner;<br/>
                    }<br/>
                    outer();<br/>
                    </div>`,
        choice1: " Nothing",
        choice2: " alert '> undefined'",
        choice3: " alert '>1'",
        choice4: " alert '>2'",
        answer: " Nothing",
        explanation: "Nothing, because outer() returned a function but it wasn’t executed."
    },
    question2: {
        type: "radio",
        question: `<div class="code-question">function outer(){<br/>
                        &emsp; var x = 1;<br/>
                        &emsp; var inner = function () {<br/>
                        &emsp;&emsp; alert(">" + x);<br/>
                        &emsp; }<br/>
                    &emsp; x=2;<br/>
                    return inner;<br/>
                    }<br/>
                    outer()();<br/>
                    </div>`,
        choice1: " Nothing",
        choice2: " alert '> undefined'",
        choice3: " alert '>1'",
        choice4: " alert '>2'",
        answer: " alert '>2'",
        explanation: "alert ‘>2’, because the x that inner() uses is the same x the outer() uses."
    },
    question3: {
        type: "radio",
        question: `<div class="code-question">function outer(){<br/>
                        &emsp; var x = 1;<br/>
                        &emsp; var inner = function (x) {<br/>
                        &emsp;&emsp; alert(">" + x);<br/>
                        &emsp; }<br/>
                    &emsp; x=2;<br/>
                    return inner;<br/>
                    }<br/>
                    outer()();<br/>
                    </div>`,
        choice1: " Nothing",
        choice2: " alert '> undefined'",
        choice3: " alert '>1'",
        choice4: " alert '>2'",
        answer: " alert '>undefined'",
        explanation: "alert ‘>undefined’. Inner uses a variable x which is different than the outer x. The inner x is never initialized."
    },
    question4: {
        type: "radio",
        question: `<div class="code-question">function outer(){<br/>
                        &emsp; var x = 1;<br/>
                        &emsp; var inner = function (x) {<br/>
                        &emsp;&emsp; alert(">" + x);<br/>
                        &emsp; }<br/>
                    &emsp; x=2;<br/>
                    return inner;<br/>
                    }<br/>
                    outer()(3);<br/>
                    </div>`,
        choice1: " alert '>3'",
        choice2: " alert '> undefined'",
        choice3: " alert '>1'",
        choice4: " alert '>2'",
        answer: " alert '>3'",
        explanation: "alert '>3', 3 is pass into the inner function."
    },
    question5: {
        type: "radio",
        question: `<div class="Inside which HTML element do we put the JavaScript?</div>`,
        choice1: " <javascript></javascript>",
        choice2: " <script></script>",
        choice3: " <js></js>",
        choice4: " <scripting></scripting>",
        answer: " <script></script>",
        explanation: ""
    },
    question6: {
        type: "radio",
        question: `<div class="code-question">What is the correct JavaScript syntax to change the content of the HTML element below?<br/>
        <p id="demo">This is a demonstration.</p>
                    </div>`,
        choice1: " document.getElementById('demo').innerHTML = 'Hello World!';",
        choice2: " document.getElement('p').innerHTML = 'Hello World!';",
        choice3: " document.getElementByName('p').innerHTML = 'Hello World!';",
        choice4: " #demo.innerHTML = 'Hello World!';",
        answer: " document.getElementById('demo').innerHTML = 'Hello World!';",
        explanation: ""
    },
    question7: {
        type: "t/f",
        question: `<div class="code-question">The external JavaScript file must contain the &#60;script&#62; tag.</div>`,
        choice1: " True",
        choice2: " False",
        answer: " False",
        explanation: ""
    },
    question8: {
        type: "radio",
        question: `<div class="code-question">What is the correct syntax for referring to an external script called "xxx.js"?</div>`,
        choice1: ' <script href="xxx.js"></script>',
        choice2: ' <script name="xxx.js"></script>',
        choice3: ' <script src="xxx.js"></script>',
        choice4: ' <script link="xxx.js"></script>',
        answer: '<script src="xxx.js"></script>',
        explanation: ""
    },
    question9: {
        type: "radio",
        question: `<div class="code-question">How do you write "Hello World" in an alert box?</div>`,
        choice1: ' alert("Hello World");',
        choice2: ' msgBox("Hello World");',
        choice3: ' alertBox("Hello World");',
        choice4: ' msg("Hello World");',
        answer: ' alert("Hello World");',
        explanation: ''
    },
    question10: {
        type: "radio",
        question: `<div class="code-question">How do you create a function in JavaScript?</div>`,
        choice1: ' function myFunction()',
        choice2: ' function:myFunction()',
        choice3: ' function = myFunction()',
        choice4: ' function;myFunction()',
        answer: ' function my Function()',
        explanation: ''
    },
    question11: {
        type: "radio",
        question: `<div class="code-question">How do you call a function named "myFunction"?</div>`,
        choice1: ' call function myFunction()',
        choice2: ' myFunction()',
        choice3: ' call myFunction()',
        choice4: ' return myFunction()',
        answer: ' myFunction()',
        explanation: ''
    },
    question12: {
        type: "radio",
        question: `<div class="code-question">How to write an IF statement in JavaScript?</div>`,
        choice1: ' if (i == 5)',
        choice2: ' if i = 5 then',
        choice3: ' if i = 5',
        choice4: ' if i == 5 then',
        answer: ' if (i == 5)',
        explanation: ''
    },
    question13: {
        type: "radio",
        question: `<div class="code-question">How to write an IF statement for executing some code if "i" is NOT equal to 5?</div>`,
        choice1: ' if (i <> 5)',
        choice2: ' if (i != 5)',
        choice3: ' if i <> 5',
        choice4: ' if i =! 5 then',
        answer: ' if (i !=5)',
        explanation: ''
    },
    question14: {
        type: "radio",
        question: `<div class="code-question">How does a WHILE loop start?</div>`,
        choice1: ' while (i <= 10; i++)',
        choice2: ' while (i <= 10)',
        choice3: ' while i = 1 to 10',
        choice4: ' while i = 1 - 10',
        answer: ' while (i <=10)',
        explanation: ''
    },
    question15: {
        type: "radio",
        question: `<div class="code-question">How does a FOR loop start?</div>`,
        choice1: ' for i = 1 to 5',
        choice2: ' for (i <= 5; i++)',
        choice3: ' for (i = 0; i <= 5; i++)',
        choice4: ' for (i = 0; i <= 5)',
        answer: ' for (i = 0; i <= 5; i++)',
        explanation: ''
    },
    question16: {
        type: "radio",
        question: `<div class="code-question">How can you add a comment in a JavaScript?</div>`,
        choice1: ' This is a comment',
        choice2: ' <!--This is a comment-->',
        choice3: ' //This is a comment',
        choice4: ' <comment>This is a comment</comment>',
        answer: ' //This is a comment',
        explanation: ''
    },
    question17: {
        type: "radio",
        question: `<div class="code-question">How to insert a comment that has more than one line?</div>`,
        choice1: ' <!--This comment has more than one line-- >',
        choice2: ' /*This comment has more than one line */',
        choice3: '//This comment has more than one line//',
        choice4: ' <comment>This comment has more than one line</comment>',
        answer: ' /*This comment has more than one line */',
        explanation: ''
    },
    question18: {
        type: "radio",
        question: `<div class="code-question"What is the correct way to write a JavaScript array?</div>`,
        choice1: ' var colors = "red", "green", "blue"',
        choice2: ' var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        choice3: ' var colors = ["red", "green", "blue"]',
        choice4: ' var colors = (1:"red", 2:"green", 3:"blue")',
        answer: ' var colors = ["red", "green", "blue"]',
        explanation: ''
    },
    question19: {
        type: "radio",
        question: `<div class="code-question">How do you round the number 7.25, to the nearest integer</div>`,
        choice1: ' round(7.25)',
        choice2: ' Math.rnd(7.25)',
        choice3: ' rnd(7.25)',
        choice4: ' Math.round(7.25)',
        answer: ' Math.round(7.25)',
        explanation: ''
    },
    question20: {
        type: "radio",
        question: `<div class="code-question">HHow do you find the number with the highest value of x and y?</div>`,
        choice1: ' ceil(x, y)',
        choice2: ' top(x, y)',
        choice3: ' Math.ceil(x, y)',
        choice4: ' Math.max(x, y)',
        answer: ' Math.max(x, y)',
        explanation: ''
    },
    question21: {
        type: "t/f",
        question: `<div class="code-question">JavaScript is the same as Java.</div>`,
        choice1: ' True',
        choice2: ' False',
        answer: ' False',
        explanation: ''
    },
    question22: {
        type: "radio",
        question: `<div class="code-question">Which event occurs when the user clicks on an HTML element</div>`,
        choice1: ' onmouseover',
        choice2: ' onmouseclick',
        choice3: ' onchange',
        choice4: ' onclick',
        answer: ' onclick',
        explanation: ''
    },
    question23: {
        type: "radio",
        question: `<div class="code-question">How do you declare a JavaScript variable?</div>`,
        choice1: ' v carName;',
        choice2: ' var carName;',
        choice3: ' variable carName;',
        choice4: ' name carName;',
        answer: ' var carName;',
        explanation: ''
    },
    question24: {
        type: "radio",
        question: `<div class="code-question">Which operator is used to assign a value to a variable?</div>`,
        choice1: ' =',
        choice2: ' -',
        choice3: ' ==',
        choice4: ' ===',
        answer: ' =',
        explanation: ''
    },
    question25: {
        type: "radio",
        question: `<div class="code-question">What will the following code return: Boolean(10 > 9)</div>`,
        choice1: ' true',
        choice2: ' NaN',
        choice3: ' false',
        choice4: ' undefined',
        answer: ' true',
        explanation: ''
    }
}