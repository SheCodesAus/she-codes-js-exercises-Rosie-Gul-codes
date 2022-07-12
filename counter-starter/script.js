    function add(variable){
    
    // Get DOM Element
    let counter = document.getElementById('number')

    // Add 1 to the urrent value
    let newValue = parseInt(counter.innerHTML) + variable

    // Re-assign the value to the DOM element
    counter.innerHTML = newValue
    
    console.log("Yes we are working", counter);
}

function subtraction(variable){
    
    // Get DOM Element
    let counter = document.getElementById('number')

    // Add 1 to the urrent value
    let newValue = parseInt(counter.innerHTML) - variable
    console.dir(counter)

    // Re-assign the value to the DOM element
    counter.innerHTML = newValue
    
    console.log("Yes we are working", counter);
}

function multiply(variable){
    
    let counter = document.getElementById('number')
    let newValue = parseInt(counter.innerHTML) * variable
    counter.innerHTML = newValue
    
    console.log("Yes we are working", counter);
}

function divide(variable){
    
    let counter = document.getElementById('number')
    let newValue = parseInt(counter.innerHTML) / variable
    counter.innerHTML = newValue
    
    console.log("Yes we are working", counter);
}