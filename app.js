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
    }

    start() {
        setInterval(() => {
            this.repeat();
        }, 1000)
    }
}