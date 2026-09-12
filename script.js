/* =========================================
   MINA & MADONNA
   VINTAGE WEDDING INVITATION
========================================= */

:root {
    --ivory: #f8f3e9;
    --paper: #f2e7d5;
    --cream: #fffaf1;

    --taupe: #b9a38a;
    --beige: #d5c2a8;

    --brown: #5d4938;
    --dark-brown: #382b21;

    --gold: #9a7950;

    --shadow: rgba(57, 42, 29, 0.18);
}


/* =========================================
   RESET
========================================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--ivory);
    color: var(--brown);

    font-family: "Cormorant Garamond", serif;

    overflow-x: hidden;
}

button,
input,
textarea,
select {
    font-family: inherit;
}


/* =========================================
   GENERAL
========================================= */

.hidden {
    display: none !important;
}

.section {
    min-height: 100vh;

    padding: 100px 22px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    position: relative;
}

.eyebrow {
    font-size: 12px;

    letter-spacing: 5px;

    text-transform: uppercase;

    color: var(--gold);

    margin-bottom: 18px;
}

h1,
h2,
h3 {
    font-weight: 500;
}

h2 {
    font-size: clamp(42px, 10vw, 70px);

    line-height: 1;

    color: var(--dark-brown);
}

.ornament {
    font-size: 30px;

    color: var(--gold);

    margin: 25px 0;
}


/* =========================================
   ENVELOPE SCREEN
========================================= */

.envelope-screen {
    position: fixed;

    inset: 0;

    z-index: 1000;

    background:
        radial-gradient(
            circle at center,
            #fffaf1 0%,
            #eee1cd 60%,
            #d7c3a5 100%
        );

    display: flex;

    align-items: center;
    justify-content: center;

    transition:
        opacity 1s ease,
        visibility 1s ease;
}

.envelope-screen.opened {
    opacity: 0;

    visibility: hidden;

    pointer-events: none;
}


.envelope-wrapper {
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;
}


/* Small text above envelope */

.envelope-top {
    font-size: 11px;

    letter-spacing: 4px;

    color: var(--brown);

    margin-bottom: 30px;

    opacity: .75;
}


/* =========================================
   ENVELOPE
========================================= */

.envelope {
    position: relative;

    width: min(86vw, 390px);

    aspect-ratio: 1.55 / 1;

    cursor: pointer;

    filter:
        drop-shadow(
            0 20px 25px rgba(50, 35, 23, .22)
        );

    transition:
        transform .35s ease;
}

.envelope:hover {
    transform: translateY(-5px);
}

.envelope:active {
    transform: scale(.98);
}


/* Back */

.envelope-back {
    position: absolute;

    inset: 0;

    background: #a98b6c;

    border-radius: 3px;
}


/* Letter */

.letter {
    position: absolute;

    z-index: 2;

    left: 8%;

    bottom: 7%;

    width: 84%;

    height: 87%;

    background:
        linear-gradient(
            135deg,
            #fffaf0,
            #f0e3cf
        );

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    color: var(--dark-brown);

    box-shadow:
        0 4px 12px rgba(50, 35, 23, .12);

    transition:
        transform 1.2s cubic-bezier(.2,.8,.2,1),
        z-index .1s linear 1s;
}

.letter-small {
    font-size: 9px;

    letter-spacing: 4px;

    margin-bottom: 10px;
}

.letter h1 {
    font-family: "Great Vibes", cursive;

    font-size: 52px;

    font-weight: 400;
}

.letter p:last-child {
    font-size: 12px;

    letter-spacing: 3px;
}

.tiny-ornament {
    color: var(--gold);

    font-size: 23px;

    margin: 7px 0;
}


/* Front */

.envelope-front {
    position: absolute;

    z-index: 4;

    inset: 0;

    background: #b89b7b;

    clip-path: polygon(
        0 0,
        50% 58%,
        100% 0,
        100% 100%,
        0 100%
    );
}


/* Flap */

.envelope-flap {
    position: absolute;

    z-index: 5;

    left: 0;
    top: 0;

    width: 100%;

    height: 62%;

    background: #c9ad8c;

    clip-path: polygon(
        0 0,
        100% 0,
        50% 100%
    );

    transform-origin: top center;

    transition:
        transform 1s cubic-bezier(.2,.8,.2,1);

    backface-visibility: hidden;
}


/* Open animation */

.envelope.open .envelope-flap {
    transform: rotateX(180deg);

    z-index: 1;
}

.envelope.open .letter {
    transform: translateY(-78%);

    z-index: 6;
}


/* Wax seal */

