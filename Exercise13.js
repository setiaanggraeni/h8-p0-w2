function xo(str) {
  var namaBaru='';
  var jumlahX='';
  var jumlahO='';
    for(var nama = 0; nama < str.length ; nama++) {
      //   console.log (str[nama]); 
        if (str [nama]=='x'){
          jumlahX++;
        }
        else {
          jumlahO++;
        }
    }
  if (jumlahX==jumlahO) {
    return true;
  }
  else {
    return false;
  }
     return namaBaru;
}
  

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
