let contactBtns = document.querySelectorAll(".contact-btn");
let contactModal = document.querySelector(".modal-contact");
let closeModalBtns = document.querySelectorAll(".close-modal");
closeModalBtns.forEach(closeModalBtn => {
    closeModalBtn.addEventListener("click",function(){
        contactModal.style.display="none";
        document.body.style.overflowY = "scroll"; 
    })
});
contactBtns.forEach(contactBtn => {
    contactBtn.addEventListener("click",function(){
        contactModal.style.display="flex";
        document.body.style.overflow = "hidden"; 
    })
});