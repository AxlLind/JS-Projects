class Pipe {
    constructor(x) {
        this.top = Math.random() * (sideLength - pipeHoleLength);
        this.bottom = this.top + pipeHoleLength;
        this.x = x;
        this.w = 2;

        this.draw = function () {
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x * scl, 0, this.w * scl, this.top * scl);
            ctx.strokeRect(this.x * scl, this.bottom * scl, this.w * scl, scl * (sideLength - this.bottom));
        };

        this.update = function () {
            this.x -= 0.8;
        };

        this.newPipe = function () {
            this.top = Math.random() * (sideLength - pipeHoleLength);
            this.bottom = this.top + pipeHoleLength;
            this.x = sideLength;
        };

        this.passedScreen = function () {
            return this.x < -this.w;
        };
    }
}