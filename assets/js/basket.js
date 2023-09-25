let tableBody = document.querySelector(".table-area .table tbody")
let table = document.querySelector(".table-area")


let basket = JSON.parse(localStorage.getItem("basket"))

function getItems() {
    
    
        for (const file of basket) {


            tableBody.innerHTML+= `<tr id=${file.id}>
            <td>${file.name}</td>
            <td>${file.description}</td>
            <td><img src="${file.image}"></td>
            <td>${file.count}</td>
            <td><button>Delete</button></td>
            </tr>`  
        }
        
}

getItems()



let deleteBtn = document.querySelectorAll(".table-area button") 

for(let btn of deleteBtn) {
   btn.addEventListener('click',function() {
       const id = this.parentElement.parentElement.id
       let filtered = basket.filter(item => item.id !== parseInt(id))
       localStorage.setItem('basket',JSON.stringify(filtered))  
       basketCount()
       location.reload()
   })
}

    
            function basketCount() {
            
            document.querySelector(".basket .count span").innerHTML = basket.length
        }

if (tableBody.innerText=="") {
    table.classList.add("d-none")

}
        
       

    
