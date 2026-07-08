const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const income =  document.getElementById('income');
    const amount = parseInt(income.value);

    const result = document.querySelector('h4');

    let totalTax=0;
    if(amount<=1200000){
        totalTax = 0;
    }
    else if(amount<=1600000){
        totalTax = (amount-1200000)*0.15;
    }
    else if(amount<=2000000){
        totalTax = (amount-1600000)*0.20 + 60000;
    }
    else if(amount<=2400000){
        totalTax = (amount-2000000)*0.25 + 60000 + 80000;
    }
    else{
        totalttax = (amount-2400000)*30 + 60000 + 80000 + 100000;
    }

    result.textContent = `Your total tax is : ${totalTax}`;
    form.reset();
    
})