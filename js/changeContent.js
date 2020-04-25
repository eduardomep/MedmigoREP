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
                        // actualSection[j].classList.add('d-none');
                        // actualSection[j].classList.remove('d-flex');
                        actualSection[j].classList.remove('d-flex');
                        actualSection[j].classList.remove('d-none');
                        actualSection[j].classList.add('d-flex');
                        actualSection[j].classList.add('animated');

                    }
                    
                    tabButtons[i].classList.remove('tab-button-active');

                    // (document.querySelector(tabButtons[i].dataset.content)).classList.remove('d-flex');
                    // (document.querySelector(tabButtons[index].dataset.content)).classList.remove('d-flex');
                    // (document.querySelector(tabButtons[i].dataset.content)).classList.remove('d-none');

                    // (document.querySelector(tabButtons[i].dataset.content)).classList.add('d-flex');
                    // (document.querySelector(tabButtons[i].dataset.content)).classList.add('fadeIn');
                    // (document.querySelector(tabButtons[index].dataset.content)).classList.add('d-none');
                }               
           }
            
        }
    });
});


