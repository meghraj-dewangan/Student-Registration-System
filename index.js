


// for handle form submission and add student record
function addStudentRecord(event) {
    event.preventDefault();                // Prevent form submission
    const studentName = document.getElementById('StudentName').value;
    const email = document.getElementById('Email').value;
    const studentId = document.getElementById('StudentId').value;
    const classValue = document.getElementById('Class').value;
    const rollNo = document.getElementById('RollNo.').value;
    const contactNo = document.getElementById('ContactNo.').value;
   
   
    if(studentName.trim() !=='' && studentId.trim() !== '' && classValue.trim() !== '' && rollNo.trim() !== '' && email.trim() !== '' && contactNo.trim() !== ''){
        const tableBody = document.querySelector('table tbody');
tableBody.classList.add('record')
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${studentId}</td>
            <td>${classValue}</td>
            <td>${rollNo}</td>
            <td>${email}</td>
            <td>${contactNo}</td>
            <td>
                <button class="editButton">Edit</button>
                
            
                <button class="deleteButton">Delete</button>
            </td>
        `;
        

        tableBody.appendChild(newRow);

        // for Clear input fields
       if(document.getElementById('StudentName').value = '') return ;
       if(document.getElementById('Email').value = '') return ;
       if(document.getElementById('StudentId').value = '') return ;
       if(document.getElementById('Class').value = '') return ;
       if(document.getElementById('RollNo.').value = '') return ;
       if(document.getElementById('ContactNo.').value ='') return;
        
        // Attach event listeners for edit and delete buttons
        attachEditDeleteEvents(newRow);
    }
       
    
}

//  to handle editing student record
function editStudentRecord(e) {
    const row = e.target.closest('tr');
    const cells = row.querySelectorAll('td');
    const newStudentName = prompt('Enter new student name:',cells[0].innerHTML);
    const newStudentId = prompt('Enter new student ID:',cells[1].innerHTML);
    const newClassValue = prompt('Enter new class:',cells[2].innerHTML);
    const newRollNo = prompt('Enter new roll number:',cells[3].innerHTML);
    const newEmail = prompt('Enter new email:',cells[4].innerHTML);
    const newContactNo = prompt('Enter new contact number:',cells[5].innerHTML);
    

    if (newStudentName || newStudentId || newClassValue || newRollNo || newEmail || newContactNo) {
    
        cells[0].innerHTML = newStudentName;
        cells[1].innerHTML = newStudentId;
        cells[2].innerHTML = newClassValue;
        cells[3].innerHTML = newRollNo;
        cells[4].innerHTML = newEmail;
        cells[5].innerHTML = newContactNo;
    }
}

// Function to handle deleting student record
function deleteStudentRecord(e) {
    e.target.closest('tr').remove();
   
}

// Function to attach event listeners for edit and delete buttons
function attachEditDeleteEvents(row) {
    const editButton = row.querySelector('.editButton');
    const deleteButton = row.querySelector('.deleteButton');
    editButton.addEventListener('dblclick', editStudentRecord);
    deleteButton.addEventListener('dblclick', deleteStudentRecord);
}

// Attach event listener for form submission
 document.querySelector('.forminput').addEventListener('submit', addStudentRecord);


  //end----------------




