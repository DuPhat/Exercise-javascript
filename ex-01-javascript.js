let num = 19;
KiemTraSoChanLe(num);

function KiemTraSoChanLe(num) {
  let r = num % 2;
  if (r === 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẽ");
  }
}
