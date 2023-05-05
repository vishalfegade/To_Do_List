let submitbutton=document.querySelector('.submitBtn');

let input=document.querySelector('input');

let list=document.querySelector('ul');

submitbutton.addEventListener('click', ()=>{

    let formvalue=input.value;
    
   if(formvalue.length>0){
    let newlist=document.createElement('li');

    newlist.textContent=formvalue+" ";

    // let newIcon=document.createElement('i');
    // console.log(newIcon);
    // newIcon.textContent='<i class="fa-sharp fa-solid fa-delete-left"></i>';
    // newIcon.classList.add("fa-sharp fa-solid fa-delete-left");
    // newlist.appendChild('<i class="fa-sharp fa-solid fa-delete-left"></i>');
    newlist.innerHTML=formvalue+" "+'<i class="fa-sharp fa-solid fa-delete-left"></i>';
    list.appendChild(newlist);
    input.value='';
   }
   else{
           input.classList.toggle('invisible');
   }

})


document.addEventListener('click',(event)=>{
    if(event.target.tagName=== 'LI'){
        let clickedli=event.target;
        clickedli.classList.toggle('crossed');
    }
})


document.addEventListener('click',(event)=>{
    console.log(event.target);
    if(event.target.className=== 'fa-sharp fa-solid fa-delete-left'){
        let clickedspan=event.target;
        clickedspan.parentNode.classList.toggle('invisible');
    }
})