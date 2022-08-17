
const calculateTemp =()=>{
    const numberTemp = document.getElementById('temp').value; //It will store the value taken form the user

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; 
    //The selectedIndex property sets or returns the index of the selected option in a drop-down list.
    //The index starts at 0.
    // Note: If the drop-down list allows multiple selections it will only return the index of the first option selected.
    

    const celToFah =(cel)=>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    //To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

    const fehToCel =(fehr)=>{
        let celsius = Math.round((fehr - 32)* 5/9);
        return celsius;
    }

   let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
    }
    

}