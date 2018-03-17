(function () {
    var canvas = createCanvas();
    var ctx = canvas.getContext('2d');

    document
        .getElementById('canvas-container')
        .appendChild(canvas);

    window.rectangle = function (x, y, width, height, color) {
        ctx.fillStyle = color || 'white';
        ctx.fillRect(x, y, width, height);
    };

    window.circle = function (x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color || 'white';
        ctx.fill();
    };

    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function createCanvas() {
        var c = document.createElement('canvas');
        c.width = window.innerWidth ;
        c.height = window.innerHeight ;
        c.style.display = 'block';
        c.style.background = 'white';
        return c;
    }
})();