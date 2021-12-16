// START NAVBAR
const searchinput = document.querySelector('.searchinputs');
const searchbtn = document.querySelector('.searchbtns');
searchbtn.addEventListener('click',()=>{
    searchinput.classList.toggle("searchinputactives");
});

let header = document.getElementById('header');
let scrolltoTop = document.querySelector('.scrolls');
let headercontrol = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == "down"){
            header.classList.add('headers');
            header.classList.add('animate__slideInDown');
            scrolltoTop.style.display = "block";
            scrolltoTop.classList.add('animate__slideInUp');
        }else{
            header.classList.remove('headers');
            header.classList.remove('animate__slideInDown');
            scrolltoTop.style.display = "none";
            scrolltoTop.classList.remove('animate__slideInUp');
        }
    },
    offset: '75%'
  })
// END NAVBAR

// START BANNNER
var typed = new Typed('.type', {
    strings: ['TRAVEL TO EXPLORE','TO TRAVEL IS TO LIVE'],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
    });
// END BANNNER

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
        feedback: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."
    },
    {
        photo: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Kay Kay",
        role: "Project Manager flyhigh",
        feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
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

// START SCROLL REVEAL 
ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: true
}).reveal('.contents',{
    interval: 200
});
// END SCROLL REVEAL 