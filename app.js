class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelector(".kick-sound");
        this.clapAudio = document.querySelector(".clap-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
        this.playButton = document.querySelector(".play-btn");
    }

    activePad() {
        if (this.classList.contains("active")) {
            this.classList.remove("active")
        } else {
            this.classList.toggle("active");
        }
    }

    repeat() {
        let step = this.index % 8;
        const activeBar = document.querySelectorAll(`.b${step}`);

        // Loop over the pads
        activeBar.forEach(bar => {
            bar.style.animation = `playTrack 0.4s alternate ease-in-out`;
        });
        this.index++;
        console.log(`Step ${step} and Index ${this.index}`);
    }

    start() {
            const interval = (60/this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, interval)
    }
}

const drumKits = new DrumKit();

drumKits.pads.forEach(pad => {
    pad.addEventListener("click", drumKits.activePad);
})

drumKits.playButton.addEventListener("click", () => {
    drumKits.start();
});