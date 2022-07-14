// green door
greenDoor = new PANOLENS.Tile(21, 9);
PANOLENS.Utils.TextureLoader.load("static/images/mt.png", setClampTexture.bind(greenDoor));
greenDoor.position.set(-50, -20, -75);
greenDoor.scale.set(1, 1.5, 1)
greenDoor.rotation.set(-0.5, 0, 0)
