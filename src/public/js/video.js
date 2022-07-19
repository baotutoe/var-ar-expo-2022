// create video TV
var playVideo = false;

function play_video() {
    playVideo = !playVideo;
    if (playVideo == true)
        video.play();
    else
        video.pause();
}
const video = document.getElementById('my_video');

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
}
const videoTexture = new THREE.VideoTexture(video);
const videoMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.DoubleSide,
});

//Create screen
const screen = new THREE.PlaneGeometry(1, 1);
const videoScreen = new THREE.Mesh(screen, videoMaterial);
videoScreen.position.set(-60, 4.5, -0.8);
videoScreen.rotation.set(0, Math.PI / 2, 0)
videoScreen.scale.set(70, 30.5, 1)
// panorama.add(videoScreen);
video.muted = false;
// video.play();
//icon play
popup_play = new PANOLENS.EmptyPanorama();
title_popup_play = new PANOLENS.Tile(15, 8);
PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play));
title_popup_play.position.set(-59, 5, 0);
title_popup_play.rotation.set(0, Math.PI / 2, 0)
title_popup_play.addEventListener('click-entity', function() {
    popup_play.dispose()
        // openFullscreen()       
    play_video()
});
popup_play.add(title_popup_play)

// panorama.add(popup_play)
