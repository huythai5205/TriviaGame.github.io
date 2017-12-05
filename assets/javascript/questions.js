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
        answer: " Nothing"
    }
}