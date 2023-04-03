const cursor = document.querySelector('.cursor');
let timeout;

document.addEventListener('mousemove', function (e) {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';


    timeout = setTimeout(() => {
        cursor.style.display = 'none'
    }, 5000)
})

clearTimeout(timeout);


document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
})