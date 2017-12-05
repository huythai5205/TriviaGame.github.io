$(document).ready(function () {

    $('#startGame').click(function () {
        pickQuestion();
    });

    function renderCheckBox(question) {
        $('.game').empty();
        $('.game').html(`<h2>Question: 1</h2>
  <p>${question.question}</p>
  <div class="choices-container">
  <form>
    <div class="checkbox">
      <label><input type="checkbox" value="${question.choice1}">${question.choice1}</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" value="${question.choice2}">${question.choice2}</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" value="${question.choice3}">${question.choice3}</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" value="${question.choice4}">${question.choice4}</label>
    </div>
    <button id="submit">Submit</button>
    </form>
</div>`);
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
<button id="submit">Submit</button>
</form>
</div>`);
    }

    $(document).on("click", '#submit', function () {
        var array = [];
        var value = $('input:checked').val();
        $("input:checked").each(function () {
            array.push($(this).val());
        });
        alert(array);
    });

    function pickQuestion() {
        for (var key in javascriptTrivia) {
            if (javascriptTrivia[key].type === "checkbox") {
                renderCheckBox(javascriptTrivia[key]);
            } else if (javascriptTrivia[key].type === "radio") {
                renderRadioButton(javascriptTrivia[key]);
            }
        }
    }
});