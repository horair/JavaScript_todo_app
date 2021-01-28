var row = 1;
var selectedRow = null;
var addButton = document.getElementById("add");
addButton.addEventListener = ("click", onFormSubmit); 

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            displayDetails();
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["date"] = document.getElementById("date").value;
    formData["task"] = document.getElementById("task").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}6
function displayDetails() {
    var getDate = document.getElementById("date").value;
     var getTask = document.getElementById("task").value;
    var desc = document.getElementById("description").value;

    if (!getDate || !getTask || !desc) {
        alert("Please fill all the boxes");
    }
       
        var output = document.getElementById("disp");
        var newRow = output.insertRow(row);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        cel1.innerHTML = getDate;
        cel2.innerHTML = getTask;
        cel3.innerHTML = desc ;
        cel4.innerHTML = ' <button onClick="onEdit(this)" id = "edit">edit</button> <button onClick="onDelete(this)" id = "delete" >delete</button>';
        row++;
        resetForm();
    }



    function resetForm() {
        document.getElementById("date").value = "";
        document.getElementById ("task").value = "";
        document.getElementById("description").value = "";
    }



    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.date;
        selectedRow.cells[1].innerHTML = formData.task;
        selectedRow.cells[2].innerHTML = formData.description;
    }



    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("date").value = selectedRow.cells[0].innerHTML;
        document.getElementById("task").value = selectedRow.cells[1].innerHTML;
        document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    }



    function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("disp").deleteRow(row.rowIndex);
            
        }
    }
