$(document).ready(function () {

    var timer;
    var score = 0;

    $('#startGame').click(function () {
        pickQuestion();
    });

    function renderTF(question) {
        $('.game').empty();
        $('.game').html(`<h2>Question: 1</h2>
  <p>${question.question}</p>
  </div>
  <div class="choices-container">
  <form>
  <div class="radio">
  <label><input type="radio" name="optradio" value="${question.choice1}">${question.choice1}</label>
</div>
<div class="radio">
  <label><input type="radio" name="optradio" value="${question.choice2}">${question.choice2}</label>
</div>
    <button id="submit" value="${question.answer}>Submit</button>
    </form>
</div>`);
        timer = setTimeout(() => {
            renderTimesup
        }, 100);
    }

    function renderRadioButton(question) {
        $('.game').empty();
        $('.game').html(`<h2>Question: 1</h2>
  <p>${question.question}</p>
  </div>
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
        timer = setTimeout(() => {
            renderTimesup
        }, 100);
    }

    function renderTimesup() {
        $('.game').empty();
        $('.game').html(`<h1>Time's up</h1>`);
    }

    function renderAnswerWrong() {
        $('.game').empty();
        $('.game').html(`<h1>Answer is incorrect</h1>`);
    }

    function renderAnswerRight() {
        $('.game').empty();
        $('.game').html(`<h1>Answer is correct</h1>`);
    }

    $(document).on("click", '#submit', function () {
        clearTimeout(timer);
        var value = $('input:checked').val();
        var answer = $('#submit').val();
        if (value === answer) {
            score++;
            setTimeout(() => {
                renderAnswerRight
            }, 500);
        } else {
            setTimeout(() => {
                renderAnswerWrong
            }, 500);
        }
    });

    function pickQuestion() {
        for (var key in javascriptTrivia) {
            console.log(key);
            if (javascriptTrivia[key].type === "t/f") {
                renderTF(javascriptTrivia[key]);
            } else if (javascriptTrivia[key].type === "radio") {
                renderRadioButton(javascriptTrivia[key]);
            }

        }
    }
});