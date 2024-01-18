const video = document.getElementById("myVideo");

video.onplay = () => {
    video.controls = "";
};

video.addEventListener("ended", () => {
    window.location.replace("https://blazedeveloper.com");
});
