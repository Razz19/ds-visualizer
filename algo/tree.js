class Tree {
    constructor(p5) {
        this.root = null;
        this.p5 = p5;
    }
    addNode(val) {
        let node = new Node(val);
        if (this.root == null) {
            this.root = node;
        } else {
            this.root.addNode(node);
        }
    }
    remove(data) {

        this.root = this.removeNode(this.root, data);
    }


    removeNode(node, key) {

        if (node === null) return null;

        else if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }


            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.value = aux.value;

            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }
    findMinNode(node) {
        if (node.left === null) return node;
        else return this.findMinNode(node.left);
    }
    traverse(type) {
        if (type == "inorder") this.root.inOrder();
    }
    display(xSpace, ySpace) {
        this.p5.translate(xSpace / 2, ySpace);
        xSpace /= 2;
        if (this.root) this.root.show(this.p5, xSpace, ySpace);
    }

    depth(node = this.root) {
        if (node === null) return 0;

        return Math.max(this.depth(node.left), this.depth(node.right)) + 1;
    }
}

class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
    inOrder(arr) {
        if (this.left) this.left.inOrder(arr);
        arr.push(this.value);
        if (this.right) this.right.inOrder(arr);
    }
    unColor() {
        if (this.left) this.left.unColor();
        this.green = null;
        if (this.right) this.right.unColor();
    }
    search(val) {
        if (this.value == val) {
            return this;
        }
        if (this.left && val < this.value) {
            return this.left.search(val);
        }
        if (this.right && val > this.value) {
            return this.right.search(val);
        }
        return false;
    }
    addNode(node) {
        if (node.value < this.value) {
            // go to left
            if (this.left == null) {
                this.left = node;
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            // go to right
            if (this.right == null) {
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }
    show(p5, xSpace, ySpace) {
        p5.fill(200);
        p5.strokeWeight(2);
        p5.stroke(255);
        if (this.green) fill("lightgreen");
        p5.ellipse(0, 0, 30);
        p5.noStroke();
        p5.fill(0);
        p5.text(this.value, 0, 0);
        if (this.left) {
            p5.push();
            p5.stroke(255);
            p5.line(-8, 13, -xSpace / 2 + 5, ySpace - 15);
            p5.translate(-xSpace / 2, ySpace);
            xSpace /= 2;
            this.left.show(p5, xSpace, ySpace);
            xSpace *= 2;
            p5.pop();
        }
        if (this.right) {
            p5.push();
            p5.stroke(255);
            p5.line(8, 13, xSpace / 2 - 5, ySpace - 15);
            p5.translate(xSpace / 2, ySpace);
            xSpace /= 2;
            this.right.show(p5, xSpace, ySpace);
            xSpace *= 2;
            p5.pop();
        }
    }
}


//export treee ad node
module.exports = {
    Tree,
    Node
}