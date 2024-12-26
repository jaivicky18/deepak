function walkdog()
{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("u walk the dog");
        },2000);
    });
}

function cleankitchen()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve("u clean the kitchen");

            },1000);
            });
}
/*walkdog()
.then((value)=>{
    console.log(value);
    return cleankitchen();


    
})
.then((value)=>{
    console.log(value);
})*/

function trashout(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("u trashout");

        },3000);
    });
}

trashout()
.then((value)=>{
    console.log(value);
    return cleankitchen();
})
cleankitchen()
.then((value)=>{
    console.log(value);
    return walkdog();

})
.then((value)=>{
    console.log(value);
});
