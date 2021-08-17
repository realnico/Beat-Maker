class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelector(".kick-sound");
        this.clapAudio = document.querySelector(".clap-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
    }

    repeat() {
        let step = this.index % 8;
        const activeBar = document.querySelectorAll(`.b${step}`);
        this.index++;
        /* console.log(`Step ${step} and Index ${this.index}`); */
    }

    start() {
            const interval = (60/this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, interval)
    }
}

const drumKits = new DrumKit();

drumKits.start();