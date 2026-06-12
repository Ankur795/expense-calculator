let add_btn = document.querySelector("#add-btn");
let expense =document.querySelector("#input-expense")
let amount=document.querySelector("#input-amount")
let ol = document.querySelector("#order-list")
let total = document.querySelector("#total")
let total_amnt=0
let array =[]
let data
total.className="text-4xl border-2 p-2 rounded-2xl border-cyan-600"


data = JSON.parse(localStorage.getItem("myexpense"))
total.textContent = "Total Amount = 0"
array = data

total_amnt = 0

for(let i = 0;i<data.length; i++){
    
    let data1 = document.createElement("li")
    ol.appendChild(data1)
    data1.textContent=data[i].name +":"+"-"+ data[i].amount
    console.log(data[i].name)
    let a =  data[i].amount = parseInt(data[i].amount )  
    total_amnt += a
    total.textContent = "Total Amount = " + total_amnt
    let dlt_btn = document.createElement("button")
    data1.appendChild(dlt_btn)
     dlt_btn.textContent = "❌"
       dlt_btn.addEventListener("click",function(){

    //   let find = array.indexOf(i)
        array.splice(i,1)
        data1.remove();
         total_amnt = 0

     for (let i = 0; i < array.length; i++) {
        total_amnt += parseInt(array[i].amount)
    }
     total.textContent = "Total Amount = " + total_amnt
     localStorage.setItem("myexpense",JSON.stringify(array))
   
    })
    
}

add_btn.addEventListener("click",function(){
    if(expense.value===""){
        alert("The fild cannot be empty")
    }
    else if(amount.value===""){
         alert("The fild cannot be empty")
    }
    else{
    
    let item =expense.value
    let kharcha = amount.value
    let obj ={
        name:item,
        amount:kharcha
    }
    
    let list = document.createElement("li")
    list.className="flex g-6"
    let remove = document.createElement("button")
    let details = obj.name + ":-" + obj.amount
    expense.value=""
    amount.value=""
    array.push(obj)
    localStorage.setItem("myexpense",JSON.stringify(array))
    ol.appendChild(list)
    list.textContent=details
    list.appendChild(remove)
    remove.textContent = "❌"
    // console.log(list)
    total_amnt = 0
    for(let i = 0;i<array.length;i++){
        let a= array[i].amount = parseInt(array[i].amount )  
     total_amnt += a
    }
    remove.addEventListener("click",function(){

        let find = array.indexOf(obj)
        array.splice(find,1)
        list.remove();
         total_amnt = 0

     for (let i = 0; i < array.length; i++) {
        total_amnt += parseInt(array[i].amount)
    }
     total.textContent = "Total Amount = " + total_amnt
     localStorage.setItem("myexpense",JSON.stringify(array))
    })
}
total.textContent="Total Amount =" + total_amnt

// total.textContent=("Total Amount")



    
   
    
})


