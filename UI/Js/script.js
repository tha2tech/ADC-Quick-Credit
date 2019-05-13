function onFormSubmit(){
	var formData = readFormData();
	insertNewRecord(formData);

}

function readFormData(){
	var formData = {};

	formData["fullName"] = document.getElementById("fullName").value;
	formData["empCode"] = document.getElementById("empCode").value;
	formData["salary"] = document.getElementById("salary").value;
	formData["city"] = document.getElementById("city").value;
	return formData;
}

function insertNewRecord(data){
	var table = document.getElementById("employeeList").getElementByTagName('tbody')[0];
	var newRow = table.instertRow(table.length);
	cell1 = newRow.instertCell(0);
	cell1.innerHTML = data.fullName; 
	cell2 = newRow.instertCell(1);
	cell2.innerHTML = data.empCode; 
	cell3 = newRow.instertCell(2);
	cell3.innerHTML = data.salary; 
  cell4 = newRow.instertCell(3);
	cell4.innerHTML = data.salary; 
	cell4 = newRow.instertCell(4);
	cell4.innerHTML = `<a>Edit</a> 
						<a>Deletion</a>`; 
}

