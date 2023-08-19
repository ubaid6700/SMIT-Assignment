let btn = document.getElementById('#btn');
let list = document.getElementById('#list');

let students = [];
if (localStorage.getItem('students')) {
  students = JSON.parse(localStorage.getItem('students'));
}

btn.addEventListener('click', ()=>{
  let addstudents = prompt("Write student name here");
  students.push(addstudents);
  addstudents = addstudents.trim();
  if(addstudents == ""){
    return false
  }

  localStorage.setItem("students", JSON.stringify(students));

  let separatedWords = [];
  for (let i = 0; i < students.length; i++) {
    const wordsArray = students[i].split(' ');
    separatedWords.push(...wordsArray);
  }
  for(let j = 1; j <= students.length; j++) {
  list.innerHTML = students.map(student => `<li> ${student}</li>`).join('');
  }
});
const deleteBtn = document.getElementById('#deleteBtn');

deleteBtn.addEventListener('click', () => {
  students = [];
  localStorage.setItem('students', JSON.stringify(students));
  list.innerHTML = '';
});