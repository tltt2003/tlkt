function tinhDieukien() {
  var tien = document.getElementById("tien").value;
  var canvay = document.getElementById("canvay").value;
  var thoihan = document.getElementById("thoihan").value;
  var laisuat = document.getElementById("laisuat").value;

  tien = Number(tien);
  canvay = Number(canvay);
  thoihan = Number(thoihan);
  laisuat = Number(laisuat);

  var sotiencothetramoithang = tien * 0.6;
  var sotienphaitratrong1thang = (canvay * (1 + laisuat)) / thoihan;
  document.getElementById("ketqua").textContent =
    "Số tiền có thể trả mỗi tháng:  " + sotiencothetramoithang.toFixed(2);

  document.getElementById("ketqua1").textContent =
    "Số tiền phải trả mỗi tháng:  " + sotienphaitratrong1thang.toFixed(2);

  if (sotiencothetramoithang > sotienphaitratrong1thang) {
    document.getElementById("dieukien").textContent = "Bạn đã đủ điều kiện";
  } else {
    document.getElementById("dieukien").textContent = "Bạn không đủ điều kiện";
  }
}
