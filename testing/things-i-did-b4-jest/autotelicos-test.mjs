export const expect = function (val) {
    return {
      toBe(val2) {
        if (val === val2) return true;
        else return false;
      },
      notToBe(val3) {
          if (val !== val3) return true;
          else return false;
      }
    };
  };
  
  // let r = expect(2).toBe(2)
  // let s = expect(3).notToBe(3)
  // console.log(r);
  // console.log(s);