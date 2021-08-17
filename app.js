class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.currentKick = "./sounds/kick-classic.wav";
        this.currentClap = "./sounds/clap-808.wav";
        this.currentHihat = "./sounds/hihat-digital.wav";
        this.kickAudio = document.querySelector(".kick-sound");
        this.clapAudio = document.querySelector(".clap-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0;
        this.bpm = 150;
        this.playButton = document.querySelector(".play-btn");
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select");
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
                        this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains("clap-pad")) {
                        this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                }
                if(bar.classList.contains("hihat-pad")) {
                        this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        });
        this.index++;
        console.log(`Step ${step} and Index ${this.index}`);
    }

    start() {
        const interval = (60/this.bpm) * 1000;
        // Check if its playing
        if(!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval)
        } else {
            // Clear the interval
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }
    }

    changeSound(e) {
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch(selectionName) {
            case "kick-select":
                this.kickAudio.src = selectionValue;
                break;
            case "clap-select":
                this.clapAudio.src = selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = selectionValue;
                break;
        }
    }
}

const drumKits = new DrumKit();

// Event listeners

drumKits.pads.forEach(pad => {
    pad.addEventListener("click", drumKits.activePad);
    pad.addEventListener("animationend", function() {
        this.style.animation = "";
    });
});

drumKits.playButton.addEventListener("click", () => {
    drumKits.start();
});

drumKits.playButton.onclick = function() {
    if(this.innerHTML == "Stop") {
        this.innerHTML = "Play";
        this.classList.add("active");
    } else {
        this.innerHTML = "Stop";
        this.classList.remove("active");
    }
};

drumKits.selects.forEach(select => {
    select.addEventListener("change", function(e) {
        drumKits.changeSound(e);
    });
});