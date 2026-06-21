function checkAnswer() {
    let answers = document.getElementsByName("answer");
    let selected = false;

    for (let answer of answers) {
        if (answer.checked) {
            selected = true;

            if (answer.value == "0") {
                document.getElementById("result").innerHTML =
                    "Correct Answer!";
            } else {
                document.getElementById("result").innerHTML =
                    "Wrong Answer!";
            }
        }
    }

    if (!selected) {
        alert("Please select an answer!");
    }
}
