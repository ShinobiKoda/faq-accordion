document.addEventListener("DOMContentLoaded", function () {
  const showFaqAnswerButtons = document.querySelectorAll(".show__answer");

  showFaqAnswerButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const faqQuestionHeading = btn.parentElement;
      const faqAnswer = faqQuestionHeading.nextElementSibling;

      if (faqAnswer.classList.contains("show")) {
        faqAnswer.classList.remove("show");
        faqAnswer.style.maxHeight = null;
        btn.src = "./assets/images/icon-plus.svg";
        faqQuestionHeading.classList.add("line");
      } else {
        faqAnswer.classList.add("show");
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        btn.src = "./assets/images/icon-minus.svg";
        faqQuestionHeading.classList.remove("line");
      }
    });
  });
});
