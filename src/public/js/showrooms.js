var popup_item =  document.getElementById("popup_item");
var close_popup__btn = document.getElementById("close_popup__btn");
var item__img = document.getElementById("item__img");
var item__name = document.getElementById("item__name");
var item__desc = document.getElementById("item_desc");
var learn_more__link =  document.getElementById("learn_more__link");

close_popup__btn.addEventListener("click", function() {
    popup_item.style.display = "none";
});

function handlePopupItem(name, description, url, learn_more) {
    console.log('item_name: ', name);
    console.log('description: ', description);
    console.log('img_url: ', url);
    popup_item.style.display = '';
    item__img.setAttribute("src", url);
    item__desc.innerHTML = description;
    item__name.innerText = name;
    learn_more__link.addEventListener("click", function() {
        window.open(learn_more);
    });
}

function handleShowroom_1() {
  showroom_1.add(itemr1_1);
  showroom_1.add(itemr2_1);
  showroom_1.add(itemr3_1);
  showroom_1.add(itemr4_1);
  showroom_1.add(itemr5_1);
  showroom_1.add(itemr6_1);
  showroom_1.add(itemr7_1);
  showroom_1.add(itemr8_1);

  showroom_1.add(logo1);
  showroom_1.add(name1);
  showroom_1.add(videoScreen)
  showroom_1.add(popup_play)
  showroom_1.add(back)
  showroom_1.add(b_room_1)
  videoScreen.addEventListener('click-entity', function() {
    if (playVideo == false) popup_play.dispose()
    else {
        popup_play = new PANOLENS.EmptyPanorama();
        title_popup_play = new PANOLENS.Tile(15, 8);
        PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play));
        title_popup_play.position.set(-59, 5, 0);
        title_popup_play.rotation.set(0, Math.PI / 2, 0)
        title_popup_play.addEventListener('click-entity', function() {
            popup_play.dispose()
            play_video()
        });
        popup_play.add(title_popup_play)
        showroom_1.add(popup_play)
    }
    play_video()

});
  itemr1_1.addEventListener("click", function() {
     handlePopupItem("TH truemilk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.",
     "/static/images/showrooms/items/item_1.png", "https://www.w3schools.com/");
  });
  
}

function handleShowroom_2() {
  console.log('itemr2_1: ', itemr1_2)
  showroom_2.add(b_room_2);
  showroom_2.add(logo2);
  showroom_2.add(name2);
  showroom_2.add(backr2);
  showroom_2.add(itemr1_2);
  showroom_2.add(itemr2_2);
  showroom_2.add(itemr3_2);
  showroom_2.add(itemr4_2);
  showroom_2.add(itemr5_2);
  showroom_2.add(itemr6_2);
  showroom_2.add(itemr7_2);
  showroom_2.add(itemr8_2);
  showroom_2.add(itemr9_2);
}

function handleShowroom_3() {
  showroom_3.add(b_room_3);
  showroom_3.add(logo3);
  showroom_3.add(name3);
  showroom_3.add(backr3);
  showroom_3.add(videoScreen2)
  showroom_3.add(popup_play2)
  videoScreen2.addEventListener('click-entity', function() {
    if (playVideo2 == false) {
      popup_play2.dispose()
    }
    else {
      popup_play2 = new PANOLENS.EmptyPanorama();
      title_popup_play2 = new PANOLENS.Tile(15, 8);
        PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2));
        title_popup_play2.position.set(-54, 5, 30);
        title_popup_play2.rotation.set(0, Math.PI / -1, 0)
        title_popup_play2.addEventListener('click-entity', function() {
          popup_play2.dispose()
            play_video2()
        });
        popup_play2.add(title_popup_play2)
        showroom_3.add(popup_play2)
    }
    play_video2()
    // if (playVideo2_2 == true) {
    //   play_video2_2()
    //   popup_play2_2 = new PANOLENS.EmptyPanorama();
    //   title_popup_play2_2 = new PANOLENS.Tile(15, 8);
    //   PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2_2));
    //   title_popup_play2_2.position.set(-54, 5, -30);
    //   title_popup_play2_2.rotation.set(0, Math.PI / 50, 0)
    //   title_popup_play2_2.addEventListener('click-entity', function() {
    //     popup_play2_2.dispose()
    //       play_video2_2()
    //   });
    //   popup_play2_2.add(title_popup_play2_2)
    //   showroom_3.add(popup_play2_2)
    // }

});
showroom_3.add(videoScreen2_2)
showroom_3.add(popup_play2_2)
videoScreen2_2.addEventListener('click-entity', function() {
  if (playVideo2_2 == false) {
    popup_play2_2.dispose()
  }
  else {
    popup_play2_2 = new PANOLENS.EmptyPanorama();
    title_popup_play2_2 = new PANOLENS.Tile(15, 8);
      PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2_2));
      title_popup_play2_2.position.set(-54, 5, -30);
      title_popup_play2_2.rotation.set(0, Math.PI / 50, 0)
      title_popup_play2_2.addEventListener('click-entity', function() {
        popup_play2_2.dispose()
          play_video2_2()
      });
      popup_play2_2.add(title_popup_play2_2)
      showroom_3.add(popup_play2_2)
  }
  play_video2_2()
  // if (playVideo2 == true) {
  //   play_video2()
  //   popup_play2 = new PANOLENS.EmptyPanorama();
  //     title_popup_play2 = new PANOLENS.Tile(15, 8);
  //       PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2));
  //       title_popup_play2.position.set(-54, 5, 30);
  //       title_popup_play2.rotation.set(0, Math.PI / -1, 0)
  //       title_popup_play2.addEventListener('click-entity', function() {
  //         popup_play2.dispose()
  //           play_video2()
  //       });
  //       popup_play2.add(title_popup_play2)
  //       showroom_3.add(popup_play2)
  // }
});
}

