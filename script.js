
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");

const title = document.getElementById("title");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const emoji = document.getElementById("emoji");

const result = document.getElementById("result");
const punchline = document.getElementById("punchline");
const againBtn = document.getElementById("againBtn");

let attempts = 0;

const reactions = [
    "HEY! Why are you trying to go to hawassa? 🤨",
    "Hawassa University has rejected YOUR wish. 💀",
    "You are fighting for your life to avoid the truth 😭",
    "Even the button doesn't want you to say NO! 😂",
    "Your finger is fast, but this button is faster. 🏃",
    "NASA has been notified about your determination. 🚀",
    "At this point, just press Adigrat, my friend. 😭",
    "ERROR 404: Your Hawassa University was not found. 🤖",
    "You unlocked the professional button dodger achievement. 🏆",
    "The button called its lawyer. You cannot win. ⚖️"
];


function escapeNo() {
    attempts++;

    const padding = 15;
    const btn = noBtn.getBoundingClientRect();

    // Make the NO button move relative to the whole screen.
    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.transition = "none";

    // Choose a random position far away from its current position.
    let x, y;
    let tries = 0;

    do {
        x = padding + Math.random() *
            (window.innerWidth - btn.width - padding * 2);

        y = padding + Math.random() *
            (window.innerHeight - btn.height - padding * 2);

        tries++;
    } while (
        Math.hypot(
            x - btn.left,
            y - btn.top
        ) < Math.min(window.innerWidth * 0.45, 400)
        && tries < 100
    );

    // Teleport instantly!
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    const reactionIndex = Math.min(
        attempts - 1,
        reactions.length - 1
    );

    message.textContent = reactions[reactionIndex];
    hint.textContent = `Failed attempts: ${attempts} 😂`;
    emoji.textContent = attempts >= 5 ? "💀" : "🏃";
}


// Desktop: run away before the mouse clicks.
noBtn.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
        escapeNo();
    }
});

// Mobile: run away when someone touches the button.
noBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    escapeNo();
});

// Backup in case a click event occurs.
noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    escapeNo();
});

yesBtn.addEventListener("click", () => {
    document.querySelector(".tag").classList.add("hidden");
    title.classList.add("hidden");
    message.classList.add("hidden");
    buttonArea.classList.add("hidden");
    hint.classList.add("hidden");
    emoji.classList.add("hidden");

    result.classList.remove("hidden");

    punchline.innerHTML =
        `Adigrat University is the only option you have!<br><br>` +
        `Official diagnosis: 100% certified clown. 🤡<br><br>` +
        `You just spent your precious time trying to find out ` +
        `where u belongs.<br><br>` +
        `<strong>And somehow, it is ADU at the end. 💀</strong>`;
});

againBtn.addEventListener("click", () => {
    location.reload();
});
