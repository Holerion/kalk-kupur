const CheckButoon = document.querySelectorAll('input[name="current"]')
const CheckButoonLabel = document.querySelectorAll('.checkbox-group label')

const radioButtons = document.querySelectorAll('input[name="sidepanel"]');

const kalkKupurAnswer = document.querySelector('.result #kalk-kupur')

const items = document.querySelectorAll('.kalk-kupur .speedbuton')
items.forEach(function(el){
    ItemScroll(el);
    ItemChange(el);
    ItemClick(el);
})


CheckButoonLabel.forEach(e =>{
e.addEventListener('click' , function(){
    SumKupuru();
})})

function ItemClick(el){
    el.addEventListener('click', function(){    
        radioButtons.forEach(function(e){  
            if (e.checked && e.dataset.value!=0)
                el.value = e.dataset.value;       
            })
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
        if(!CheckButoon[i].checked)
        sum+= +items[i].value* +items[i].dataset.nominal  
    kalkKupurAnswer.innerHTML=`${sum}`
}





document.querySelector('.radio #clear').addEventListener('click',function(){
    items.forEach(function(el ){
        el.value=''})
        kalkKupurAnswer.innerHTML=`${0}`
        radioButtons[radioButtons.length-1].checked = true;
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
   












const percentTab = document.querySelector('.percent')
const showPercentTab = document.querySelector('.showtab')
const closePercentTab = document.querySelector('.close')

showPercentTab.addEventListener('click', function(){
    if (!percentTab.classList.contains('show')){
        console.log('show')
        percentTab.classList.add('show')
    }
})
closePercentTab.addEventListener('click', function(){
    if (percentTab.classList.contains('show')){
        console.log('hide')
        percentTab.classList.remove('show')
    }
})






const range = document.querySelector('#range')
const label = document.querySelector('.percent #value')
const ProcentLabel = document.querySelector('.percent #procent')
const ProcentSum = document.querySelector('.percent #procentSum')

label.addEventListener("input",function(){
    range.value=label.value    
    label.style.left = `${range.value}%`

    ProcentLabel.innerHTML=`${ProcentSum.value / 100*range.value}`

})
range.addEventListener("input",function(){
    label.style.left = `${range.value}%`
    label.value = `${range.value}`

    ProcentLabel.innerHTML=`${ProcentSum.value / 100 *range.value}`
})






