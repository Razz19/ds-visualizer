<template>
  <div class="grid justify-items-center ">
    <div class="card w-9/12 bg-base-100 shadow-xl mb-10">
      <div class="card-body">
        <h1 class="card-title font-bold">Stack</h1>
        <p>Stack is a linear data structure that follows a particular order in which the operations are performed. The
          order may be LIFO(Last In First Out) or FILO(First In Last Out). There are many real-life examples of a stack.
          Consider an example of plates stacked over one another in the canteen.</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
  </div>
  <div class="grid justify-items-center ">
    <div id="vue-canvas"></div>
  </div>
</template>




<script>

import { Stack } from "../../algo/stack.js";

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
    //print route name

    const script = function (p5) {
      let stack = new Stack();
      const width = 900
      const height = 650
      // NOTE: Set up is here
      p5.setup = _ => {
        p5.removeElements();
        const canvas = p5.createCanvas(width, height);
        canvas.parent("vue-canvas");
        let push = p5.createButton('push');
        push.id('stackpushbtn');
        push.addClass("btn btn-sm btn-accent")
        push.position(50, 360);
        push.mousePressed(() => {
          console.log("stack push");
          const value = Math.floor(Math.random() * 100);
          stack.push(value);

        })

        let pop = p5.createButton('pop');
        pop.id('stackpopbtn');
        pop.addClass("btn btn-sm btn-error")
        pop.position(50, 400);
        pop.mousePressed(() => {
          console.log("stack pop");
          stack.pop();
        })

        stack.push(9);
        stack.push(6);

        console.log(stack);

      };
      // NOTE: Draw is here
      p5.draw = _ => {

        let xSpace = width;
        let ySpace = height / 2;

        p5.background(51);
        stack.show(p5, xSpace, ySpace);

      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  }
};
</script>

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
