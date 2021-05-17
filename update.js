function update(lefttemp, tempvalue, unitfrom, unitto, model){
    if (lefttemp === "Y"){
        if (unitfrom === "C") {
            if(unitto === "C"){
                Final = Number(tempvalue)
            }else if (unitto === "F"){
                Final = (Number(tempvalue)*1.8) + 32
            }else if (unitto === "K"){
                Final = Number(tempvalue) + 273.15
            }
        }else if (unitfrom === "F"){
            if(unitto === "C"){
                Final = (Number(tempvalue) -32)*(5/9)
            }else if (unitto === "F"){
                Final = Number(tempvalue)
            }else if (unitto === "K"){
                Final = (Number(tempvalue) -32)*(5/9) + 273.15
            }
        }else if (unitfrom === "K"){
            if(unitto === "C"){
                Final = Number(tempvalue) - 273.15
            }else if (unitto === "F"){
                Final = (Number(tempvalue) - 273.15)*(9/5) + 32
            }else if (unitto === "K"){
                Final = Number(tempvalue)
            }
        }
    
        return {
            ...model,
            LeftValue: tempvalue, 
            LeftUnit: unitfrom, 
            RightValue: Final, 
            RightUnit: unitto
        }
    
    }else if (lefttemp === "N"){
        if (unitfrom === "C") {
            if(unitto === "C"){
                Final = Number(tempvalue)
            }else if (unitto === "F"){
                Final = (Number(tempvalue)*1.8) + 32
            }else if (unitto === "K"){
                Final = Number(tempvalue) + 273.15
            }
        }else if (unitfrom === "F"){
            if(unitto === "C"){
                Final = (Number(tempvalue) -32)*(5/9)
            }else if (unitto === "F"){
                Final = Number(tempvalue)
            }else if (unitto === "K"){
                Final = (Number(tempvalue) -32)*(5/9) + 273.15
            }
        }else if (unitfrom === "K"){
            if(unitto === "C"){
                Final = Number(tempvalue) - 273.15
            }else if (unitto === "F"){
                Final = (Number(tempvalue) - 273.15)*(9/5) + 32
            }else if (unitto === "K"){
                Final = Number(tempvalue)
            }
        }
        
        return {
            ...model,
            LeftValue: Final, 
            LeftUnit: unitto, 
            RightValue: tempvalue, 
            RightUnit: unitfrom
        }
    }
}

module.exports = {
    update
}