console.log ('GANJIL GENAP')
for (var nilai = 1; nilai <= 100; nilai++) {
  if (nilai%2==0){
    console.log(nilai + ' GENAP');
  }
  else {
    console.log(nilai + ' GANJIL');
  }
}

console.log ('PERTAMBAHAN 2')
for (var nilai = 1; nilai <= 100; nilai+=2) {
  if (nilai%3==0){
    console.log(nilai + ' Kelipatan 3');
  }
  else {
    console.log(nilai + ' ');
  }
}

console.log ('PERTAMBAHAN 5')
for (var nilai = 1; nilai <= 100; nilai+=5) {
  if (nilai%6==0){
    console.log(nilai + ' Kelipatan 6');
  }
  else {
    console.log(nilai + ' ');
  }
}

console.log ('PERTAMBAHAN 9')
for (var nilai = 1; nilai <= 100; nilai+=9) {
  if (nilai%10==0){
    console.log(nilai + ' Kelipatan 10');
  }
  else {
    console.log(nilai + ' ');
  }
}