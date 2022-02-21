const tooltips = Array.from(document.querySelectorAll('.tooltip'));
const tooltipContainer = document.querySelector('.container-tooltip');
tooltips.forEach(tooltips => {
    tooltips.addEventListener('mouseenter', (e)=>{
        tooltipContainer.classList.add('fade-in');
        tooltipContainer.style.left = `${e.pageX}px`;
        tooltipContainer.style.top = `${e.pageY}px`;
    });
    tooltips.addEventListener('mouseout', (e)=>{
        tooltipContainer.classList.remove('fade-in');
    });
});
tooltipContainer.addEventListener("mouseenter", () => {
    tooltipContainer.classList.add("fade-in");
})
tooltipContainer.addEventListener("mouseout", () => {
    tooltipContainer.classList.remove("fade-in");
})