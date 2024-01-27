const saveButton = document.getElementById("idButtonSave");
const clearButton = document.getElementById("idButtonClear");

saveButton.addEventListener("click", (event)=>{
    // Use this function, it can prevent the disappear page after click on the save button
    event.preventDefault(); 
     
    let username = document.getElementById("idUsername").value;
    let email = document.getElementById("idEmail").value;
    let phone = document.getElementById("idPhone").value;
    let address = document.getElementById("idAddress").value;
    
    document.getElementById("outputUsername").textContent = username;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputPhone").textContent = phone;
    document.getElementById("outputAddress").textContent = address;
    
    document.getElementById("createForm").reset();
});

clearButton.addEventListener("click", (event)=>{
    event.preventDefault();  
    document.getElementById("outputUsername").textContent = '';
    document.getElementById("outputEmail").textContent = '';
    document.getElementById("outputPhone").textContent = '';
    document.getElementById("outputAddress").textContent = '';
});