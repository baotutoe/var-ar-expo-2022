function handlePopupItem(showroom, url, position, rotation) {
  empty_panorama = new PANOLENS.EmptyPanorama();
  title_popup_gift_fn_cl = new PANOLENS.Tile(50, 25);
  PANOLENS.Utils.TextureLoader.load(url, setClampTexture.bind(title_popup_gift_fn_cl));
  title_popup_gift_fn_cl.position.set(position.x , position.y , position.z);
  title_popup_gift_fn_cl.rotation.set(rotation.x, rotation.y, rotation.z)
  title_popup_gift_fn_cl.addEventListener('click-entity', function() {
      empty_panorama.dispose()
  });
  empty_panorama.add(title_popup_gift_fn_cl)

  showroom.add(empty_panorama)

  return showroom;
}

function handleShowroom_1() {
  showroom_1.add(item_1);
  showroom_1.add(item_2);
  showroom_1.add(item_3);
  showroom_1.add(item_4);
  
  item_1.addEventListener("click", function() {
      showroom_1 = handlePopupItem(showroom_1, "static/images/pop_up_gift_1.png", 
      {x: 0, y: 0, z: -39}, {x: 0, y: 0, z: 0});
  });
  
  item_2.addEventListener("click",  function() {
      showroom_1 = handlePopupItem(showroom_1, "static/images/pop_up_gift_1.png", 
      {x: 0, y: 0, z: -39}, {x: 0, y: 0, z: 0});
  });
  
  item_3.addEventListener("click",  function() {
      showroom_1 = handlePopupItem(showroom_1, "static/images/pop_up_gift_1.png", 
      {x: 0, y: 0, z: 39}, {x: 0, y: -Math.PI, z: 0});
  });
  item_4.addEventListener("click",  function() {
      showroom_1 = handlePopupItem(showroom_1, "static/images/pop_up_gift_1.png", 
      {x: 0, y: 0, z: 39}, {x: 0, y: -Math.PI, z: 0});
  });  
}