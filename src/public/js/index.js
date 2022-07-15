let panorama, panoramaDoor, showroom_1, showroom_2, showroom_3, viewer, container, infospot, camera, setcamera, hidden = false,
    hidden2 = false,
    entryPanorama2, entryPanorama, radius = 100,
    tileLength = 30,
    border = 1,
    movies = { 'All': { 'results': [] } },
    app_upload, tiles_all, panorama_upload
let popup, title_popup, popup_2, title_popup_2, popup_3, title_popup_3, popup_4, title_popup_4, popup_5, title_popup_6, popup_click, title_popup_click, popup_gift, title_popup_gift, popup_url, title_popup_url, popup_gift_fn_cl, title_popup_gift_fn_cl,
    popup_play, title_popup_play
const scene = new THREE.Scene()


let isOpenRoom = false;
let rotateAngle = Math.PI;

var bar = document.querySelector('#bar');
container = document.querySelector('#container');
container.classList.add('blur');

function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  console.log("run onProgress")
  if (percentage >= 100){
    bar.classList.add('hide');
    container.classList.remove('blur');
    console.log("container.classList: ", container.classList)
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

//Request Gygro in IOS

checkGyGroIOS();

function checkGyGroIOS() {
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    document.getElementById('nodeviceorientation').style.display = 'none'
                    init();
                    //render();
                    window.addEventListener('deviceorientation', () => {});
                    return
                } else {
                    document.getElementById('nodeviceorientation').style.display = 'block'
                }
            })
            .catch(function(error) {
                document.getElementById('nodeviceorientation').style.display = 'block'
            });
    } else {
        console.log("No IOS")
        init();
        document.getElementById('nodeviceorientation').style.display = 'none'
    }
}

const requestAccess = async(e) => {
    if (typeof( DeviceMotionEvent ) !== "undefined" && typeof DeviceOrientationEvent === 'undefined' ||
        !DeviceOrientationEvent.requestPermission) {
        console.log('no DeviceOrientationEvent.requestPermission present.')
        return false
    }

    DeviceOrientationEvent.requestPermission(e)
        .then(permissionState => {
            if (permissionState === 'granted') {
                document.getElementById('nodeviceorientation').style.display = 'none'
                init();
                //render();
                window.addEventListener('deviceorientation', () => {});
                return
            }
        })
        .catch(console.error);
}

document.getElementById('requestaccess').addEventListener('touchend', async(e) => {
    try {
        await requestAccess(e)
    } catch (e) {
        alert(e)
    }

})

// end Request Gygro 


function onImagePanoramaLoaded(event) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    if (percentage >= 100) {
        viewer.add(panorama);
        // panoramaDoor.dispose();
        viewer.setPanorama(panorama);
        if (viewer.getControlName() == 'orbit') {
            viewer.tweenControlCenter(new THREE.Vector3(1000, 1700, -9000), 1000);
        } else {
            viewer.getControl().updateAlphaOffsetAngle(rotateAngle);
        }
    }
}


function init() {

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
    videoScreen.position.set(108, 11, 0)
    videoScreen.scale.set(110, 62.5, 1)
    videoScreen.rotation.set(0, Math.PI / -2, 0)
    // panorama.add(videoScreen);
    video.muted = false;
    // video.play();
    //icon play
    popup_play = new PANOLENS.EmptyPanorama();
    title_popup_play = new PANOLENS.Tile(30, 15);
    PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play));
    title_popup_play.position.set(107, 11, 0)
    title_popup_play.rotation.set(0, Math.PI / -2, 0)
    title_popup_play.addEventListener('click-entity', function() {
        popup_play.dispose()
            // openFullscreen()       
        play_video()
    });
    popup_play.add(title_popup_play)

    // panorama.add(popup_play)
    videoScreen.addEventListener('click-entity', function() {
        if (playVideo == false) popup_play.dispose()
        else {
            popup_play = new PANOLENS.EmptyPanorama();
            title_popup_play = new PANOLENS.Tile(30, 15);
            PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play));
            title_popup_play.position.set(107, 11, 0)
            title_popup_play.rotation.set(0, Math.PI / -2, 0)
            title_popup_play.addEventListener('click-entity', function() {
                popup_play.dispose()
                play_video()
            });
            popup_play.add(title_popup_play)
            panorama.add(popup_play)
        }
        play_video()

    });

    //end
    viewer = new PANOLENS.Viewer({
        output: 'console',
        container: container,
        scene: scene,
        cameraFov: 90,
        controlButtons: ['fullscreen', 'my_video', 'setting']
    });
    entryPanorama = getEntryPanorama();
    panorama = new PANOLENS.ImagePanorama('static/images/o4Bq4iel2.jfif');
    panorama.addEventListener('progress', onProgressUpdate);

    showroom_1 = new PANOLENS.ImagePanorama('static/images/showrooms/showroom_1.jpeg');
    showroom_1.addEventListener('progress', onProgressUpdate);

    showroom_2 = new PANOLENS.ImagePanorama('static/images/showrooms/showroom_2.jpeg');
    showroom_2.addEventListener('progress', onProgressUpdate);

    showroom_3 = new PANOLENS.ImagePanorama('static/images/showrooms/showroom_3.jpeg');
    showroom_3.addEventListener('progress', onProgressUpdate);

    panoramas();
    // panorama.addEventListener('progress', onImagePanoramaLoaded);
    // panorama.load('static/images/7CKo4iel2.jfif');
    panorama.add(entryPanorama)
    panorama.add(entryPanorama2)
    viewer.add(panorama);
    viewer.add(showroom_1);

    //viewer.enableControl(1);
    //DoorStart


    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    function panoramas() {
        panoramaDoor = new PANOLENS.ImagePanorama('static/images/buildings/buildings.jpeg')
        panoramaDoor.addEventListener('progress', onProgressUpdate);
        viewer.add(panoramaDoor);
        // viewer.enableControl(1);
        viewer.setPanorama(panoramaDoor);
        // viewer.getCamera().fov = 100;

        panoramaDoor.add(greenDoor);

        panoramaDoor.addEventListener('enter-fade-start', function() {
            viewer.tweenControlCenter(new THREE.Vector3(0.4, 0, 0), 100);
        });

        greenDoor.addEventListener('click', function() {
            // panorama.load('static/images/o4Bq4iel2.jfif');
            bar.classList.remove('hide');
            container.classList.add('blur');
            isOpenRoom = true;
            rotateAngle = 0;
            viewer.setPanorama(panorama);
            panorama.add(ic_showroom_1)
            panoramaDoor.dispose();
        });

        ic_showroom_1.addEventListener('click', function() {
            // handle items of showroom_1
            bar.classList.remove('hide');
            container.classList.add('blur');
            handleShowroom_1();
            isOpenRoom = true;
            rotateAngle = 0;
            viewer.setPanorama(showroom_1);
            panorama.dispose();
        });
    }
    //DoorEnd

    function getEntryPanorama() {

        var panorama, tiles, shadeHeight, menu_classified, menu3, menu4, menu5

        shadeHeight = 5;
        panorama = new PANOLENS.EmptyPanorama();
        return panorama;

    }

}