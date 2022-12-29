//queue class

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.shift();
    }
    front() {
        if (this.items.length == 0)
            return "No elements in Queue";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

    show(p5, width, height) {
        for (let i = 1; i < this.items.length + 1; i++) {
            p5.fill('#C8C8C8');
            p5.noStroke();
            p5.textAlign(p5.CENTER, p5.CENTER);
            const rectWidth = 170;
            const rectHeight = 60;
            p5.stroke('#ffffff');
            p5.strokeWeight(4);
            p5.rect(width / 2 - rectWidth / 2, width - 250 - (i * 70) - rectHeight / 2, rectWidth, rectHeight);
            p5.fill(51);
            p5.textSize(28);
            p5.text(this.items[i - 1], width / 2, width - 250 - (i * 70));

        }

    }

}

module.exports = {
    Queue
}