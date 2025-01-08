console.log('Hello world!');

//variable for table
let employeeTable = document.querySelector('#employee-data');



function submitForm(event) {
    console.log('submit form');

//stop page from refreshing
    event.preventDefault();

//make variables with the value of HTML id's
  let firstVal = document.querySelector('#first-input').value;
  let lastVal = document.querySelector('#last-input').value;
  let idVal = document.querySelector('#id-input').value;
  let titleVal = document.querySelector('#title-input').value;
  let salaryVal = document.querySelector('#salary-input').value;

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
`;

// call inputReset function
inputReset();

//adds new salary to total
let totalSalary = salaryTotal(employeeTable, [4]);
updateSalFooter(totalSalary);
};

//delete button
function deleteButton(event) {
        let parentRow = event.target.parentElement.parentElement;
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
function salaryTotal(table, columnIndex) {
  let sum = 0; 

for (let i = 0; i < table.rows.length; i++) {
  let cell = table.rows[i].cells[columnIndex];
  let value = +cell.textContent;
  sum += value
}
console.log('Current Sum', sum);
return sum;
};

function updateSalFooter(total) {
document.querySelector('#sal-total-p').innerHTML = `${total}`;
};




//let sal = +document.querySelector('#salary-input').value;
//total += sal;
//console.log('salary total', total);

//updateSalFooter();


//function to change sal total number
//document.querySelector('#sal-total-p').innerhtml = `${total}`;

//let salFooter = document.querySelector('#sal-total-div');
//salFooter.innerHTML +=`<p>${total}</p>`


//function salaryTotal(event) {
// let sal = +document.querySelector('#salary-input').value;
// total += sal
//};
  




