const form=document.querySelector(".registration-form");
const all=document.querySelector("#registeredstudent");


form.addEventListener('submit',(e)=>{
  e.preventDefault(); //prevent default submit
 
  const name=document.querySelector("#name").value.trim();
  const id=document.querySelector("#id").value.trim();
  const email=document.querySelector("#email").value.trim();
  const contact=document.querySelector('#contact').value.trim();


if(contact.length<=9){
  alert("Please enter at least 10 digit number");
  return ;
}

const studentlist= document.createElement("div");
studentlist.classList.add("small");
const listitem=document.createElement("p");
listitem.classList.add("listitem");

listitem.innerHTML= `
      <p><strong>Name:</strong> ${name }</p>
      <p><strong>ID:</strong> ${id}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
    
      <hr>`

      form.reset();

      const students = { 
        names: name,
        ids: id,
        email: email,
        contact: contact

      };

localStorage.setItem("students", JSON.stringify(students));
const storedStudents = JSON.parse(localStorage.getItem("students"));
console.log(storedStudents.names); 
console.log(storedStudents.ids);  
console.log(storedStudents.email); 
console.log(storedStudents.contact); 


     studentlist.appendChild(listitem);
      const deletebtn=document.createElement("button");
     deletebtn.classList.add("delete")
     deletebtn.innerText='Delete';
     deletebtn.addEventListener("click",()=>{
      if(confirm("Do you want to delete") ){
        listitem.remove();
      }
  });

  const editbtn=document.createElement("button");
  editbtn.classList.add("edit");
  editbtn.innerText="Edit";
  editbtn.addEventListener("click",()=>{
      
  document.getElementById("name").value = name;
  document.getElementById("id").value = id;
  document.getElementById("email").value = email;
  document.getElementById("contact").value = contact;
  editingStudentId = students.id;
 
  });

listitem.appendChild(editbtn);

listitem.appendChild(deletebtn ) ;
registeredstudent.appendChild(studentlist);
console.log( registeredstudent);

});
