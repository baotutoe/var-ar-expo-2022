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
  showroom_9.add(item_1);
  showroom_9.add(item_2);
  showroom_9.add(item_3);
  showroom_9.add(item_4);
  showroom_9.add(item_5);
  showroom_9.add(item_6);
  showroom_9.add(item_7);
  showroom_9.add(item_8);
  showroom_9.add(item_9);
  showroom_9.add(item_10);
  showroom_9.add(item_11);
  showroom_9.add(item_12);

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
  handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love. <br>Đặc điểm chính: <br>- Ngọc trai Fresh water, hình dạng tròn đều <br>- Kích thước Ngọc: 9.0 mm <br>- Cấp độ Ngọc: 3A <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh <br>- Giá niêm yết: 11.200.000đ",
  "/static/images/showrooms/items/item1_dn9.jpg", "https://www.w3schools.com/");
});

item_2.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love. <br>Đặc điểm chính: <br>- Ngọc trai Fresh water, hình dạng tròn đều <br>- Kích thước Ngọc: 9.0 mm <br>- Cấp độ Ngọc: 3A <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh <br>- Giá niêm yết: 11.200.000đ",
 "/static/images/showrooms/items/item2_dn9.jpg", "https://www.w3schools.com/");
});

item_3.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: <br>- Ngọc trai Fresh water, hình dạng tròn đều <br>- Kích thước Ngọc: 9.0 mm <br>- Cấp độ Ngọc: 3A <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ","/static/images/showrooms/items/item3_dn9.jpg", "https://www.w3schools.com/");
});
item_4.addEventListener("click",  function() {
 handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: <br>- Ngọc trai Fresh water, hình dạng tròn đều <br>- Kích thước Ngọc: 9.0 mm <br>- Cấp độ Ngọc: 3A <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ","/static/images/showrooms/items/item4_dn9.jpg", "https://www.w3schools.com/");
});
item_5.addEventListener("click",  function() {
  handlePopupItem("Ngọc trai Fresh water", "Chuỗi cổ Ngọc trai Love Đặc điểm chính: <br>- Ngọc trai Fresh water, hình dạng tròn đều <br>- Kích thước Ngọc: 9.0 mm <br>- Cấp độ Ngọc: 3A <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh Giá niêm yết: 11.200.000đ",
  "/static/images/showrooms/items/item5_dn9.jpg", "https://www.w3schools.com/");
 }); 
item_6.addEventListener("click",  function() {
  handlePopupItem("Chuỗi Ngọc trai 10 IN 1 ","<br>- Ngọc trai Freshwater, hình dạng gần tròn <br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh. Tuyển chọn và xâu chuỗi theo yêu cầu. <br>- Kích thước Ngọc: 7 <br>- 7.5mm, cấp độ 2A - 3A. <br>- Chuỗi dài 150cm, có thể mix-match thành 10 kiểu khác nhau khi đeo. Kỹ thuật thắt nút từng viên chống cọ sát và co dãn sợi dây.<br>- Bảo hành 5 năm.Giá: 13.500.000VNĐ",
  "/static/images/showrooms/items/item6_dn9.jpg", "https://www.w3schools.com/");
}); 
item_7.addEventListener("click",  function() {
  handlePopupItem("Chuỗi Ngọc trai Glory", "Ngọc trai Freshwater, hình dạng bầu dục, hình trứng và ngẫu nhiên.- Màu sắc: Phối màu độc đáo, sang trọng. Trắng, hồng cam, hồng tím và màu đen.<br>- Kích thước Ngọc: 6 - 9mm, cấp độ 3A <br>- Đính khóa Bạc 925 phủ bạch kim cao cấp, thắt nút từng viên chống cọ sát và co dãn.<br>- Bảo hành 5 năm.<br>- Giá: 16.500.000VNĐ","/static/images/showrooms/items/item7_dn9.jpg", "https://www.w3schools.com/");
}); 
item_8.addEventListener("click",  function() {
  handlePopupItem("Chuỗi Ngọc trai đôi Pearltalk:","<br>- Ngọc trai Freshwater, hình gần tròn<br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh. Tuyển chọn và xâu chuỗi theo yêu cầu.<br>- Kích thước Ngọc: 7.5 - 8.5mm, cấp độ 3A<br>- Chuỗi đeo được 5 kiểu khác nhau, phù hợp đeo nhiều loại trang phục. Kỹ thuật thắt nút từng viên chống cọ sát và co dãn sợi dây.<br>- Khóa Bạc 925 phủ bạch kim cao cấp.- Bảo hành 5 năm. Giá: 15.400.000đ","/static/images/showrooms/items/item8_dn9.jpg", "https://www.w3schools.com/");
}); 
item_9.addEventListener("click",  function() {
  handlePopupItem("Bộ Ngọc trai Unique","<br>- Ngọc trai Freshwater, hình dạng tròn đều.<br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh. Tuyển chọn và thiết kế theo yêu cầu.<br>- Kích thước Ngọc: 9 - 10mm, cấp độ 4A.<br>- Chất liệu: Vàng 18K 750 đính đá pha lê hoặc đính kim cương tấm theo sở thích.<br>- Bảo hành 5 năm.Giá: 35.200.000VNĐ",
  "/static/images/showrooms/items/item9_dn9.jpg", "https://www.w3schools.com/");
}); 
item_10.addEventListener("click",  function() {
  handlePopupItem("Bộ Ngọc trai The Fire","<br>- Ngọc trai Freshwater, hình dạng tròn đều.<br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh. Tuyển chọn và thiết kế theo yêu cầu.<br>- Kích thước Ngọc: 9 - 10mm, cấp độ 4A.<br>- Chất liệu: Vàng 18K 750 đính đá pha lê hoặc đính kim cương tấm theo sở thích.<br>- Bảo hành 5 năm.Giá: 34.300.000VNĐ",
  "/static/images/showrooms/items/item10_dn9.jpg", "https://www.w3schools.com/");
}); 
item_11.addEventListener("click",  function() {
  handlePopupItem("Bộ Ngọc trai Elizabeth","<br>- Ngọc trai Freshwater, hình dạng tròn đều.<br>- Màu sắc: Trắng, hồng cam, hồng tím, đen ánh xanh. Tuyển chọn và thiết kế theo yêu cầu.<br>- Kích thước Ngọc: 9 - 10mm, cấp độ 4A.<br>- Chất liệu: Vàng 18K 750 hoặc Vàng trắng 18K 750, đính đá pha lê hoặc đính kim cương tấm theo sở thích.<br>- Bảo hành 5 năm.Giá: 33.200.000VNĐ",
  "/static/images/showrooms/items/item11_dn9.jpg", "https://www.w3schools.com/");
}); 
item_12.addEventListener("click",  function() {
  handlePopupItem("Bộ Ngọc trai Hoa Kiều Mạch","<br>- Ngọc trai biển South sea hình dạng tròn đều.<br>- Màu sắc: Vàng ánh kim sang trọng. Tuyển chọn và thiết kế theo yêu cầu.<br>- Kích thước Ngọc: 10 - 11mm, cấp độ 3A.<br>- Chất liệu: Vàng 18K 750 đính đá pha lê hoặc đính kim cương tấm theo sở thích.<br>- Bảo hành 5 năm.Giá: 76.100.000VNĐ",
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