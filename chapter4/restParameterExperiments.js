const reciever = function(...args){
  console.log("All the args", args)
}

reciever("hello", "how are you?", "My name is Jake")
reciever(1, 2, 3, 5)
reciever("hello", 1, "how have you been?", true, [1, 3, 4])