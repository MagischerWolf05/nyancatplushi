const nyancaticon = document.getElementById('nyancaticonid');

const updateSquarePosition = () => {
    const scrollX = (window.pageYOffset / window.outerHeight) * window.outerWidth * 0.9;
    nyancaticon.style.marginLeft = `${scrollX}px`;
    nyancaticon.style.top = `${20}px`;
};

window.addEventListener('scroll', updateSquarePosition);
