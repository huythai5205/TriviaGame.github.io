$(document).ready(function () {
    let index = 0;
    let countdownTimer;
    let score = 0;
    let timer;
    let transitionTimer = 5000;
    const keys = Object.keys(javascriptTrivia);

    $('#startGame').click(function () {
        pickQuestion();
    });

    function renderTF(question) {
        $('.game').empty();
        $('.game').html(`
        <h2>Question: ${index + 1}</h2>
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
        </div>
        `);
        setTimer();
    }

    function renderRadioButton(question) {
        $('.game').empty();
        $('.game').html(`
        <h2>Question: ${index + 1}</h2>
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
        </div>
        `);
        setTimer();
    }

    function setTimer() {
        timer = setTimeout(() => {
            renderTimesup();
        }, 10000);
    }

    function renderTimesup() {
        $('.game').empty();
        $('.game').html(`<h1>Time's up</h1>`);
        setTimeout(() => {
            pickQuestion();
        }, transitionTimer);
    }

    function renderAnswerWrong() {
        $('.game').empty();
        let randomNumber = Math.ceil(Math.random() * 10);
        $('.game').html(`
        <h1>Answer is incorrect</h1>
        <div class="wrong-answer-images">
            <img src="assets/images/wrong_answer_images/${randomNumber}.jpg">
        </div>
        `);
        setTimeout(() => {
            pickQuestion();
        }, transitionTimer);
    }

    function renderAnswerRight() {
        $('.game').empty();
        let randomNumber = Math.ceil(Math.random() * 5);
        $('.game').html(`
        <h1>Answer is correct</h1>
        <div class="right-answer-images">
            <img src="assets/images/right_answer_images/${randomNumber}.jpg">
        </div>
        `);
        setTimeout(() => {
            pickQuestion();
        }, transitionTimer);
    }

    function renderAnswers() {
        $('.game').empty();
        $('.game').html(`
        <h1>Questions answer</h1>
        <p>You got ${score}/25 right</p>
        `);

        let counter = 1;
        for (let question in javascriptTrivia) {
            let newDiv = $('<div class="result">')
            newDiv.html(`
            <h4>Question ${counter}: </h4><p>${javascriptTrivia[question].question}</p>
            <h4>Your answer : </h4><p>${javascriptTrivia[question].userAnswer}</p>
            <h4>Answer : </h4><p>${javascriptTrivia[question].answer}</p>
            <h4>Explanation : </h4><p>${javascriptTrivia[question].explanation}</p>
            `);

            $('.game').append(newDiv);
            counter++;
        }

    }

    $(document).on("click", '#submit', function (event) {
        event.preventDefault();
        clearTimeout(timer);
        let userAnswer = $('input:checked').val();
        let answer = $('#submit').val();
        javascriptTrivia[keys[index]].userAnswer = userAnswer;
        if (userAnswer.trim() === answer.trim()) {
            score++;
            renderAnswerRight();
        } else {
            renderAnswerWrong();
        }
    });

    function pickQuestion() {
        if (index >= keys.length - 1) {
            $('.game').empty();
            $('.game').html(`
            <h1>You're done with the trivia questions.</h1>
            `);
            setTimeout(() => {
                renderAnswers();
            }, transitionTimer);
        } else if (javascriptTrivia[keys[index]].type === "t/f") {
            renderTF(javascriptTrivia[keys[index]]);
        } else if (javascriptTrivia[keys[index]].type === "radio") {
            renderRadioButton(javascriptTrivia[keys[index]]);
        }
        index++;
    }
});