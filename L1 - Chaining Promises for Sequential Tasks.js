function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(taskAResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${taskAResult}`);
    }, 1500);
  });
}

function finalizeTask(taskBResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${taskBResult}`);
    }, 500);
  });
}

// Chaining the tasks
startTask()
  .then(resultA => {
    console.log(resultA);
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
