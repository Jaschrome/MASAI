function createFunctionList() {
  let functions = [];
  // Fix: Changed 'var i' to 'let i' to create a new block-scoped 'i' for each loop iteration,
  // each function closes over its unique index value.
  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }
  return functions;
}

const functionList = createFunctionList();

functionList[0]();
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();
