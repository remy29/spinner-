const spinner = function(loops, timeOut) {
  const states = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  for (let i = 0; i < loops; i++) {
    for (const state of states) {
      setTimeout(() => {
        process.stdout.write(state);
      }, timeOut);
      timeOut += 200;
    }
  }
};

spinner(4, 0);



