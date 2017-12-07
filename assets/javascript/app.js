$(document).ready(function () {
    var index = 0;
    var timer;
    var score = 0;

    $('#startGame').click(function () {
        pickQuestion();
    });

    function renderTF(question) {
        $('.game').empty();
        $('.game').html(`<h2>Question: ${index + 1}</h2>
        <p>${question.question}</p>
        <div class="choices-container">
            <form>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice1}">${question.choice1}</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice2}">${question.choice2}</label>
                </div>
                <button id="submit" value="${question.answer}">Submit</button>
            </form>
        </div>`);
        setTimer();
    }

    function renderRadioButton(question) {
        $('.game').empty();
        $('.game').html(`<h2>Question: ${index + 1}</h2>
        <p>${question.question}</p>
        <div class="choices-container">
            <form>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice1}">${question.choice1}</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice2}">${question.choice2}</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice3}">${question.choice3}</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" value="${question.choice4}">${question.choice4}</label>
                </div>
                <button id="submit" value="${question.answer}">Submit</button>
            </form>
        </div>`);
        setTimer();
    }

    function setTimer() {
        timer = setTimeout(() => {
            renderTimesup();
            index++;
        }, 10000);
    }

    function renderTimesup() {
        $('.game').empty();
        $('.game').html(`<h1>Time's up</h1>`);
        setTimeout(() => {

            pickQuestion();
        }, 5000);
    }

    function renderAnswerWrong() {
        $('.game').empty();
        $('.game').html(`<h1>Answer is incorrect</h1>`);
        setTimeout(() => {

            pickQuestion();
        }, 5000);
    }

    function renderAnswerRight() {
        $('.game').empty();
        $('.game').html(`<h1>Answer is correct</h1>`);

        setTimeout(() => {
            pickQuestion();
        }, 5000);
    }

    $(document).on("click", '#submit', function () {
        index++;
        clearTimeout(timer);
        var value = $('input:checked').val();
        var answer = $('#submit').val();
        if (value === answer) {
            score++;
            renderAnswerRight();
        } else {
            renderAnswerWrong();
        }
    });

    function pickQuestion() {
        const keys = Object.keys(javascriptTrivia);
        console.log(javascriptTrivia[keys[index]].answer);
        if (javascriptTrivia[keys[index]].type === "t/f") {
            renderTF(javascriptTrivia[keys[index]]);
        } else if (javascriptTrivia[keys[index]].type === "radio") {
            renderRadioButton(javascriptTrivia[keys[index]]);
        }
    }
});