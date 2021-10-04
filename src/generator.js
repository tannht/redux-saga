// console.log("Learning Generator Function");
// function* helloGeneratorFunction() {
//   yield 2020;
//   //Dừng tại KQ1 - nhưng sẽ chạy tiếp nếu thực hiện gọi lại lần nữa và trả về KQ2

//   return "Tự học lập trình Redux Saga"; //KQ2
// }

// var runFunc = helloGeneratorFunction(); //nếu ko gán biến hàm sẽ tạo thêm 1 iterator mới

// console.log("Ket qua", runFunc.next());
// console.log("Ket qua 2", runFunc.next());
// console.log("Ket qua 3", runFunc.next());

// Generator Function trả về Iterator ( Array các giá trị)
// KQ1: value: 2020, done: false}done: falsevalue: 2020[[Prototype]]: Object
// KQ2: {value: 'Tự học lập trình Redux Saga', done: true}
// KQ3: {value: undefined, done: true}

// console.log("Ket qua", helloGeneratorFunction().next());
// console.log("Ket qua", helloGeneratorFunction().next());
// console.log("Ket qua", helloGeneratorFunction().next());