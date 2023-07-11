function playFlute(e) {
    
    // console.log(e, e.keyCode);
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // console.log(audio);

    const circle = document.querySelector(`.circle[data-key="${e.keyCode}"]`);

    // Stop the function if no key is presses
    if (!circle) return;

    circle.classList.add("active");
    audio.currentTime = 0;
    audio.play();
    
    // Remove class=`active` on animation end
    circle.addEventListener(`animationend`, () => {
        // console.log(`end animation`);
        circle.classList.remove("active");
    }) // END circle.addEventListener

} // END playFlute

document.addEventListener("keydown", playFlute);


