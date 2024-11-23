function correctButton(buttonId) {
    const button = document.getElementById(buttonId);
    const questionId = buttonId.split('-')[0]; // Gets only the q part from q_no-option
    const feedbackDiv = document.getElementById(`${questionId}-result`);
    button.classList.add("correct");
    feedbackDiv.innerText = "Correct!";
    disableButtonsForQuestion(questionId);
}


function incorrectButton(buttonId) {
    const button = document.getElementById(buttonId);
    const questionId = buttonId.split('-')[0]; // Gets only the q part from q_no-option
    const feedbackDiv = document.getElementById(`${questionId}-result`);
    button.classList.add("incorrect");
    feedbackDiv.innerText = "Incorrect!";
    disableButtonsForQuestion(questionId);
}


function disableButtonsForQuestion(questionId) {
    const buttons = document.querySelectorAll(`#${questionId}-a, #${questionId}-b, #${questionId}-c, #${questionId}-d`);
    buttons.forEach((button) => {
        button.disabled = true; // Disable the button
        button.classList.add("no-hover"); // Button will not react to hover
    });
}