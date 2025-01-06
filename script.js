console.log('Hello world!');

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
//table variable
  let employeeTable = document.querySelector('#employee-data');
//remove 
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
};

function deleteButton(event) {
        let parentRow = event.target.parentElement.parentElement
        console.log('table row removed');
        parentRow.remove();
    };

//still need function to remove text in imput fields after submit