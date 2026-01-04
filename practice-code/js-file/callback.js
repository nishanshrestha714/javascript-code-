function areaCalcule(l ,b ,callback){
   let results=l*b;
   callback(results);
}

areaCalcule (2,4,(results)=>{
    console.log(` the area of ${results}`);
});