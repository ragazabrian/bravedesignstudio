

$(document).ready(function () {
  (function ($) {
    $('[data-lazy-src],[data-lazy-url]').lazy({
      recursive: true,
      classStatic: 'lazy',
      classWaiting: 'lazy-waiting',
      classLoading: 'lazy-loading',
      classDone: 'lazy-done',
      onBeforeLoad(element) {
      },
      onLoad(element, w, h, y, x) {
      },
      onError(element) {
      },
      onCompleted() {
      }
    });

    $('body')
      .on('beforeLoad.lazy', '.lazy', function (e) {
        console.log('beforeLoad.lazy');
      })
      .on('loaded.lazy', '.lazy', function (e, width, height, scrollY, scrollX) {
        console.log('load.lazy');
        console.log(e, width, height, scrollY, scrollX);
      });
  }(jQuery));
});
