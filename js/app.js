// START NAVBAR
const searchinput = document.querySelector('.searchinputs');
const searchbtn = document.querySelector('.searchbtns');
searchbtn.addEventListener('click',()=>{
    searchinput.classList.toggle("searchinputactives");
})
// END NAVBAR

// START DESTINATION 
const destilis = document.querySelectorAll('.destilis');
destilis.forEach(destili =>{
    destili.addEventListener('click',(e)=>{
        if(!e.target.classList.contains('active')){
            removecurrentactive();
            e.target.classList.add('active');
        }
    });
});
function removecurrentactive(){
    destilis.forEach(destili=>{
        destili.classList.remove('active');
    })           
}
// END DESTINATION 