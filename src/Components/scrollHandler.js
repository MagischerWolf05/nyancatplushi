const nyancaticon = document.getElementById('nyancaticonid');

const updateSquarePosition = () => {
    const scrollX = window.pageYOffset;
    nyancaticon.style.left = `${scrollX + 20}px`;
    nyancaticon.style.top = `${20}px`;
};

window.addEventListener('scroll', updateSquarePosition);
