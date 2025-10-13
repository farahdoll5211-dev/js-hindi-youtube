const user = {
    username: "farah",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
//console.log(this);

//function chai(){
    //let username = "farah"
    //console.log(this.username);
//}
//chai()

//const chai = function () {
  //  let username = "farah"
    //console.log(this.username);
    
//}
//chai()

//const chai =  () => {
    //let username = "farah"
    //console.log(this.username);
//}
//chai()


//const addtwo = (num1 , num2) => {
     //return num1 +num2
//}

//const addtwo = (num1, num2) => num1 + num2
//const addtwo = (num1, num2) => ( num1 + num2 )

const addtwo = (num1, num2) => ({username: "farah"})


console.log(addtwo(3, 4));

const myArray = [2, 5, 3, 7]

myArray.forEach(() => {})