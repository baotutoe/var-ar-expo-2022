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
    item__desc.innerText = description;
    item__name.innerText = name;
    learn_more__link.addEventListener("click", function() {
        window.open(learn_more);
    });
}

function handleShowroom_1() {
  showroom_1.add(item_1);
  showroom_1.add(item_2);
  showroom_1.add(item_3);
  showroom_1.add(item_4);
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
  item_1.addEventListener("click", function() {
     handlePopupItem("TH truemilk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.",
     "/static/images/showrooms/items/item_1.png", "https://www.w3schools.com/");
  });
  
  item_2.addEventListener("click",  function() {
    handlePopupItem("TH truemilk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.",
    "/static/images/showrooms/items/item_2.png", "https://www.w3schools.com/");
  });
  
  item_3.addEventListener("click",  function() {
    handlePopupItem("TH truemilk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.",
    "/static/images/showrooms/items/item_3.png", "https://www.w3schools.com/");
  });
  item_4.addEventListener("click",  function() {
    handlePopupItem("TH truemilk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.",
    "/static/images/showrooms/items/item_3.png", "https://www.w3schools.com/");
  });  
}

function handleShowroom_2() {
  showroom_2.add(b_room_2);
  showroom_2.add(logo2);
  showroom_2.add(name2);
  showroom_2.add(backr2);

}

function handleShowroom_3() {
  showroom_3.add(b_room_3);
  showroom_3.add(logo3);
  showroom_3.add(name3);
  showroom_3.add(backr2);
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
  showroom_4.add(b_room_4);
}

function handleShowroom_5() {
  showroom_5.add(b_room_5);
}

function handleShowroom_6() {
  showroom_6.add(b_room_6);
}

function handleShowroom_7() {
  showroom_7.add(b_room_7);
}

function handleShowroom_8() {
  showroom_8.add(b_room_8);
}

function handleShowroom_9() {
  showroom_9.add(item_1);
  showroom_9.add(item_2);
  showroom_9.add(item_3);
  showroom_9.add(item_4);
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
item_1.addEventListener("click", function() {
  handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: <br> - Ngọc trai Fresh water, hình dạng tròn đều - Kích thước Ngọc: 9.0 mm - Cấp độ Ngọc: 3A - Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ",
  "/static/images/showrooms/items/item1_dn9.jpg", "https://www.w3schools.com/");
});

item_2.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: - Ngọc trai Fresh water, hình dạng tròn đều - Kích thước Ngọc: 9.0 mm - Cấp độ Ngọc: 3A - Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ",
 "/static/images/showrooms/items/item2_dn9.jpg", "https://www.w3schools.com/");
});

item_3.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: - Ngọc trai Fresh water, hình dạng tròn đều - Kích thước Ngọc: 9.0 mm - Cấp độ Ngọc: 3A - Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ",
 "/static/images/showrooms/items/item3_dn9.jpg", "https://www.w3schools.com/");
});
item_4.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: - Ngọc trai Fresh water, hình dạng tròn đều - Kích thước Ngọc: 9.0 mm - Cấp độ Ngọc: 3A - Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ",
 "/static/images/showrooms/items/item4_dn9.jpg", "https://www.w3schools.com/");
});  
}

function handleShowroom_10() {
  showroom_10.add(b_room_10);
}