// green door
greenDoor = new PANOLENS.Tile(21, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(greenDoor));
greenDoor.position.set(-50, -20, -75);
greenDoor.scale.set(1, 1.5, 1)
greenDoor.rotation.set(-0.5, 0, 0)

// room_1
room_1 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_1));
room_1.position.set(-90, -20, -75);
room_1.scale.set(1, 1.5, 1)
room_1.rotation.set(0, Math.PI / 6, 0)

// room_2
room_2 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_2));
room_2.position.set(100, -20, -75);
room_2.scale.set(1, 1.5, 1)
room_2.rotation.set(0, Math.PI / - 6, 0)

// room_2
room_3 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_3));
room_3.position.set(0, -15, -75);
room_3.scale.set(1, 1.5, 1)
menu3.rotation.set(0, Math.PI / 220, 0)
