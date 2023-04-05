const nyancaticon = document.getElementById('nyancaticonid');
const border = document.querySelector('.nyancatBorder');
const placeholder = document.querySelector('.nyancatBorderPlaceholder');
const stickyOffset = border.offsetTop;

const updateSquarePosition = () => {
    const scrollX = (window.pageYOffset / document.body.scrollHeight) * window.outerWidth ;
    nyancaticon.style.marginLeft = `${scrollX}px`;
    nyancaticon.style.top = `${20}px`;

    console.log(window.pageYOffset, stickyOffset)
    if (window.pageYOffset >= stickyOffset) {
        border.classList.add('stuck');
        placeholder.style.display = 'block';
    } else {
        border.classList.remove('stuck');
        placeholder.style.display = 'none';
    }
};

window.addEventListener('scroll', updateSquarePosition);
