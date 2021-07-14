function showModal(){
    const questions = document.querySelectorAll('.card__btn');
    for (let question of questions) {
      question.addEventListener('click', (event) => {
       document.getElementById('product').innerHTML= question.previousElementSibling.previousElementSibling.innerHTML;
        })
    
    }

}
showModal();