const adviceID = document.getElementById("advice-id");
const adviceText = document.querySelector(".advice-text");
// adviceID.innerHTML=''
// adviceText.innerHTML=''
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceID.textContent = adviceNum;
      adviceText.innerHTML = `<p>${advice}</p>`;
    })
    .catch((err) => {
      console.log(err);
    });
}
btn.addEventListener('click',function(){
    getAdvice()
})