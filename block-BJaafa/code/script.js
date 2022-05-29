function random_bg_clr() {
    setInterval(() => {
        var a = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var c = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + a + "," + b + "," + c + ")";
        document.body.style.background = bgColor;
    }, 2000); 
}

random_bg_clr();

