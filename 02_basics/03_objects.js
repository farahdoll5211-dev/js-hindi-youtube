// singleton
//Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Farah",
    "full name": "Farah Doll",
    [mySym]: "mykey1",
     age: 24,
    location: "Karachi",
    email: "farah@google.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
}


//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "farah@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "farah@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

