var tanggal = 1;
var bulan= 12;
var tahun = 2018;
var keterangan = '';
switch(bulan) {
  case 1: keterangan = 'January';
    break;
  case 2: keterangan = 'February';
    break;
   case 3: keterangan = 'March';
     break;
  case 4: keterangan = 'April';
    break;
    case 5: keterangan = 'May';
      break;
  case 6: keterangan = 'June';
    break;
    case 7: keterangan = 'July';
      break;
  case 8: keterangan = 'August';
    break;
    case 9: keterangan = 'September';
      break;
  case 10: keterangan = 'October';
    break;
    case 11: keterangan = 'November';
      break;
  case 12: keterangan = 'Desember';
    break;
  default:  { console.log('Salah Input Bulan'); }
}
console.log (tanggal + " " + keterangan + " " + tahun);