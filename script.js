const radioButtons = document.querySelectorAll('input[name="sidepanel"]');

const kalkKupurAnswer = document.querySelector('.result #kalk-kupur')

const items = document.querySelectorAll('.kalk-kupur .speedbuton')
items.forEach(function(el){
    ItemScroll(el);
    ItemChange(el);
    ItemClick(el);
})


function ItemClick(el){
    el.addEventListener('click', function(){         
        SumKupuru();
    })
} 
function ItemChange(el){
    el.addEventListener('input', function(){    
        SumKupuru();
    })
} 

function ItemScroll(el){
    el.addEventListener('wheel', function(event){              
        var y = event.deltaY;
        if (y > 0) {
            el.value--
        } else {
            el.value++
        }      
        SumKupuru();
    })
} 

  
function SumKupuru(){
    let sum = 0;

    for (let i = 0; i < items.length; i++)      
        if(!CheckButoon[i].checked){            
            sum+= +items[i].value* +items[i].dataset.nominal  
        }

    kalkKupurAnswer.innerHTML=`${sum}`
}

const CheckButoon = document.querySelectorAll('input[name="current"]')
const CheckButoonLabel = document.querySelectorAll('.checkbox-group label')
CheckButoonLabel.forEach(function(e,i){
    e.addEventListener('click' , function(){
        setTimeout(function(){
            SumKupuru();
        }, 1);
})})





function clearInput(){
    items.forEach(function(el ){
        el.value=''})
        kalkKupurAnswer.innerHTML=`${0}`
}

function clearCheckbox(){
    CheckButoon.forEach(function(el ){
        el.checked=false})
    SumKupuru()    
}


const dataSave = document.querySelectorAll('.buttons-group input[name="dataSave"]')
let previos = 0;
dataSave.forEach(function(el,i){
    el.addEventListener('click', function(){
        items.forEach(e=>{
            
            switch (previos) {
            case 0:
                e.dataset.save1=e.value;
                break;
            case 1:
                e.dataset.save2=e.value;
                break;
            case 2:
                e.dataset.save3=e.value;
                break;                  
        }

        switch (i) {
            case 0:
                e.value=e.dataset.save1;
                break;
            case 1:
                e.value=e.dataset.save2;
                break;
            case 2:
                e.value=e.dataset.save3;
                break;  
        }})        
        previos=i;

        SumKupuru();
    })

})







const textArea = document.querySelector('.calkulator #example')
document.querySelectorAll('.calkulator .buttons .item').forEach(el=> 
    el.addEventListener('click', function(){
        textArea.value += el.textContent
})) 

const buttonD = document.querySelector('.calkulator .buttons .item-d').addEventListener('click', function(){
    document.querySelector('.calkulator #answer').innerHTML= eval(textArea.value)
})

const buttonC = document.querySelector('.calkulator .buttons .item-c').addEventListener('click', function(){
    textArea.value=''
    document.querySelector('.calkulator #answer').innerHTML= '0'
})

const buttonCC = document.querySelector('.calkulator .buttons .item-cc').addEventListener('click', function(){
    textArea.value= textArea.value.slice(0, -1);
})
   














function ProcentPanelShow(){
    document.querySelector('.percent').classList.toggle('show')
}







const range = document.querySelector('#range')
const label = document.querySelector('.percent #value')
const ProcentLabel = document.querySelector('.percent #procent')
const ProcentSum = document.querySelector('.percent #procentSum')

function labelSet(){
    label.style.left = `${range.value*1.65}px`
    ProcentLabel.innerHTML=`${ProcentSum.value / 100*range.value}`
}
label.addEventListener("input",function(){
    range.value=label.value    

    labelSet()
})
range.addEventListener("input",function(){
    label.value = `${range.value}`

    labelSet()
})

function SetPercent(e){
    range.value= +e.textContent 
    label.value= +e.textContent 
    labelSet()
}




function TemeShow(){
    document.querySelector('.theme-switcher').classList.toggle('show')
}
function DailyCasaShow(){
    document.querySelector('.daily-casa').classList.toggle('show')
}




const DayliCasaInputs= document.querySelectorAll('#DayliCasa') 
DayliCasaInputs.forEach(function(el){
    el.addEventListener('input',function(){
        document.querySelector('.daily-casa #rezult').innerHTML=`${+DayliCasaInputs[1].value+ +DayliCasaInputs[2].value - +DayliCasaInputs[3].value - +DayliCasaInputs[0].value }` 
    })
})
