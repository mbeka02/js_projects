let myLeads = []
//Fetching ID's from HTML.
//CONSTANT VALUES.DO NOT TRY TO RE-ASSIGN THEM
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
//Checks local storage for an item, if found it's rendered
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
//Tab button
tabBtn.addEventListener("click", function(){
    //Chrome API that gets the current URL using a query    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
//rendering function for the html page
function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${Leads[i]}'>
                    ${Leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
//Delete button
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML=null//or just render myLeads since its empty(ulEl.innerHTML=myLeads[])
})
//Input button
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})