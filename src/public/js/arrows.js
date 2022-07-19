// green door
greenDoor = new PANOLENS.Tile(21, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(greenDoor));
greenDoor.position.set(0, -20, -70);
greenDoor.scale.set(0.5, 1, 0.5)
greenDoor.rotation.set(-0.5, 0, 0)

// greenr door back
b_greenDoor = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(b_greenDoor));
b_greenDoor.position.set(0, -20, 80);
b_greenDoor.scale.set(0.5, 1, 0.5)
b_greenDoor.rotation.set(0, Math.PI, 0)

// room_1
room_1 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_1));
room_1.position.set(-100, -20, 34);
room_1.scale.set(0.5, 1, 0.5)
room_1.rotation.set(0, Math.PI / 2, 0)

b_room_1 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(b_room_1));
b_room_1.position.set(50, -15, 5);
b_room_1.scale.set(0.5, 1, 0.5)
b_room_1.rotation.set( Math.PI / 2, -5 * Math.PI / 6, Math.PI / 2)

// room_2
room_2 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_2));
room_2.position.set(-100, -20, -1);
room_2.scale.set(0.5, 1, 0.5)
room_2.rotation.set(0, Math.PI / 2, 0)

b_room_2 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(b_room_2));
b_room_2.position.set(0, -15, 50);
b_room_2.scale.set(0.5, 1, 0.5)
b_room_2.rotation.set(-Math.PI / 5, Math.PI, 0)

// room_2
room_3 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_3));
room_3.position.set(-100, -20, -38);
room_3.scale.set(0.5, 1, 0.5)
room_3.rotation.set(0, Math.PI / 2, 0)

b_room_3 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(b_room_3));
b_room_3.position.set(50, -12.5, 0);
b_room_3.scale.set(0.5, 1, 0.5)
b_room_3.rotation.set(Math.PI / 2, -Math.PI / 4, Math.PI / 2)

// room_4
room_4 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_4));
room_4.position.set(-35, -17.5, -62.5);
room_4.scale.set(0.5, 1, 0.5)
room_4.rotation.set(0, 0, 0)

// room_5
room_5 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_5));
room_5.position.set(-11, -17.5, -62.5);
room_5.scale.set(0.5, 1, 0.5)
room_5.rotation.set(0, 0, 0)

room_6 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_6));
room_6.position.set(12, -17.5, -62.5);
room_6.scale.set(0.5, 1, 0.5)
room_6.rotation.set(0, 0, 0)

  
room_7 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_7));
room_7.position.set(36, -17.5, -62.5);
room_7.scale.set(0.5, 1, 0.5)
room_7.rotation.set(0, 0, 0)

room_8 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_8));
room_8.position.set(100, -20, 22);
room_8.scale.set(0.5, 1, 0.5)
room_8.rotation.set(0, 3 * Math.PI / 2, 0)

room_9 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_9));
room_9.position.set(100, -20, -16);
room_9.scale.set(0.5, 1, 0.5)
room_9.rotation.set(0, 3 * Math.PI / 2, 0)

room_10 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_10));
room_10.position.set(90, -20, -47);
room_10.scale.set(0.5, 1, 0.5)
room_10.rotation.set(0, 3 * Math.PI / 2, 0)