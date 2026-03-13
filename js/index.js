// const number = parseInt(prompt("enter in between 1-7"));
// switch(number){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default :
//         console.log("not in range");
//         break;
// }

// for(let a =1;a<=30;a++){
//     if(a%3==0 && a%5==0){
//         console.log("fizz buzz")
//     }
//     else if(a%3==0){
//         console.log("fizz")
//     }
//     else if(a%5==0){
//         console.log("buzz")
//     }
//     else{
//         console.log(a)
//     }
// }


// const arr = [12,"adam",true,null]

// for(let value of arr){
//     console.log(value)
// }
// for(let index in arr){
//     console.log(index)
// }
// const obj = {
//     name:"adam",
//     age:"1000",
//     city:"mars"
// }


// for(let key in obj){
//     console.log(key,obj[key])
// }
// const a = 10;
// function add(){
//     const b=10;
//     const output = a+b
//     console.log(output)
// }
// add()

// function add(a,b){
//     return a+b
// }
// console.log(add(1,2))

// const add = function(a,b){
//     return a+b
// }
// console.log(add(1,2))

// const addition =(a,b)=>{
//     return a+b
// }
// console.log(addition(1,2))

// function addd(a,b){
//     return a+b
// }(1,2)


const arr = [1,2,3,4,5];
// for(let i = 0;i<arr.length;i++){
//     console.log(i)
// }
// arr.map((value)=>{
//     console.log(value)
// })
// arr.filter((value)=>{
//     if(value%2==0){
//         console.log(value)
//     }
// })

// const output = arr.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(output)

// 1. Validate order structure
function validateOrder(order) {
  return new Promise((resolve, reject) => {
    if (!order.customerId) {
      reject(new Error('Customer ID is required'));
    } else if (!order.items || order.items.length === 0) {
      reject(new Error('Order must contain items'));
    } else {
      console.log('✅ Order validated');
      resolve(order);
    }
  });
}

// 2. Check inventory availability
function checkInventory(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('📦 Inventory checked');
      order.inventoryVerified = true;
      resolve(order);
    }, 800);
  });
}

// 3. Process payment
function processPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentSuccess = Math.random() > 0.2; // 80% success rate
      if (paymentSuccess) {
        console.log('💳 Payment processed');
        order.paymentStatus = 'completed';
        resolve(order);
      } else {
        reject(new Error('Payment declined'));
      }
    }, 1200);
  });
}

// Execute the pipeline
validateOrder({
  customerId: 'cust789',
  items: [{ id: 'prod456', qty: 1 }]
})
.then(checkInventory)
.then(processPayment)
.then(order => {
  console.log('🎉 Order completed:', order);
})
.catch(err => {
  console.error('❌ Order failed:', err.message);
});




