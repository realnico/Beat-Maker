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
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            // Check if pads are active
            if(bar.classList.contains("active")) {
                // Check each sound
                if(bar.classList.contains("kick-pad")) {
                    this.kickAudio.play();
                }
                if(bar.classList.contains("clap-pad")) {
                    this.clapAudio.play();
                }
                if(bar.classList.contains("hihat-pad")) {
                    this.hihatAudio.play();
                }
            }
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
    pad.addEventListener("animationend", function() {
        this.style.animation = "";
    });
});

drumKits.playButton.addEventListener("click", () => {
    drumKits.start();
});