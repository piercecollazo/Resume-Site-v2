window.onload = init;

function init(){
  // document.querySelector('#resume-button')
  //   .addEventListener('click', );

  document.querySelector('#contact-submit')
    .addEventListener('click', contact);

}

function displayResume(event){
  event.preventDefault();
  for(let i = 0; i < resume.length; i++){

  }
}

function contact(event){
  event.preventDefault();
  contactTest.name = document.querySelector('#name-field').value;
  contactTest.email = document.querySelector('#email-field').value;
  contactTest.message = document.querySelector('#message-field').value;

  console.log(contactTest);

  document.querySelector('#thank').innerText = "Thank you for reaching out! I'll be in touch!";

}

