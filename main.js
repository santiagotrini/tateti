let c = 0;
let a = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

let board = document.querySelector('.board');
for (let i = 0; i < 9; i++) {
  let btn = document.createElement('button');
  btn.onclick = handleClick;
  btn.dataset.i = i;
  board.append(btn);
}

function handleClick(e) {
  let btn = e.target;
  let l = c & 1 ? 'O' : 'X';
  btn.textContent = l;
  btn.disabled = true;
  a[btn.dataset.i] = l;
  c++;
  let winner = checkWinner();
  if (winner) 
    document.querySelector('h1').textContent = `Ganó ${winner}! 😎`;
}

function checkWinner() {
  if (a[0] == a[4] && a[4] == a[8] && a[4]) return a[4];
  if (a[2] == a[4] && a[4] == a[6] && a[4]) return a[4];
  for (let i = 0; i < 3; i++) {
    if (a[i*3] == a[i*3+1] && a[i*3+1] == a[i*3+2] && a[i*3]) return a[i*3];
    if (  a[i] == a[i+3]   &&   a[i+3] == a[i+6]   && a[i])   return a[i];
  }
  return false;
}

function reset() {
  let btns = document.querySelectorAll('.board button');
  for (let btn of btns) {
    btn.disabled = false;
    btn.textContent = '';
  }
  document.querySelector('h1').textContent = `Tateti`;
  a = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  c = 0;
}