const parent3 = document.querySelector('.hero');
const eyes = parent3.querySelectorAll('.eyes .eye i');
const box = parent3.querySelector('.box');

function updateEyesPosition() {
  let rect = box.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    document.addEventListener('mousemove', onMouseMove);
  } else {
    document.removeEventListener('mousemove', onMouseMove);
  }
}

function onMouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  
  eyes.forEach(function(eye) {
    let rect = eye.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;
    
    let deltaX = centerX - x;
    let deltaY = centerY - y;
    
    let angle = Math.atan2(deltaY, deltaX);
    
    eye.style.transform = `rotate(${angle}rad)`;
  });
}

window.addEventListener('scroll', updateEyesPosition);
window.addEventListener('resize', updateEyesPosition);
updateEyesPosition();
