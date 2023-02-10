var question = document.querySelectorAll(".q");

question.forEach((q) => {
	q.addEventListener("click", function() {
        q.lastChild.classList.toggle("answer2");
    })
});