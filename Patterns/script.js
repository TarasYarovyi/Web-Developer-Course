const Module = (function () {
  let privData = 99;
  function getPrivData() {
    return privData;
  }

  function setPrivData(value) {
    privData = value;
  }

  return {
    getPrivData: getPrivData,
    setPrivData: setPrivData,
  };
})();
Module.setPrivData(88);
console.log(Module.getPrivData());
console.log(Module.privDatadata);
