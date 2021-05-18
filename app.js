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
        while (true){
            var unitfrom = prompt(FromUnit())
            if (unitfrom !== "C" && unitfrom !== "F" && unitfrom !== "K" ){
                var unitfrom = prompt(FromUnit())
                if (unitfrom === "C" || unitfrom === "F" || unitfrom === "K" ){
                    break
                }
            }else{
                break
            }
        }
        while (true){
            var unitto = prompt(ToUnit())
            if (unitto !== "C" && unitto !== "F" && unitto !== "K" ){
                var unitto = prompt(ToUnit())
                if (unitto === "C" || unitto === "F" || unitto === "K" ){
                    break
                }
            }else{
                break
            }
        }
    
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