var question = document.getElementsByClassName(q1);
var ranswer = document.getElementsByClassName(answer1);


question.addEventListener("click", function() {
    ranswer.setAttribute("class", "answer2");
})