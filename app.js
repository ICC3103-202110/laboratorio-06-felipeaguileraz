const {LeftTemperature, TemperatureValue, FromUnit, ToUnit} = require("./view")
const {printTable} = require('console-table-printer');

function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {table, Title} = currentView
        console.clear()
        console.log(Title)
        printTable(table)
        console.log()

        const prompt = require("prompt-sync")(); 

        const lefttemp = prompt(LeftTemperature())
        const tempvalue = prompt(TemperatureValue())
        const unitfrom = prompt(FromUnit())
        //if (unitfrom !== "C") or (unitfrom !==

        const unitto = prompt(ToUnit())
        //if (unitfrom !== "C") or (unitfrom !==

        const newtable = update(lefttemp, tempvalue, unitfrom, unitto, model) 
        state = {
            ...state,
            model: newtable,
            currentView: view(newtable)
        }       
    
    }
}

module.exports = { 
    app
}