function handleShowroom_4() {
  showroom_4.add(logo4);
  showroom_4.add(name4);
  showroom_4.add(videoScreen)
  showroom_4.add(popup_play)
  showroom_4.add(backr4);
  showroom_4.add(b_room_4);
}

function handleShowroom_5() {
  showroom_5.add(logo5);
  showroom_5.add(name5);
  showroom_5.add(backr5);
  showroom_5.add(b_room_5);
}

function handleShowroom_6() {
  showroom_6.add(backr6);
  showroom_6.add(logoname6);
  showroom_6.add(b_room_6);
}

function handleShowroom_7() {
  showroom_7.add(backr7);
  showroom_7.add(b_room_7);
  showroom_7.add(logo7);
  showroom_7.add(name7);
  showroom_7.add(videoScreen)
  showroom_7.add(popup_play)
}

//phong 10
function handleShowroom_8() {
  showroom_8.add(backr8);
  showroom_8.add(b_room_8);
  showroom_8.add(logo10);
  showroom_8.add(name10);
}

function handleShowroom_9() {
  showroom_9.add(itemr1_9);
  showroom_9.add(itemr2_9);
  showroom_9.add(itemr3_9);
  showroom_9.add(itemr4_9);
  showroom_9.add(itemr5_9);
  showroom_9.add(itemr6_9);
  showroom_9.add(itemr7_9);
  showroom_9.add(itemr8_9);
  showroom_9.add(itemr9_9);
  showroom_9.add(itemr10_9);
  showroom_9.add(itemr11_9);
  showroom_9.add(itemr12_9);

  showroom_9.add(b_room_9);
  showroom_9.add(logo9);
  showroom_9.add(name9);
  showroom_9.add(backr9);
  showroom_9.add(videoScreen2)
  showroom_9.add(popup_play2)
  videoScreen2.addEventListener('click-entity', function() {
    if (playVideo2 == false) {
      popup_play2.dispose()
    }
    else {
      popup_play2 = new PANOLENS.EmptyPanorama();
      title_popup_play2 = new PANOLENS.Tile(15, 8);
        PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2));
        title_popup_play2.position.set(-54, 5, 30);
        title_popup_play2.rotation.set(0, Math.PI / -1, 0)
        title_popup_play2.addEventListener('click-entity', function() {
          popup_play2.dispose()
            play_video2()
        });
        popup_play2.add(title_popup_play2)
        showroom_9.add(popup_play2)
    }
    play_video2()


});
showroom_9.add(videoScreen2_2)
showroom_9.add(popup_play2_2)
videoScreen2_2.addEventListener('click-entity', function() {
  if (playVideo2_2 == false) {
    popup_play2_2.dispose()
  }
  else {
    popup_play2_2 = new PANOLENS.EmptyPanorama();
    title_popup_play2_2 = new PANOLENS.Tile(15, 8);
      PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2_2));
      title_popup_play2_2.position.set(-54, 5, -30);
      title_popup_play2_2.rotation.set(0, Math.PI / 50, 0)
      title_popup_play2_2.addEventListener('click-entity', function() {
        popup_play2_2.dispose()
          play_video2_2()
      });
      popup_play2_2.add(title_popup_play2_2)
      showroom_9.add(popup_play2_2)
  }
  play_video2_2()

});
itemr1_9.addEventListener("click", function() {
  handlePopupItem("Ng???c trai Fresh water", "Chu???i c??? Ng???c trai Love. <br>?????c ??i???m ch??nh: <br>- Ng???c trai Fresh water, h??nh d???ng tr??n ?????u <br>- K??ch th?????c Ng???c: 9.0 mm <br>- C???p ????? Ng???c: 3A <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh <br>- Gi?? ni??m y???t: 11.200.000??",
  "/static/images/showrooms/items/item1_dn9.jpg", "https://www.w3schools.com/");
});

