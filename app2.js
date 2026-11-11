//ฟังก์ชันแบบเดิม
//function add(a,b) {
//  return a + b;
//}
//console.log(add(5,3));

//Arrow Function
const add = (a, b) => {
  return a + b;
}
console.log(add(5,3));

//พารามิเตอร์ตัวเดียว
const double = n => n * 2;
console.log(double(4));

//ไม่มีพารามิเตอร์ แบบเขียนวงเล็บว่าง()
function hello() {
    return "สวัสดี";
}
console.log(hello());