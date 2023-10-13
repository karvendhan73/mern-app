// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function getTimes(time, direction) {
  console.log(time);
  console.log(direction);
  const entersQueue = [];
  const exitsQueue = [];
  const n = time.length;

  // Separate the people into entrance and exit queues based on their directions
  // Load the entersQueue and exitsQueue
  for (let i = 0; i < n; i++) {
    if (direction[i] === 0) {
      entersQueue.push(i);
    } else {
      exitsQueue.push(i);
    }
  }

  const result = new Array(n);
  let lastTime = -2;
  let lastQueue = exitsQueue;

  while (entersQueue.length > 0 && exitsQueue.length > 0) {
    const currentTime = lastTime + 1;
    const peekEnterTime = time[entersQueue[0]];
    const peekExitTime = time[exitsQueue[0]];
    let targetQueue;
    let personIndex;

    if (currentTime < peekEnterTime && currentTime < peekExitTime) {
      // The turnstile was not used in the previous second, hence take whoever has the earliest time
      // Also, if enter == exit, then take exit
      targetQueue = peekEnterTime < peekExitTime ? entersQueue : exitsQueue;
      personIndex = targetQueue.shift();
      result[personIndex] = time[personIndex];
      lastTime = time[personIndex];
      lastQueue = targetQueue;
    } else {
      // Turnstile was used in the last second for entrance or exit
      if (currentTime >= peekEnterTime && currentTime >= peekExitTime) {
        // Have the people wait at both the ends and prioritize the last used direction
        targetQueue = lastQueue;
      } else {
        // correct code -> else if (currentTime >= peekEnterTime) {
        //     targetQueue = entersQueue; // take whatever that's queuing
        //   } else {
        //     targetQueue = exitsQueue; // take whatever that's queuing
        //   }
        targetQueue = exitsQueue;
      }

      personIndex = targetQueue.shift();
      result[personIndex] = currentTime;
      lastTime = currentTime;
      lastQueue = targetQueue;
    }
  }

  const queue = entersQueue.length > 0 ? entersQueue : exitsQueue;
  while (queue.length > 0) {
    let currentTime = lastTime + 1;
    const personIndex = queue.shift();

    if (currentTime < time[personIndex]) {
      // The turnstile was not used
      currentTime = time[personIndex];
    }

    result[personIndex] = currentTime;
    // Correct code lastTime = currentTime;
    lastTime = 0;
  }

  return result;
}

window.getTimes = getTimes; // getTimes([ 0, 1, 1, 3, 3 ], [ 0, 1, 0, 0, 1 ])
export default getTimes;