itemr2_9.addEventListener("click",  function() {
 handlePopupItem("Ng???c trai Fresh water", "Chu???i c??? Ng???c trai Love. <br>?????c ??i???m ch??nh: <br>- Ng???c trai Fresh water, h??nh d???ng tr??n ?????u <br>- K??ch th?????c Ng???c: 9.0 mm <br>- C???p ????? Ng???c: 3A <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh <br>- Gi?? ni??m y???t: 11.200.000??",
 "/static/images/showrooms/items/item2_dn9.jpg", "https://www.w3schools.com/");
});

itemr3_9.addEventListener("click",  function() {
 handlePopupItem("Ng???c trai Fresh water", "Chu???i c??? Ng???c trai Love <br>?????c ??i???m ch??nh: <br>- Ng???c trai Fresh water, h??nh d???ng tr??n ?????u <br>- K??ch th?????c Ng???c: 9.0 mm <br>- C???p ????? Ng???c: 3A <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh Gi?? ni??m y???t: 11.200.000??","/static/images/showrooms/items/item3_dn9.jpg", "https://www.w3schools.com/");
});
itemr4_9.addEventListener("click",  function() {
 handlePopupItem("Ng???c trai Fresh water", "Chu???i c??? Ng???c trai Love <br>?????c ??i???m ch??nh: <br>- Ng???c trai Fresh water, h??nh d???ng tr??n ?????u <br>- K??ch th?????c Ng???c: 9.0 mm <br>- C???p ????? Ng???c: 3A <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh Gi?? ni??m y???t: 11.200.000??","/static/images/showrooms/items/item4_dn9.jpg", "https://www.w3schools.com/");
});
itemr5_9.addEventListener("click",  function() {
  handlePopupItem("Ng???c trai Fresh water", "Chu???i c??? Ng???c trai Love <br>?????c ??i???m ch??nh: <br>- Ng???c trai Fresh water, h??nh d???ng tr??n ?????u <br>- K??ch th?????c Ng???c: 9.0 mm <br>- C???p ????? Ng???c: 3A <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh Gi?? ni??m y???t: 11.200.000??",
  "/static/images/showrooms/items/item5_dn9.jpg", "https://www.w3schools.com/");
 }); 
 itemr6_9.addEventListener("click",  function() {
  handlePopupItem("Chu???i Ng???c trai 10 IN 1","Ng???c trai Freshwater, h??nh d???ng g???n tr??n <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh. Tuy???n ch???n v?? x??u chu???i theo y??u c???u. <br>- K??ch th?????c Ng???c: 7 <br>- 7.5mm, c???p ????? 2A - 3A. <br>- Chu???i d??i 150cm, c?? th??? mix-match th??nh 10 ki???u kh??c nhau khi ??eo. K??? thu???t th???t n??t t???ng vi??n ch???ng c??? s??t v?? co d??n s???i d??y.<br>- B???o h??nh 5 n??m.Gi??: 13.500.000VN??",
  "/static/images/showrooms/items/item6_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr7_9.addEventListener("click",  function() {
  handlePopupItem("Chu???i Ng???c trai Glory", "Ng???c trai Freshwater, h??nh d???ng b???u d???c, h??nh tr???ng v?? ng???u nhi??n. <br>- M??u s???c: Ph???i m??u ?????c ????o, sang tr???ng. Tr???ng, h???ng cam, h???ng t??m v?? m??u ??en.<br>- K??ch th?????c Ng???c: 6 - 9mm, c???p ????? 3A <br>- ????nh kh??a B???c 925 ph??? b???ch kim cao c???p, th???t n??t t???ng vi??n ch???ng c??? s??t v?? co d??n.<br>- B???o h??nh 5 n??m.<br>- Gi??: 16.500.000VN??","/static/images/showrooms/items/item7_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr8_9.addEventListener("click",  function() {
  handlePopupItem("Chu???i Ng???c trai ????i Pearltalk:","<br>- Ng???c trai Freshwater, h??nh g???n tr??n. <br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh. Tuy???n ch???n v?? x??u chu???i theo y??u c???u.<br>- K??ch th?????c Ng???c: 7.5 - 8.5mm, c???p ????? 3A<br>- Chu???i ??eo ???????c 5 ki???u kh??c nhau, ph?? h???p ??eo nhi???u lo???i trang ph???c. K??? thu???t th???t n??t t???ng vi??n ch???ng c??? s??t v?? co d??n s???i d??y.<br>- Kh??a B???c 925 ph??? b???ch kim cao c???p.- B???o h??nh 5 n??m. Gi??: 15.400.000??","/static/images/showrooms/items/item8_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr9_9.addEventListener("click",  function() {
  handlePopupItem("B??? Ng???c trai Unique","<br>- Ng???c trai Freshwater, h??nh d???ng tr??n ?????u.<br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh. Tuy???n ch???n v?? thi???t k??? theo y??u c???u.<br>- K??ch th?????c Ng???c: 9 - 10mm, c???p ????? 4A.<br>- Ch???t li???u: V??ng 18K 750 ????nh ???? pha l?? ho???c ????nh kim c????ng t???m theo s??? th??ch.<br>- B???o h??nh 5 n??m.Gi??: 35.200.000VN??",
  "/static/images/showrooms/items/item9_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr10_9.addEventListener("click",  function() {
  handlePopupItem("B??? Ng???c trai The Fire","<br>- Ng???c trai Freshwater, h??nh d???ng tr??n ?????u.<br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh. Tuy???n ch???n v?? thi???t k??? theo y??u c???u.<br>- K??ch th?????c Ng???c: 9 - 10mm, c???p ????? 4A.<br>- Ch???t li???u: V??ng 18K 750 ????nh ???? pha l?? ho???c ????nh kim c????ng t???m theo s??? th??ch.<br>- B???o h??nh 5 n??m.Gi??: 34.300.000VN??",
  "/static/images/showrooms/items/item10_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr11_9.addEventListener("click",  function() {
  handlePopupItem("B??? Ng???c trai Elizabeth","<br>- Ng???c trai Freshwater, h??nh d???ng tr??n ?????u.<br>- M??u s???c: Tr???ng, h???ng cam, h???ng t??m, ??en ??nh xanh. Tuy???n ch???n v?? thi???t k??? theo y??u c???u.<br>- K??ch th?????c Ng???c: 9 - 10mm, c???p ????? 4A.<br>- Ch???t li???u: V??ng 18K 750 ho???c V??ng tr???ng 18K 750, ????nh ???? pha l?? ho???c ????nh kim c????ng t???m theo s??? th??ch.<br>- B???o h??nh 5 n??m.Gi??: 33.200.000VN??",
  "/static/images/showrooms/items/item11_dn9.jpg", "https://www.w3schools.com/");
}); 
itemr12_9.addEventListener("click",  function() {
  handlePopupItem("B??? Ng???c trai Hoa Ki???u M???ch","<br>- Ng???c trai bi???n South sea h??nh d???ng tr??n ?????u.<br>- M??u s???c: V??ng ??nh kim sang tr???ng. Tuy???n ch???n v?? thi???t k??? theo y??u c???u.<br>- K??ch th?????c Ng???c: 10 - 11mm, c???p ????? 3A.<br>- Ch???t li???u: V??ng 18K 750 ????nh ???? pha l?? ho???c ????nh kim c????ng t???m theo s??? th??ch.<br>- B???o h??nh 5 n??m.Gi??: 76.100.000VN??",
  "/static/images/showrooms/items/item12_dn9.jpg", "https://www.w3schools.com/");
}); 
}
//phong 8
function handleShowroom_10() {
  showroom_10.add(backr10);
  showroom_10.add(b_room_10);

  showroom_10.add(logo8);
  showroom_10.add(name8);
  showroom_10.add(videoScreen2)
  showroom_10.add(popup_play2)
  videoScreen2.addEventListener('click-entity', function() {
    if (playVideo2 == false) {
      popup_play2.dispose()
    }
    else {
      popup_play2 = new PANOLENS.EmptyPanorama();
      title_popup_play2 = new PANOLENS.Tile(15, 8);
        PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2));
        title_popup_play2.position.set(-54, 5, 30);
        title_popup_play2.rotation.set(0, Math.PI / -1, 0)
        title_popup_play2.addEventListener('click-entity', function() {
          popup_play2.dispose()
            play_video2()
        });
        popup_play2.add(title_popup_play2)
        showroom_9.add(popup_play2)
    }
    play_video2()


});
showroom_10.add(videoScreen2_2)
showroom_10.add(popup_play2_2)
videoScreen2_2.addEventListener('click-entity', function() {
  if (playVideo2_2 == false) {
    popup_play2_2.dispose()
  }
  else {
    popup_play2_2 = new PANOLENS.EmptyPanorama();
    title_popup_play2_2 = new PANOLENS.Tile(15, 8);
      PANOLENS.Utils.TextureLoader.load('static/images/play.png', setClampTexture.bind(title_popup_play2_2));
      title_popup_play2_2.position.set(-54, 5, -30);
      title_popup_play2_2.rotation.set(0, Math.PI / 50, 0)
      title_popup_play2_2.addEventListener('click-entity', function() {
        popup_play2_2.dispose()
          play_video2_2()
      });
      popup_play2_2.add(title_popup_play2_2)
      showroom_10.add(popup_play2_2)
  }
  play_video2_2()

});
}