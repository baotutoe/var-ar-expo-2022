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