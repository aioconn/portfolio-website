window.onload = function (){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const resize = () => {
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight;
    }
    resize()
    window.addEventListener('resize', resize)
}

