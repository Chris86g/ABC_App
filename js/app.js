document.addEventListener('DOMContentLoaded', function() {

  var rowState = 0,
    tileState = 0,
    keyState = 0,
    body = document.querySelector('body'),
    keyboard = document.querySelector('.keyboard'),
    r1 = document.querySelector('.r1'),
    r2 = document.querySelector('.r2'),
    r3 = document.querySelector('.r3'),
    t1 = document.querySelector('.t1'),
    t2 = document.querySelector('.t2'),
    t3 = document.querySelector('.t3'),
    t4 = document.querySelector('.t4'),
    t5 = document.querySelector('.t5'),
    t6 = document.querySelector('.t6'),
    t7 = document.querySelector('.t7'),
    t8 = document.querySelector('.t8'),
    t9 = document.querySelector('.t9'),
    k1 = document.querySelector('.k1');

  function animateKeyboard(e) {

    if (rowState == 0) {
      r1.classList.add('active-row');
      console.log('0');
      body.addEventListener("mousedown",function() {
        console.log("click");
        if (tileState == 0) {
          t1.classList.add('active-tile');
          console.log('t0');
          tileState++;

        } else if (tileState == 1) {
          t1.classList.remove('active-tile');
          t2.classList.add('active-tile');
          console.log('t1');
          tileState++;

        } else if (tileState == 2) {
          t2.classList.remove('active-tile');
          t3.classList.add('active-tile');
          console.log('t2');
          tileState++;

        } else if (tileState == 3) {
          t3.classList.remove('active-tile');
          console.log('t3');
          tileState = 0;

        } else {
          return;
        }
      });
      if (true) {
        rowState++;
      } else {
        return;
      }

    } else if (rowState == 1) {
      r1.classList.remove('active-row');
      r2.classList.add('active-row');
      console.log('1');

      rowState++;

    } else if (rowState == 2) {
      r2.classList.remove('active-row');
      r3.classList.add('active-row');
      console.log('2');

      rowState++;

    } else if (rowState == 3) {
      r3.classList.remove('active-row');
      console.log('3');

      rowState = 0;
    } else {
      console.log("another state");
      return;
    }
  }

  //setInterval(animateKeyboard, 1000);
  animateKeyboard();
})
