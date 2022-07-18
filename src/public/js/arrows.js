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
room_1.position.set(-100, -20, 40);
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
room_2.position.set(-100, -20, 10);
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
room_3.position.set(-100, -20, -15);
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
room_4.position.set(-95, -20, -41);
room_4.scale.set(0.5, 1, 0.5)
room_4.rotation.set(0, Math.PI / 2, 0)

// room_5
room_5 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_5));
room_5.position.set(-42.5, -17.5, -62.5);
room_5.scale.set(0.5, 1, 0.5)
room_5.rotation.set(0, Math.PI / 2, -Math.PI / 12)

room_6 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_61));
room_6.position.set(100, -20, 40);
room_6.scale.set(0.5, 1, 0.5)
room_6.rotation.set(0, Math.PI / 2, 0)