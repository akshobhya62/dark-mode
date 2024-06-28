chrome.storage.local.get(['num'], function(result) {
    let numOfTimes = result.num || 0;
    if (numOfTimes % 2 === 1) {
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
    } else {
        var cover = document.createElement("div");

        let PDFCSS = `
            position: fixed;
            pointer-events: none;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: black;
            mix-blend-mode: difference;
            z-index: 1;
            filter: invert(100%); /* Invert colors */
        `
    
        cover.setAttribute("style", PDFCSS);
    
        document.body.appendChild(cover);
    }
  });

