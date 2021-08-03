/**
 * When calling requestAnimationFrame from inside a webworker, the callback
 * should contain the callback's context's time as the argument.
 * 
 * Per W3 TR animation-timing 5.3.1
 * https://www.w3.org/TR/animation-timing/#processingmodel
 * "Let time be the result of invoking the now method of the Performance
 * interface within this context."
 *
 * We are seeing the callback's context time relative to the computer's last
 * boot. (I may be off on this, perhaps it's a different but related timestamp)
 * In any case, this breaks from the W3 spec, the webworker's 
 * performance.timeOrigin, and the behavior seen when run in the UI javascript
 * thread, on non-v8 javascript engines.
 */
function getBootTime() {
  if (typeof requestAnimationFrame === 'undefined') {
    self.postMessage(-1)
    return;
  }

  requestAnimationFrame((omg) => {
    console.log('performance.now() is not being used for the callback argument', performance.now(), omg);
    self.postMessage(omg);
  });
}

getBootTime();