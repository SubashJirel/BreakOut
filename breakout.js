//board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//players
let playerWidth = 80; //500 for testing, 80 normal
let playerHeight = 10;
let playerVelocityX = 10; //move 10 pixels each time

let player = {
  x: boardWidth / 2 - playerWidth / 2,
  y: boardHeight - playerHeight - 5,
  width: playerWidth,
  height: playerHeight,
  velocityX: playerVelocityX,
};

window.onload = function () {
  board = document.getElementById('board');
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext('2d');

  //draw initial player
  context.fillStyle = 'lightGreen';
  context.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
  document.addEventListener('keydown', movePlayer);
};

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  // player
  context.fillStyle = 'lightGreen';
  context.fillRect(player.x, player.y, player.width, player.height);
}

function outOfBounds(xPosition) {
  return xPosition < 0 || xPosition + playerWidth > boardWidth;
}

function movePlayer(e) {
  if (e.code == 'ArrowLeft') {
    // player.x -= player.velocityX;
    let nextplayerX = player.x - player.velocityX;
    if (!outOfBounds(nextplayerX)) {
      player.x = nextplayerX;
    }
  } else if (e.code == 'ArrowRight') {
    let nextplayerX = player.x + player.velocityX;
    if (!outOfBounds(nextplayerX)) {
      player.x = nextplayerX;
    }
    // player.x += player.velocityX;
  }
}
