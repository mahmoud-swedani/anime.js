// TARGETS CSS SELECTOR
// anime({
//     targets: '.squre',
//     translateX: 500
//   });

// DOM NODE / NODELIST
// var elements = document.querySelectorAll('.squre');

// anime({
//   targets: elements,
//   translateX: 700
// });

var logEl = document.querySelector('.level');

var battery = {
  charged: '0%',
  cycles: 120
}

anime({
  targets: battery,
  charged: '100%',
  cycles: 130,
  round: 1,
  easing: 'linear',
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});


// ARRAY
var el = document.querySelector('.el1');

anime({
  targets: [el, '.el2', '.el3', '.el4', '.el5'],
  translateX: 600
});


anime({
    targets: '.tags',
    left: '500px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '75%'],
    easing: 'easeInOutQuad'
  });



  anime({
    targets: '.a-1',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });



  anime({
    targets: '.a-2',
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });

  var relativeEl = document.querySelector('.a-3');
relativeEl.style.transform = 'translateX(100px)';

anime({
  targets: '.a-3',
  translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 1000
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});

anime({
  targets: '.a-4',
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

anime({
  targets: '.a-6',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})

anime({
  targets: '.a-5',
  translateX: 500,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})