.wax-seal {
    position: absolute;

    z-index: 7;

    left: 50%;
    top: 55%;

    width: 60px;
    height: 60px;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle at 35% 30%,
            #8e7357,
            #5e4633
        );

    border:
        2px solid rgba(255, 250, 240, .3);

    color: #f8f1e5;

    display: flex;

    align-items: center;
    justify-content: center;

    font-family: "Great Vibes", cursive;

    font-size: 30px;

    box-shadow:
        0 5px 15px rgba(40, 30, 20, .25);

    transition:
        opacity .5s ease,
        transform .7s ease;
}

.envelope.open .wax-seal {
    opacity: 0;

    transform:
        translate(-50%, -50%)
        scale(.5)
        rotate(-20deg);
}


.tap-text {
    margin-top: 35px;

    font-size: 11px;

    letter-spacing: 4px;

    color: var(--brown);

    opacity: .7;
}


/* =========================================
   MUSIC
========================================= */

.music-btn {
    position: fixed;

    right: 20px;
    top: 20px;

    z-index: 900;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    border: 1px solid var(--gold);

    background: rgba(248, 243, 233, .9);

    color: var(--brown);

    font-size: 21px;

    cursor: pointer;

    box-shadow:
        0 5px 15px var(--shadow);
}


/* =========================================
   HERO
========================================= */

.hero {
    background:
        linear-gradient(
            rgba(248, 243, 233, .86),
            rgba(248, 243, 233, .96)
        );

    background-image:
        radial-gradient(
            circle at 20% 20%,
            rgba(183, 154, 116, .14) 0,
            transparent 30%
        ),
        radial-gradient(
            circle at 80% 70%,
            rgba(183, 154, 116, .12) 0,
            transparent 30%
        );
}

.hero-inner {
    max-width: 600px;
}

.hero h1 {
    font-family: "Great Vibes", cursive;

    font-size: clamp(70px, 19vw, 125px);

    line-height: .8;

    color: var(--dark-brown);
}

.hero h1 span {
    display: block;

    font-family: "Cormorant Garamond", serif;

    font-size: 25px;

    font-style: italic;

    margin: 20px 0;
}

.date {
    font-size: 17px;

    letter-spacing: 7px;

    color: var(--gold);
}

.scroll-text {
    margin-top: 100px;

    font-size: 10px;

    letter-spacing: 4px;

    line-height: 2;

    opacity: .6;
}


/* =========================================
   STORY
========================================= */

.story {
    background: #eee3d2;

    justify-content: flex-start;

    padding-top: 110px;
}

.story > h2 {
    max-width: 650px;

    font-size: clamp(38px, 9vw, 65px);
}

.intro-text {
    max-width: 420px;

    margin-top: 25px;

    font-size: 18px;

    line-height: 1.6;

    opacity: .75;
}


.story-timeline {
    width: 100%;

    max-width: 500px;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 100px;

    margin-top: 75px;
}


.story-card {
    width: min(90vw, 400px);
}


/* =========================================
   PHOTO FRAMES
========================================= */

.story-photo {
    position: relative;

    width: 100%;

    height: 470px;

    padding: 14px;

    background: #eee4d3;

    box-shadow:
        0 18px 35px rgba(55, 42, 30, .18);

    transform: rotate(-1.5deg);

    overflow: hidden;
}

.story-card:nth-child(even) .story-photo {
    transform: rotate(1.5deg);
}


.story-photo::before {
    content: "";

    position: absolute;

    inset: 8px;

    border: 1px solid #b79b79;

    pointer-events: none;

    z-index: 2;
}


/* Empty photo placeholder */

.photo-placeholder {
    display: flex;

    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #e9decc,
            #d5c5ad
        );

    color: #665342;
}

.photo-placeholder > div {
    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 12px;

    opacity: .7;
}

.photo-placeholder span {
    font-size: 13px;

    letter-spacing: 4px;
}

.photo-placeholder small {
    font-size: 13px;

    letter-spacing: 1px;
}


/* =========================================
   STORY CAPTIONS
========================================= */

.story-caption {
    margin-top: 28px;

    font-family: "Great Vibes", cursive;

    font-size: 38px;

    color: var(--dark-brown);
}

.story-caption-small {
    margin-top: 7px;

    font-size: 12px;

    letter-spacing: 2px;

    text-transform: uppercase;

    opacity: .65;
}


/* =========================================
   DETAILS
========================================= */

.details {
    background: var(--ivory);
}

.details-grid {
    width: 100%;

    max-width: 900px;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;

    margin: 60px 0;
}

.detail {
    padding: 20px;

    border-top: 1px solid var(--beige);

    border-bottom: 1px solid var(--beige);
}

.detail > span {
    font-size: 27px;

    color: var(--gold);
}

