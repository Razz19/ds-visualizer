<template>
  <div class="grid justify-items-center ">
    <div class="card w-9/12 bg-base-100 shadow-xl mb-10">
      <div class="card-body">
        <h1 class="card-title font-bold">Binary Tree</h1>
        <p>A binary tree is a rooted tree that is also an ordered tree (a.k.a. plane tree) in which every node has at
          most two children. A rooted tree naturally imparts a notion of levels (distance from the root), thus for every
          node a notion of children may be defined as the nodes connected to it a level below.</p>
        <div class="card-actions justify-end">
          <!-- <button class="btn btn-primary">Buy Now</button> -->
        </div>
      </div>
    </div>
  </div>
  <div class="grid justify-items-center ">
    <div id="vue-canvas"></div>
  </div>
</template>



<script>
//https://editor.p5js.org/funplanet/sketches/_uwaomKtM

import { Tree } from "../../algo/tree.js";

export default {
  created() {
    const value = document.getElementById('value');
    const addbtn = document.getElementById('addbtn');
    const removebtn = document.getElementById('removebtn');
    const randombtn = document.getElementById('randombtn');
    const stackpushbtn = document.getElementById('stackpushbtn');
    const stackpopbtn = document.getElementById('stackpopbtn');
    const queuepushbtn = document.getElementById('queuepushbtn');
    const queuepopbtn = document.getElementById('queuepopbtn');


    if (value && addbtn && removebtn && randombtn) {
      value.remove();
      addbtn.remove();
      removebtn.remove();
      randombtn.remove();
    }
    if (stackpushbtn && stackpopbtn) {
      stackpushbtn.remove();
      stackpopbtn.remove();
    }
    if (queuepushbtn && queuepopbtn) {
      queuepushbtn.remove();
      queuepopbtn.remove();
    }

  },

  mounted() {

    const script = function (p5) {

      let xSpace, ySpace;
      let sorted;
      let canvas, button;
      let tree = new Tree(p5);
      const width = 900
      const height = 650
      // NOTE: Set up is here
      p5.setup = _ => {
        p5.removeElements();
        canvas = p5.createCanvas(width, height);
        canvas.parent("vue-canvas");
        xSpace = width;
        ySpace = height / 2;
        p5.fill(0);
        sorted = p5.createDiv('');
        sorted.position(0, 90);
        sorted.style('color', 'white');
        sorted.style('font-weight', 'bold');
        p5.noStroke();
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textFont('monospace');
        p5.textSize(20);

        let box = p5.createInput();
        box.id('value');
        box.attribute('type', 'number');
        box.position(50, 300);
        box.attribute('placeholder', "Node Value");
        box.addClass("input input-sm input-bordered")
        button = p5.createButton('Add Node');
        button.id('addbtn');
        button.addClass("btn btn-sm btn-accent")
        button.position(50, 365);
        let remove = p5.createButton('Remove Node');
        remove.id('removebtn');
        remove.addClass("btn btn-sm btn-error")
        remove.position(50, 405);
        button.mousePressed(() => {
          let val = parseInt(box.value());
          if (val) tree.addNode(val);
          box.value(null);
        })
        remove.mousePressed(() => {
          let val = parseInt(box.value());
          if (val) tree.remove(val);
          box.value(null);
        })


        let random = p5.createButton('Random Node');
        random.id('randombtn');
        random.addClass("btn btn-sm btn-primary")
        random.position(50, 445);
        random.mousePressed(() => {

          let val = Math.floor(Math.random() * 100) + 1;
          if (val) {
            tree.addNode(val);
          } else {
            p5.fill(255, 0, 0);
            p5.text(val + "already exists!", 50, 50);
          }
          box.value(null);
        })
        tree.addNode(10)
        tree.addNode(5)
        tree.addNode(15)


      };
      // NOTE: Draw is here
      p5.draw = _ => {
        p5.background(51);
        xSpace = width;
        ySpace = height / (tree.depth() + 1);
        tree.display(xSpace, ySpace);

      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vue-canvas {
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 900px;
  height: 650px;
  border-radius: 20px;
  overflow: hidden;

}
</style>

