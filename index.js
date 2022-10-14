var player = {
    left: 410,
    top: 500
}

var enemies = [
    {left: 164, top: 150},
    {left: 352, top: 150},
    {left: 540, top: 150},
    {left: 728, top: 150}
]

var misiles = []

function drawPlayer() {
    content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
    document.getElementById("player").innerHTML = content;
}

drawPlayer();

function drawEnemies() {

    output = "";

    for (let i=0; i<4 ; i++ ) {
        output += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
    }
    document.getElementById('enemies').innerHTML = output;
}

function drawMisiles() {

    content = "";
    
    for (let i = 0; i < misiles.length ; i++) {
        content += "<div class='misil' style='left:"+misiles[i].left+"px; top:"+misiles[i].top+"px;'></div>";
    }
    document.getElementById('misiles').innerHTML = content;
}

function moveEnemies() {
    for(var idx = 0; idx < enemies.length; idx++ ){
        if (enemies[idx].top < 650 ) {
            enemies[idx].top = enemies[idx].top + 1;
        } else {
            enemies[idx].top = 650;
        }

    }
}

function moveMisiles() {
    for(var idx = 0; idx < misiles.length; idx++ ){
        misiles[idx].top = misiles[idx].top - 30;
    }
}

document.onkeydown = function(e) {
    // izquierda
    if(e.keyCode == 37) {
        if ( player.left > 115 ) {
            player.left = player.left - 25;
            console.log(player.left);
        } else {
            player.left = 115;
        }
    }
    // derecha
    if(e.keyCode == 39) {
        if ( player.left < 675 ) {
            player.left = player.left + 25;
        } else {
            player.left = 715;
        }
    }
    // arriba
    if(e.keyCode == 38) {
        if ( player.top > 200 ) {
            player.top = player.top - 25;
        } else {
            player.top = 200;
        }
        player.top = player.top - 25;
    }
    // abajo
    if(e.keyCode == 40) {
        if ( player.top < 550 ) {
            player.top = player.top + 25;
        } else {
            player.top = 550;
        }
    }
    // disparar
    if (e.keyCode == 32) {
        misiles.push( { left: (player.left+52) , top: (player.top-52) })
        drawMisiles();
    }
    drawPlayer();
}

function gameLoop() {
    
    moveEnemies();
    drawEnemies();
    moveMisiles();
    drawMisiles();
    setTimeout(gameLoop, 50)
}

gameLoop();