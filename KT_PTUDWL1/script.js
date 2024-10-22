const inputElement = document.getElementById('quantity');
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const totalCost= document.getElementById('total-cost')

increase.addEventListener('click',function(){
    let currentValue = parseInt(quantity.value)
    inputElement.value=currentValue+1
})



decrease.addEventListener('click',function(){
    let currentValue = parseInt(quantity.value)
    if (currentValue>0)   
       inputElement.value=currentValue-1
    
})

totalCost.addEventListener('click', function() {
    let cost = parseInt(totalCost.value);
    let quantity = parseInt(inputElement.value);
    totalCost.value = cost * quantity;
});


