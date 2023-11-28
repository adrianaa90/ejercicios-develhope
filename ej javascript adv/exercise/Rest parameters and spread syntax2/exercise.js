function sum(...num) {
    let tsum=0;
   for(let i=0; i<num.length;i++){
    
    tsum= num[i]+tsum;
   }

    return tsum;
}

console.log(sum(1, 2, 3, 4, 5));