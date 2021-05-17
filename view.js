var figlet = require('figlet');
const chalk = require('chalk');

function Title(){
    return chalk.red(
        figlet.textSync(
            "UNIT CALCULATOR",
            {
                horizontalLayout: "full",
                
            }
        )
    )
}

function LeftTemperature(){
    return ("Left Temperature is source? (Y/N) ")
}

function TemperatureValue(){
    return ('Temperature value to convert? ')
}

function FromUnit(){
    return ('From which unit? (C,F,K) ')
}

function ToUnit(){
    return ('To which unit? (C,F,K) ')
}

function table(model){
    return [
    { LeftValue: model.LeftValue, LeftUnit: model.LeftUnit, RightValue: model.RightValue, RightUnit: model.RightUnit },
    ];
}
function view(model){
    return {
        Title: Title(),
        table: table(model)
    }
}

module.exports = {
    view,
    LeftTemperature,
    TemperatureValue,
    FromUnit,
    ToUnit
}