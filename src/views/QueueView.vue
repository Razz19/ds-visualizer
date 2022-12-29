<template>
    <div class="grid justify-items-center ">
        <div class="card w-9/12 bg-base-100 shadow-xl mb-10">
            <div class="card-body">
                <h1 class="card-title font-bold">Queue</h1>
                <p>A Queue is defined as a linear data structure that is open at both ends and the operations are
                    performed in First In First Out (FIFO) order. We define a queue to be a list in which all additions
                    to the list are made at one end, and all deletions from the list are made at the other end.</p>
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

import { Queue } from "../../algo/queue.js";

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

            let queue = new Queue();

            var speed = 2;
            var posX = 35;
            const width = 900
            const height = 650
            // NOTE: Set up is here
            p5.setup = _ => {
                p5.removeElements();
                const canvas = p5.createCanvas(width, height);
                canvas.parent("vue-canvas");
                let push = p5.createButton('enqueue');
                push.id('queuepushbtn');
                push.addClass("btn btn-sm btn-accent")
                push.position(50, 360);
                push.mousePressed(() => {
                    console.log("queue push");
                    const value = Math.floor(Math.random() * 100);
                    queue.enqueue(value);
                })

                let pop = p5.createButton('dequeue');
                pop.id('queuepopbtn');
                pop.addClass("btn btn-sm btn-error")
                pop.position(50, 400);
                pop.mousePressed(() => {
                    console.log("queue pop");
                    queue.dequeue();
                })

                queue.enqueue(9);
                queue.enqueue(6);

                console.log(queue);

            };
            // NOTE: Draw is here
            p5.draw = _ => {

                let xSpace = width;
                let ySpace = height / 2;

                p5.background(51);
                queue.show(p5, xSpace, ySpace);


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
  