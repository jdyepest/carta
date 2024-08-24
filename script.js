

document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const container = document.querySelector('.container');
  
    envelopeWrapper.addEventListener('click', () => {
      envelopeWrapper.classList.add('flap');

      var audio = new Audio('love.m4a');
      audio.play();
  
      setTimeout(() => {
        container.classList.add('show-letter'); // Show and grow the letter
      }, 1000); // Delay to sync with the flap animation
  
      setTimeout(() => {
        envelopeWrapper.classList.add('move-envelope'); // Move the envelope out of view
      }, 1200); // Match the duration of the transition
  
      envelopeWrapper.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform') {
            setTimeout(() => {
              envelopeWrapper.remove(); // Remove the envelope from the DOM after a delay
            }, 800); 
        }
      }); 
    });

    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
});
  });
  


  
  