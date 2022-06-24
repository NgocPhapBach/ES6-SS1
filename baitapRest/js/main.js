let domELE1 = () => {
    let diemToan = document.querySelector("#inpToan").value;
    let diemLy = document.querySelector("#inpLy").value;
    let diemHoa = document.querySelector("#inpHoa").value;
    document.querySelector("#tbKhoi1").innerHTML = trungBinh(Number(diemToan), Number(diemLy), Number(diemHoa));
}
document.querySelector("#btnKhoi1").onclick = domELE1;
let domELE2 = () => {
    let diemVan = document.querySelector("#inpVan").value;
    let diemSu = document.querySelector("#inpSu").value;
    let diemDia = document.querySelector("#inpDia").value;
    let diemEnglish = document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML = trungBinh(Number(diemVan), Number(diemSu), Number(diemDia), Number(diemEnglish));
}
document.querySelector("#btnKhoi2").onclick = domELE2;

let trungBinh = (...diem) => {
    let sum = 0;
    diem.map((item) => { 
        sum += item;
     })

     return sum / diem.length;
}