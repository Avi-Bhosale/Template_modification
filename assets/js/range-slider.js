let minDollars=50,maxDollars=1500,minSlider=document.querySelector("#min"),maxSlider=document.querySelector("#max");function numberWithSpaces(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function updateDollars(){let e=(maxDollars-minDollars)*minSlider.value/100+minDollars,l=(maxDollars-minDollars)*maxSlider.value/100+minDollars;document.querySelector("#from").textContent=`$${numberWithSpaces(Math.floor(e))}`,document.querySelector("#to").textContent=`$${numberWithSpaces(Math.floor(l))}`}maxSlider.addEventListener("input",()=>{let e=parseInt(minSlider.value),l=parseInt(maxSlider.value);l<e+10&&(minSlider.value=l-10,e===parseInt(minSlider.min)&&(maxSlider.value=10)),updateDollars()}),minSlider.addEventListener("input",()=>{let e=parseInt(minSlider.value),l=parseInt(maxSlider.value);e>l-10&&(maxSlider.value=e+10,l===parseInt(maxSlider.max)&&(minSlider.value=parseInt(maxSlider.max)-10)),updateDollars()});