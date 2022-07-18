// green door
greenDoor = new PANOLENS.Tile(21, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(greenDoor));
greenDoor.position.set(0, -20, -70);
greenDoor.scale.set(0.5, 1, 0.5)
greenDoor.rotation.set(-0.5, 0, 0)

// room_1
room_1 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_1));
room_1.position.set(-100, -20, 40);
room_1.scale.set(0.5, 1, 0.5)
room_1.rotation.set(0, Math.PI / 2, 0)

// room_2
room_2 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_2));
room_2.position.set(-100, -20, 10);
room_2.scale.set(0.5, 1, 0.5)
room_2.rotation.set(0, Math.PI / 2, 0)

// room_2
room_3 = new PANOLENS.Tile(15, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(room_3));
room_3.position.set(-100, -20, -15);
room_3.scale.set(0.5, 1, 0.5)
room_3.rotation.set(0, Math.PI / 2, 0)
