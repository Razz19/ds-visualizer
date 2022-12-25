//stack class
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
    show(p5, width, height) {

        //draw the stack items in a column
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
    Stack
}