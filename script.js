const layer = document.querySelector('.layer');

function handleMove(x,y){
    layer.style.background = `radial-gradient(circle at ${x}px ${y}px,transparent 50px,black 80px,black`
}
window.addEventListener('mousemove',(e) => {
     const x = e.clientX;
     const y = e.clientY;
     handleMove(x,y);
})

//support for mobile
window.addEventListener('touchmove',(e) => {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    handleMove(x,y);
})