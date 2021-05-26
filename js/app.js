// Anim click

window.addEventListener('click', (e) => {
  // console.log(e);

  const rond = document.createElement('div');
  rond.className = 'clickAnim';
  rond.style.top = `${e.pageY - 35}px`;
  rond.style.left = `${e.pageX - 35}px`;
  document.body.appendChild(rond);

  setTimeout(() => {
    rond.remove();
  }, 1500)
})