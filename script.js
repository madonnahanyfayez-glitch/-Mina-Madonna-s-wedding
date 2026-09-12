/* ==============================
   ENVELOPE
================================ */

const envelopeScreen =
    document.getElementById("envelopeScreen");

const envelope =
    document.querySelector(".envelope");

const openButton =
    document.getElementById("openInvitation");

const invitation =
    document.getElementById("invitation");


openButton.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeScreen.classList.add("opened");

        invitation.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* ==============================
   COUNTDOWN
================================ */

const weddingDate =
    new Date("November 22, 2026 19:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==============================
   MUSIC
================================ */

const music =
    document.getElementById("weddingMusic");

const musicBtn =
    document.getElementById("musicBtn");

let isPlaying = false;


musicBtn.addEventListener("click", function () {

    if (isPlaying) {

        music.pause();

        musicBtn.innerHTML = "♫";

        isPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML = "❚❚";

        isPlaying = true;

    }

});


/* ==============================
   RSVP - TEMPORARY
================================ */

const rsvpForm =
    document.getElementById("rsvpForm");

const thankYou =
    document.getElementById("thankYou");


rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();

    rsvpForm.classList.add("hidden");

    thankYou.classList.remove("hidden");

});
/* ================= NEW VINTAGE ENVELOPE ================= */

.envelope {
    cursor: pointer;
    transition: transform .35s ease, filter .35s ease;
}

.envelope:hover {
    transform: translateY(-4px);
}

.envelope:active {
    transform: scale(.98);
}

/* Wax seal */

.wax-seal {
    position: absolute;
    z-index: 7;

    width: 58px;
    height: 58px;

    left: 50%;
    top: 54%;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle at 35% 30%,
            #8d7055,
            #624936
        );

    color: #f4eee2;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Great Vibes", cursive;
    font-size: 30px;

    box-shadow:
        0 5px 12px rgba(40,30,20,.25),
        inset 0 1px 2px rgba(255,255,255,.2);

    border: 2px solid rgba(244,238,226,.35);

    transition:
        opacity .5s ease,
        transform .7s ease;
}

/* Seal disappears when envelope opens */

.envelope.open .wax-seal {
    opacity: 0;
    transform:
        translate(-50%, -50%)
        scale(.6)
        rotate(-20deg);
}


/* Cleaner vintage paper colors */

.envelope-screen {
    background:
        radial-gradient(
            circle at center,
            #fbf7ef 0%,
            #eee3d2 55%,
            #d8c7af 100%
        );
}

.envelope-back {
    background: #9f8367;
}

.envelope-front {
    background: #b79a7a;
}

.envelope-flap {
    background: #c9ad8d;
}

.letter {
    background:
        linear-gradient(
            135deg,
            #fffaf0,
            #f1e6d2
        );
}


/* ================= STORY PHOTO FRAMES ================= */

.story-photo {
    position: relative;

    width: min(86vw, 390px);
    height: 470px;

    background: #eee4d3;

    padding: 14px;

    border: none;

    box-shadow:
        0 18px 35px rgba(55,42,30,.18);

    transform: rotate(-1.5deg);

    overflow: hidden;
}

.story-photo::before {
    content: "";

    position: absolute;

    inset: 7px;

    border: 1px solid #b79b79;

    pointer-events: none;
}

.placeholder-photo {
    background:
        linear-gradient(
            145deg,
            #e9decc,
            #d5c5ad
        );

    color: #665342;
}

.placeholder-photo div {
    position: relative;
    z-index: 2;
}

.placeholder-photo span {
    font-family: "Cormorant Garamond", serif;
    font-size: 14px;
    letter-spacing: 4px;
}

.placeholder-photo small {
    font-size: 14px;
    opacity: .75;
}


/* Future story cards */

.story-timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;

    width: 100%;
    margin-top: 60px;
}

.story-card {
    width: min(88vw, 400px);
}

.story-card:nth-child(even) .story-photo {
    transform: rotate(1.5deg);
}

.story-caption {
    margin-top: 25px;

    font-family: "Great Vibes", cursive;
    font-size: 38px;
}

.story-caption-small {
    margin-top: 8px;

    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: .7;
}