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

// START CUSTOMER 
const customerimgs = document.querySelector('.customer-imgs');
const usernames = document.querySelector('.usernames');
const roles = document.querySelector('.roles');
const feedbacks = document.querySelector('.feedbacks');
const testimonials = [
    {
        photo: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Taylar",
        role: "HR at Dataland",
        feedback: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Kyaw Thura",
        role: "Team Lead",
        feedback: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
        photo: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Kay Kay",
        role: "Project Manager flyhigh",
        feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
    }
];
let idx = 0;
function updatetestimonial(){
    const {photo,name,role,feedback} = testimonials[idx];
    customerimgs.src = photo;
    usernames.textContent = name;
    roles.textContent = role;
    feedbacks.textContent = feedback;
    
    idx++;
    if(idx > testimonials.length-1){
        idx = 0;
    }
}
// updatetestimonial();
setInterval(updatetestimonial,10000);
// END CUSTOMER 