const display= document.getElementById("display");

inputvalue =(input)=>{
    display.value+=input

}
clear_button=()=>{
    display.value=""
}
calcuat=()=>{
    try{
    display.value=eval(display.value)

    }
    catch{
        display.value=("Error")
    }
}
sin_button=()=>{
    try{
    display.value=Math.sin(display.value)
    }
    catch{
        display.value=("Error")

    }
}
tan_button=()=>{
    try{
        display.value=Math.tan(display.value)
        }
        catch{
            display.value=("Error")
    
        }
}
cos_button=()=>{
    try{
            display.value=Math.cos(display.value)
        }
        catch{
            display.value=("Error")
    
        }
}
Percent=()=>{
    try{
          display.value=(display.value/100)
        }
     catch{
            display.value=("Error")
    
        }
}
