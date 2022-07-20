// create video TV
var playVideo = false,playVideo2 = false,playVideo2_2 = false

function play_video() {
    playVideo = !playVideo;
    if (playVideo == true)
        video.play();
    else
        video.pause();
}
function play_video2() {
    playVideo2 = !playVideo2;
    if (playVideo2 == true)
        video2.play();
    else
        video2.pause();
}
function play_video2_2() {
    playVideo2_2 = !playVideo2_2;
    if (playVideo2_2 == true)
        video2_2.play();
    else
        video2_2.pause();
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


video2 = document.getElementById('my_video2');
videoTexture2 = new THREE.VideoTexture(video2);
videoMaterial2 = new THREE.MeshBasicMaterial({
    map: videoTexture2,
    side: THREE.DoubleSide,
});
//Create screen
screen2 = new THREE.PlaneGeometry(1, 1);
videoScreen2 = new THREE.Mesh(screen2, videoMaterial2);
videoScreen2.position.set(-64, 5, 35);
videoScreen2.rotation.set(0, Math.PI / 1, 0)
videoScreen2.scale.set(55, 16, 1)
video2.muted = false;
// video.play();
//icon play
popup_play2 = new PANOLENS.EmptyPanorama();
title_popup_play2 = new PANOLENS.Tile(15, 8);
PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2));
title_popup_play2.position.set(-54, 5, 30);
title_popup_play2.rotation.set(0, Math.PI / -1, 0)
title_popup_play2.addEventListener('click-entity', function() {
    popup_play2.dispose()
        // openFullscreen()       
    play_video2()
});
popup_play2.add(title_popup_play2)

///
video2_2 = document.getElementById('my_video2_2');
videoTexture2_2 = new THREE.VideoTexture(video2_2);
videoMaterial2_2 = new THREE.MeshBasicMaterial({
    map: videoTexture2_2,
    side: THREE.DoubleSide,
});
//Create screen
screen2_2 = new THREE.PlaneGeometry(1, 1);
videoScreen2_2 = new THREE.Mesh(screen2_2, videoMaterial2_2);
videoScreen2_2.position.set(-64, 5, -35);
videoScreen2_2.rotation.set(0, Math.PI / 100, 0)
videoScreen2_2.scale.set(55, 16, 1)
video2_2.muted = false;
// video.play();
//icon play
popup_play2_2 = new PANOLENS.EmptyPanorama();
title_popup_play2_2 = new PANOLENS.Tile(15, 8);
PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2_2));
title_popup_play2_2.position.set(-54, 5, -30);
title_popup_play2_2.rotation.set(0, Math.PI / 50, 0)
title_popup_play2_2.addEventListener('click-entity', function() {
    popup_play2_2.dispose()
    // openFullscreen()       
    play_video2_2()
});
popup_play2_2.add(title_popup_play2_2)