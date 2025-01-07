console.log('Hello world!');

function submitForm(event) {
    console.log('submit form');
    salaryTotal(event);

//stop page from refreshing
    event.preventDefault();

//make variables with the value of HTML id's
  let firstVal = document.querySelector('#first-input').value;
  let lastVal = document.querySelector('#last-input').value;
  let idVal = document.querySelector('#id-input').value;
  let titleVal = document.querySelector('#title-input').value;
  let salaryVal = document.querySelector('#salary-input').value;

//HTML table variable
  let employeeTable = document.querySelector('#employee-data');

//remove tr
  let delButtn = `<button onclick="deleteButton(event)">Remove</button>`;

employeeTable.innerHTML += `
    <tr>
        <td>${firstVal}</td>
        <td>${lastVal}</td>
        <td>${idVal}</td>
        <td>${titleVal}</td>
        <td>${salaryVal}</td>
        <td>${delButtn}</td>
   </tr> 
`
// call inputReset function
inputReset();
};

//delete button
function deleteButton(event) {
        let parentRow = event.target.parentElement.parentElement
        console.log('table row removed');
        parentRow.remove();
};

//function to reset input fields after submit
function inputReset() {
  document.querySelector('#first-input').value = '';
  document.querySelector('#last-input').value = '';
  document.querySelector('#id-input').value = '';
  document.querySelector('#title-input').value = '';
  document.querySelector('#salary-input').value = '';
};

//function to add salaries when added 
let total = 0;

function salaryTotal(event) {
let sal = +document.querySelector('#salary-input').value;
total += sal;
console.log('salary total', total);

updateSalFooter();
};

//function to change sal total number
function updateSalFooter() {
let salFooter = document.querySelector('#sal-total-div');
salFooter.innerHTML +=`
<p>${total}</p> `
};
