/*
setTimeout(()=>
{
    console.log("i am ready to walk after 10sec")
},10000 )
//
const mycallback=()=>{
    console.log("i am ready to wlak in 3 sec");
    
}
setTimeout(mycallback,3000)
//
function walkdog(){
    setTimeout(()=>{
        console.log("hai i am vicky");
        
    })
}

//
//
*/
function walkdog()
{
    setTimeout(()=>{
        console.log("u walk the dog");
    },2000);
}
function cleankitchen()
{
    setTimeout(()=>{
        console.log("u clean the kitchen");
    },1000);
}
function trashout()
{
    setTimeout(()=>{
        console.log("u trashout");
    },5000);
}

trashout();
cleankitchen();
walkdog();

//
 function walkdog(callback)
{
    setTimeout(()=>{
        console.log("u walk the dog");
        callback();
    },3000);
}
function cleankitchen(callback)
{
    setTimeout(()=>{
        console.log("u clean the kitchen");
        cfunctionallback();
    },2000);
}


function trashout(callback)
{
    setTimeout(()=>{
        console.log("u trashout");
        callback();
    },5000);
}

trashout(()=>{
    cleankitchen(()=>{
        walkdog(()=>{
            console.log("thus task completed");


        });
    });
});
