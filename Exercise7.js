//1. Menyusun Barisan Bintang
for (var baris= 0; baris < 5; baris++) { 
    console.log('*');
  }
  
  //2. Menyusun Barisan Bintang Dengan Nested Looping
  var i=1;
  for (var i= 0; i < 5; i++) { 
    var baris ="";
  for (var j= 0; j < 5; j++) { 
      baris +="*";
    }
    console.log(baris);
  }
  
  //3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
  var i=1;
  for (var i= 0; i < 5; i++) { 
    var row3 ="";
  for (var j= 0; j <= i; j++) { 
      row3 +="*";
    }
    console.log(row3);
  }