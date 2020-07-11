const things = ['apples', 'rocks', 'gameboys', 'bees'];

// the way I always do it.
for(let i = 0; i < things.length; i++){
    let entry = things[i];
    console.log(entry);
}

// the newer fancy way to do it.
for(let entry of things){
    console.log(entry);
}