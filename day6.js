setTimeout(() => {
   console.log("react is the best"); 
},5000);
setInterval(() => {
    console.log("react is the best1"); 
 },3000);

 let count=0;
 
d=setInterval(()=>{
         console.log("REACT IS THE BEST");
         ++count;
         if (count==10){
             clearInterval(d);
         }
     },1000)

 