document.addEventListener('DOMContentLoaded', function() {

  var state = 0,
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

    if (state == 0) {
      r1.classList.add('active-row');
      console.log('0');

      state++;

    } else if (state == 1) {
      r1.classList.remove('active-row');
      r2.classList.add('active-row');
      console.log('1');

      state++;

    } else if (state == 2) {
      r2.classList.remove('active-row');
      r3.classList.add('active-row');
      console.log('2');

      state++;

    } else if (state == 3) {
      r3.classList.remove('active-row');
      console.log('3');

      state = 0;
    } else {
      console.log("another state");
      return;
    }
  }


  setInterval(animateKeyboard, 1000);
  animateKeyboard();

})
