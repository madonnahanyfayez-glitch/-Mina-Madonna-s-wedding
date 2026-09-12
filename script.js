/* =========================================
   MINA & MADONNA
   WEDDING INVITATION
========================================= */


/* =========================================
   ENVELOPE
========================================= */

const envelopeScreen =
    document.getElementById("envelopeScreen");

const envelope =
    document.getElementById("envelope");

const invitation =
    document.getElementById("invitation");

const musicBtn =
    document.getElementById("musicBtn");


let envelopeOpened = false;


function openInvitation() {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    /* Open the envelope */

    envelope.classList.add("open");


    /* Wait for the letter animation */

    setTimeout(() => {

        envelopeScreen.classList.add("opened");

        invitation.classList.remove("hidden");

        /*
           Keep the page at the beginning
           of the invitation.
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1450);

}


/*
   The entire envelope is clickable.
*/

envelope.addEventListener(
    "click",
    openInvitation
);


/* =========================================
   COUNTDOWN
========================================= */

const weddingDate =
    new Date(
        "November 22, 2026 19:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    /* Wedding day reached */

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;
    }


    /* Days */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    /* Hours */

    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    /* Minutes */

    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    /* Seconds */

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    /* Update screen */

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


/* Start countdown */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("weddingMusic");


let isPlaying = false;


musicBtn.addEventListener(
    "click",
    function () {

        if (isPlaying) {

            music.pause();

            musicBtn.innerHTML = "♫";

            isPlaying = false;

        } else {

            music.play()
                .then(() => {

                    musicBtn.innerHTML = "❚❚";

                    isPlaying = true;

                })
                .catch(() => {

                    /*
                       Browser blocked autoplay.
                       User can press the button again.
                    */

                    musicBtn.innerHTML = "♫";

                });

        }

    }
);


/* =========================================
   RSVP
========================================= */

const rsvpForm =
    document.getElementById("rsvpForm");

const thankYou =
    document.getElementById("thankYou");


rsvpForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /*
           For now this is the visual RSVP.
           Later we can connect it to
           Google Sheets / Formspree so
           you actually receive the responses.
        */


        rsvpForm.classList.add("hidden");

        thankYou.classList.remove("hidden");


        /*
           Scroll gently to thank-you message.
        */

        thankYou.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);