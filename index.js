const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
let myLeads = ["https://awesomelead.com", "www.epiclead.com", "www.greatlead.com","https://mail.ru/"]
//myLeads = JSON.parse(myLeads);
//console.log(typeof myLeads)
//myLeads.push("dkjfnkjnf")
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        return console.log(tabs[0].url)
    })
})

function render(leads) {

    let listItems =""
    for (let i=0; i<leads.length; i++){
        listItems += `<li>
                        <a target="_blank" href="${leads[i]}"> 
                            ${leads[i]}
                        <a/>
                      </li>`
    
    }
    ulEl.innerHTML=listItems
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
}) 

inputBtn.addEventListener('click', function() {  
    if(inputEl.value!='') {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
    inputEl.value = ''
    console.log(localStorage.getItem("myLeads"))
})



