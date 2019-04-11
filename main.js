window.onload = init;

function init(){
  document.querySelector('#home-button')
    .addEventListener('click', displayHome)
  document.querySelector('#resume-button')
    .addEventListener('click', displayResume);

  document.querySelector('#contact-submit')
    .addEventListener('click', contact);

}

function displayHome(event){
  event.preventDefault();
  clearResume();
  document.querySelector('#content').className = 'container-fluid'
  document.querySelector('#resume-page').className = 'container-fluid d-none'
}

function displayResume(event){
  event.preventDefault();
  document.querySelector('#content').className = 'container-fluid d-none'
  document.querySelector('#resume-page').className = 'container-fluid'
  const mother = document.querySelector('#resume-mother');
  if(mother.hasChildNodes()){
    clearResume();
    for(let i = 0; i < resume.length; i++){
      resumeList(i);      
    }
  }else{
    for(let i = 0; i < resume.length; i++){
      resumeList(i);      
    }
  }
}

function resumeList(i){
  // Basic code for making a list within a list
  let mother = document.querySelector('#resume-mother');
  let newLine = document.createElement('li');
  let newList = document.createElement('ul');
    newList.className = 'child-list'

  // code for the lines of child list for the resume
  let nameLine = document.createElement('li')
        nameLine.innerText = resume[i].company;
  let posLine = document.createElement('li')
        posLine.innerText =resume[i].position;
  let timeLine = document.createElement('li')
        timeLine.innerText =resume[i].time;

  mother.appendChild(newLine);
  newLine.appendChild(newList);
  newList.appendChild(nameLine);
  newList.appendChild(posLine);
  newList.appendChild(timeLine);
  
}

function contact(event){
  event.preventDefault();
  contactTest.name = document.querySelector('#name-field').value;
  contactTest.email = document.querySelector('#email-field').value;
  contactTest.message = document.querySelector('#message-field').value;

  console.log(contactTest);

  document.querySelector('#thank').innerText = "Thank you for reaching out! I'll be in touch!";

}

function clearResume(){
  let mother = document.querySelector('#resume-mother');
  while(mother.hasChildNodes()){
    mother.removeChild(mother.firstChild)
  }
}