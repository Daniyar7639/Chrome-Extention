const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
let myLeads = ["https://awesomelead.com", "www.epiclead.com", "www.greatlead.com","https://mail.ru/"]


inputBtn.addEventListener('click', function() {
    
    if(inputEl.value!='') {
        myLeads.push(inputEl.value)
        renderLeads()
    }
    inputEl.value = ''
})



function renderLeads() {

let listItems =""
for (let i=0; i<myLeads.length; i++){
    listItems += `<li>
                    <a target="_blank" href="${myLeads[i]}"> 
                        ${myLeads[i]}
                    <a/>
                  </li>`
    
    //ulEl.innerHTML += '<li>' + myLeeds[i] + '</li>' 
    /*const li = document.createElement("li");
    li.textContent = myLeeds[i];
    ulEl.append(li);*/
}
ulEl.innerHTML=listItems
}