.detail h3 {
    margin: 15px 0;

    font-size: 12px;

    letter-spacing: 4px;

    color: var(--dark-brown);
}

.detail p {
    font-size: 17px;

    line-height: 1.5;

    opacity: .8;
}


/* =========================================
   BUTTON
========================================= */

.vintage-button {
    display: inline-block;

    padding: 14px 28px;

    border: 1px solid var(--gold);

    color: var(--brown);

    background: transparent;

    text-decoration: none;

    font-size: 11px;

    letter-spacing: 3px;

    cursor: pointer;

    transition:
        background .3s ease,
        color .3s ease;
}

.vintage-button:hover {
    background: var(--brown);

    color: var(--ivory);
}


/* =========================================
   COUNTDOWN
========================================= */

.countdown-section {
    background:
        #e4d5c0;
}

.countdown {
    width: 100%;

    max-width: 700px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;

    margin-top: 65px;
}

.count-item {
    padding: 25px 5px;

    border-top: 1px solid var(--gold);

    border-bottom: 1px solid var(--gold);
}

.count-item strong {
    display: block;

    font-family: "Cormorant Garamond", serif;

    font-size: clamp(38px, 9vw, 65px);

    font-weight: 500;

    color: var(--dark-brown);
}

.count-item span {
    display: block;

    margin-top: 5px;

    font-size: 9px;

    letter-spacing: 2px;

    color: var(--brown);
}


/* =========================================
   DRESS CODE
========================================= */

.dress {
    background: var(--ivory);
}

.dress-note {
    font-size: 18px;

    opacity: .7;

    margin-top: 10px;
}

.color-palette {
    display: flex;

    gap: 12px;

    margin-top: 35px;
}

.color-palette span {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    border: 1px solid var(--gold);

    background: transparent;
}


/* =========================================
   RSVP
========================================= */

.rsvp {
    background: #eee3d2;

    min-height: auto;

    padding-top: 120px;
    padding-bottom: 120px;
}

.rsvp-intro {
    max-width: 450px;

    font-size: 18px;

    line-height: 1.6;

    opacity: .75;

    margin: 15px 0 45px;
}


#rsvpForm {
    width: min(90vw, 450px);

    display: flex;

    flex-direction: column;

    gap: 25px;
}

#rsvpForm label {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 8px;

    font-size: 10px;

    letter-spacing: 3px;

    color: var(--brown);
}

#rsvpForm input,
#rsvpForm select,
#rsvpForm textarea {
    width: 100%;

    padding: 15px;

    border: none;

    border-bottom: 1px solid var(--taupe);

    background: rgba(255,255,255,.35);

    color: var(--dark-brown);

    outline: none;

    font-size: 16px;
}

#rsvpForm textarea {
    resize: vertical;
}

#rsvpForm input:focus,
#rsvpForm select:focus,
#rsvpForm textarea:focus {
    border-bottom-color: var(--brown);
}


/* =========================================
   THANK YOU
========================================= */

.thank-you {
    padding: 60px 20px;
}

.thank-you h3 {
    font-family: "Great Vibes", cursive;

    font-size: 60px;

    color: var(--dark-brown);
}

.thank-you p {
    font-size: 18px;

    margin-top: 10px;
}

.thank-you span {
    display: block;

    margin-top: 25px;

    color: var(--gold);

    font-size: 25px;
}


/* =========================================
   FINAL
========================================= */

.final {
    min-height: 80vh;

    background:
        linear-gradient(
            135deg,
            #d8c5a9,
            #eee3d2
        );
}

.final-card {
    padding: 55px 30px;

    max-width: 650px;

    width: 100%;

    border: 1px solid rgba(154, 121, 80, .5);
}

.final h2 {
    font-family: "Great Vibes", cursive;

    font-size: clamp(60px, 15vw, 100px);

    color: var(--dark-brown);
}

.final-date {
    font-size: 15px;

    letter-spacing: 6px;

    color: var(--gold);
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {

    .section {
        padding-left: 18px;
        padding-right: 18px;
    }

    .details-grid {
        grid-template-columns: 1fr;

        max-width: 360px;

        gap: 0;
    }

    .detail {
        padding: 28px 15px;
    }

    .countdown {
        gap: 8px;
    }

    .count-item {
        padding: 20px 2px;
    }

    .count-item strong {
        font-size: 35px;
    }

    .count-item span {
        font-size: 7px;

        letter-spacing: 1px;
    }

    .story-photo {
        height: 430px;
    }

    .envelope {
        width: 88vw;
    }

}


/* =========================================
   VERY SMALL PHONES
========================================= */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 68px;
    }

    .story-photo {
        height: 390px;
    }

    .wax-seal {
        width: 52px;
        height: 52px;
    }

}