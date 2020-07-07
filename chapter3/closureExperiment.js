function alwaysFirstName(first){
    return function(last){ return(`${first} ${last}`)}
}

const jakeNames = alwaysFirstName("Jake");
// console.log(jakeNames("O'Toole"))
// // Jake O'Toole
// console.log(jakeNames("Maddox"))
// // Jake Maddox
// console.log(jakeNames("Smith"))
// // Jake Smith
// console.log(jakeNames("Robbinson"))
// // Jake Robbinson

function info(){
    const insideStuff = {
        name: "Jake",
        age: "30"
    };
    
    let stuffToModify = {
        favoriteColor: "red"
    }

    return (request)=>{
        console.log(insideStuff[request]);
    };
}

const infoAccess = info();
infoAccess("name")



function favoriteColorStorage(){
    let stuffToModify = {
        favoriteColor: "red"
    }

    return (newFavoriteColor)=>{
        if(newFavoriteColor){
            stuffToModify.favoriteColor = newFavoriteColor;
        }
        
        console.log("your favorite color is: ", stuffToModify.favoriteColor);
        
    };
}

const FavoriteColor1 = favoriteColorStorage();

FavoriteColor1();
FavoriteColor1("blue");

const FavoriteColor2 = favoriteColorStorage();

FavoriteColor2();
FavoriteColor2("green")

FavoriteColor1();
FavoriteColor2();
