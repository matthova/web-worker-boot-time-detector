const worker = new Worker('worker.js');

worker.onmessage = function (e) {
  let message = 'requestAnimationFrame is not supported by webworkers on this client. Try this code on Chrome.';
  if (e.data !== -1) {
    const lastBoot = new Date(Date.now() - e.data);
    message = `Device last boot: ${lastBoot.toTimeString()}`;
  }
  document.getElementById('boot-time-info').innerText = message;
};
