# web-worker-boot-time-detector

This repository is a minial repro of behavior I observed on v8 clients (Chrome/Electron/Edge) when calling `requestAnimationFrame` from inside of a webworker.  

The time origin was relative to, what I'm guessing is the last time the computer has booted. This guess is because the value only updated itself when I rebooted my computer.

More context [here](https://github.com/matthova/web-worker-boot-time-detector/blob/master/worker.js#L1).  

Live site [here](https://matthova.github.io/web-worker-boot-time-detector/)

Please feel free to [open an issue](https://github.com/matthova/web-worker-boot-time-detector/issues) to discuss or report behavior from your devices.  
