function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(star);
    setTimeout(() => {
        document.body.removeChild(star);
    }, 7000);
}


setInterval(createStar, 100);