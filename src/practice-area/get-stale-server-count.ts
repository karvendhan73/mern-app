// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function getStaleServerCount(n, logData, queries, timeInterval) {
  console.log(n);
  console.log(logData);
  console.log(queries);
  console.log(timeInterval);

  // First sort the log data by time
  logData.sort((a, b) => {
    return a[1] - b[1];
  });

  const queryCount = queries.length;
  const result = [];
  const logLength = logData.length;

  // Store the queries with their original indices
  const indexedQueries = queries.map((value, index) => [value, index]);
  // Sort the queries by time
  indexedQueries.sort((a, b) => {
    return a[0] - b[0];
  });

  // Track the active servers
  const activeServers = {};
  let rightPointer = 0;
  let leftPointer = 0;

  for (let i = 0; i < queryCount; i++) {
    const currentEnd = indexedQueries[i][0];
    const currentQueryIndex = indexedQueries[i][1];
    const currentStart = currentEnd - timeInterval;

    // Add servers to the activeServers if their time is within the query's time interval
    while (rightPointer < logLength && logData[rightPointer][1] <= currentEnd) {
      const currentServer = logData[rightPointer][0];
      if (!activeServers[currentServer]) {
        // If the currentServer is not available in activeServers, then initialize it
        activeServers[currentServer] = 0;
      }
      activeServers[currentServer] = activeServers[currentServer] + 1;
      // Increment the right pointer
      rightPointer++;
    }

    // Remove servers from the activeServers if their time is outside the query's time interval
    while (leftPointer < logLength && logData[leftPointer][1] < currentStart) {
      const currentServer = logData[leftPointer][0];
      if (activeServers[currentServer]) {
        activeServers[currentServer] = activeServers[currentServer] - 1;
        if (activeServers[currentServer] === 0) {
          // Remove current server from activeServers
          delete activeServers[currentServer];
        }
      }
      // Increment the left pointer
      leftPointer++;
    }

    // Calculate the number of stale servers for this query
    result[currentQueryIndex] = n - Object.keys(activeServers).length;
  }

  // Return the final result
  return result;
}

window.getStaleServerCount = getStaleServerCount; // getStaleServerCount(6, [ [ 3, 2 ], [ 4, 3 ], [ 2, 6 ], [ 6, 3 ] ], [ 3, 2, 6 ], 2)
export default getStaleServerCount;
