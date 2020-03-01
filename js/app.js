function draw() {
    let size = prompt("Nhập bề rộng của trái tim");
    heartShape(size);
}


function heartShape(width) {
    let line = "*";
    let shape = "";
    let indexSpace = width/2;
    for (let index = 1; index < width/2; index += 3) {
        shape += line.repeat(index) + "<span>" + line.repeat(indexSpace) + "</span>" +
                 line.repeat(index) + "<br>";
        indexSpace -= 3;
    }
    for (let index = width; index >= 0; index -= 3) {
        shape += line.repeat(index) + "<br>";
    }
    document.getElementById('shape').innerHTML = shape;
}