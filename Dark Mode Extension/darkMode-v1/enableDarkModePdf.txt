var cover = document.createElement("div");

let PDFCSS = `

    position: fixed;

    pointer-events: none;

    top: 0;

    left: 0;

    width: 100vw;

    height: 100vh;

    background-color: white;

    mix-blend-mode: difference;

    z-index: 1;

`

cover.setAttribute("style", PDFCSS);

document.body.appendChild(cover);