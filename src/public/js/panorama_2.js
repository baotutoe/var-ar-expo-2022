function getEntryPanorama() {

    var panorama, tiles, shadeHeight, menu_classified, menu3, menu4, menu5

    shadeHeight = 5;
    panorama = new PANOLENS.EmptyPanorama();

    menu_classified = generateMenuItem('tui_rm', 180, 125, 73, tiles, 'static/images/banner2.jpg');
    menu_classified.position.set(157, 45.5, -155);
    menu_classified.rotation.set(0, Math.PI / - 6, 0)
    panorama.add(menu_classified);

    menu_classified.addEventListener('click-entity', function() {
        myFunction2()
        click_mail_gift()
    });

    menu3 = generateMenuItem('menu3', 360, 323, 117, tiles, 'static/images/banner1.jpg');
    menu3.position.set(6, 74, -300);
    menu3.rotation.set(0, Math.PI / 220, 0)
    panorama.add(menu3);

    menu3.addEventListener('click-entity', function() {
        myFunction3()
        click_mail_gift()
    });

    menu4 = generateMenuItem('menu4', 360, 153, 87, tiles, 'static/images/banner3.jpg');
    menu4.position.set(-180, 54, -180);
    menu4.rotation.set(0, Math.PI / 6, 0)
    panorama.add(menu4);

    menu4.addEventListener('click-entity', function() {
        myFunction4()
        click_mail_gift()
    });


    return panorama;

}
function generateMenuItem(text, textLength, width, height, tiles, urlimage) {
    let item = new PANOLENS.Tile(width, height, 20, 20);
    PANOLENS.Utils.TextureLoader.load(urlimage, setClampTexture.bind(item));
    return item;
}