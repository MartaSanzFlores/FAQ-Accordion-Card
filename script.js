var question = document.querySelectorAll(".q");

question.forEach((q) => {
	q.addEventListener("click", function() {
        q.lastChild.classList.toggle("answer2");
        q.firstChild.classList.toggle("q2");
        q.classList.toggle("q");
        q.children[1].classList.toggle("iconx");
    })
});