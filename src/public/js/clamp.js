function setClampTexture(texture) {
    var callback;
    if (arguments.length > 1) {
        console.log("arguments: ", arguments)
        callback = arguments[0];
        texture = arguments[1];
        callback();
    }
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.material.visible = true;
    this.material.map = texture;
    this.material.needsUpdate = true;
}