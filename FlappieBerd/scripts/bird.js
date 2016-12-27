class Bird {
    constructor() {
        this.x = 7;
        this.y = sideLength / 2;
        this.r = 3;
        this.vel = 0;

        this.draw = function() {
            /*
            ctx.beginPath();
            ctx.arc(this.x * scl, this.y * scl, this.r * scl, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            */
            var img = new Image();
            img.src = 'bird.png';
            ctx.drawImage(img, this.x * scl, this.y * scl, 2 * this.r * scl, 2 * this.r * scl);
        };

        this.update = function() {
            this.vel += 0.13;
            this.y += this.vel;
        };

        this.jump = function() {
            this.vel = -2;
        };

        this.outOfBounds = function() {
            return (this.y + this.r) > sideLength;
        };

        this.touchesPipe = function(pipe) {
            if (pipe.x > this.x + this.r || pipe.x + pipe.w < this.x - this.r) {
                return false;
            }
            return this.y > pipe.bottom || this.y < pipe.top;
        }
    }
}