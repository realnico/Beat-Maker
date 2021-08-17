class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelector(".kick-sound");
        this.clapAudio = document.querySelector(".clap-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
    }

    repeat() {
        let step = this.index % 8;
        console.log(`Step ${step} and Index ${this.index}`);
        this.index++;
    }

    start() {
        setInterval(() => {
            this.repeat();
        }, 1000)
    }
}

const drumKits = new DrumKit();

drumKits.start();