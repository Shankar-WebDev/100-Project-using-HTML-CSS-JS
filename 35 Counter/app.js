//countEl

let countEl = document.getElementById('count');
//saveEl

let saveEl = document.getElementById('save');
//incrementEl

let incrementBtn = document.querySelector('.increment-btn');
//saveBtn

let saveBtn = document.querySelector('.save-btn');

// console.log(countEl)
// console.log(saveBtn)
// console.log(saveEl)
// console.log(incrementBtn)



let count =0;
incrementBtn.addEventListener('click',() =>{
    count+=1;
    countEl.textContent= count;
});

saveBtn.addEventListener('click',() =>{
    let countStr = count + ", "
    saveEl.textContent +=countStr
    countEl.textContent =0;
    count=0
})