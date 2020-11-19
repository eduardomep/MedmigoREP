'use strict'
// Get all buttons
let tabButtons = document.querySelectorAll('.tab-button');


( ()=>{
    for (let i = 0; i < tabButtons.length; i++) {
        if(i != 0){
            let otherContent = document.querySelectorAll(tabButtons[i].dataset.content);
            for (let index = 0; index < otherContent.length; index++) {
                otherContent[index].classList.add('d-none');
                
            }

        }               
    }
})();

// Iterate all buttons
tabButtons.forEach((tabButton,index) => {
    // Add click event for iterated buttons
    tabButton.addEventListener('click', () => {
        tabButtons.forEach(tabButton => {
            if(tabButton.classList.contains("btn-secondary")){
                if(tabButton.classList.contains("main-tab")){

                }else{
                    tabButton.classList.remove("btn-secondary");
                    tabButton.classList.add("btn-outline-light");
                }
            }
        });
        if(tabButton.classList.contains("main-tab")){

        }else{
            tabButton.classList.remove("btn-outline-light");
            tabButton.classList.add("btn-secondary");
            tabButton.style.color ="White !important";
        }
        // If the te actual button is not active
        if(!tabButton.classList.contains('tab-button-active')){
            // active the actual button
            tabButton.classList.add('tab-button-active');
            // Iterate looking for active button
            for (let i = 0; i < tabButtons.length; i++) {
                if(i != index){
                    let otherContent = document.querySelectorAll(tabButtons[i].dataset.content)
                    for (let j = 0; j <otherContent.length  ; j++) {
                        // otherContent[j].classList.remove('d-flex');
                        // otherContent[j].classList.remove('d-none');
                        // otherContent[j].classList.add('d-flex');
                        // otherContent[j].classList.add('animated');
                        otherContent[j].classList.add('d-none');
                        otherContent[j].classList.remove('d-flex');
                    }
                    let actualSection = document.querySelectorAll(tabButtons[index].dataset.content)
                    for (let j = 0; j < actualSection.length  ; j++) {
                        actualSection[j].classList.remove('d-flex');
                        actualSection[j].classList.remove('d-none');
                        actualSection[j].classList.add('d-flex');
                    }
                    tabButtons[i].classList.remove('tab-button-active');
                }               
            }
            
        }
    });
});


