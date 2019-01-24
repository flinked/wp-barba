import PageTransition from 'public/PageTransition'


window.flinked = {}

function init() {

   /**
   * look slider
   */

  let pageTransition = new PageTransition();
  pageTransition.init();

  window.flinked.reinit()
}

window.flinked.reinit = function() {
  console.log('re-init')
}


window.onload = init;