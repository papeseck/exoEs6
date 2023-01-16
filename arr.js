let array = [15, 24, 15, 26, 1, 8, 45];

//let array0 = array.pop()
//let Arraysupp= array.splice(2 ,1)
 //let array1 = array.map(el=>el*2)
 //let array2 = array.filter((el, i)=>el>20)
//let array3 = array.reduce((acc, cur) => acc + cur, 0);
 let array4 = array.find(el=> el>25)

 //console.log(array4)
 


 function map (){
   let array=[15, 24, 15, 26, 1, 8, 45]
   for(let i=0; i< array.length; i++){
     array[i]=array[i]+1
   }
  return array
 }

//console.log(Arraysupp);
//console.log(map())

 function filter (){
   let array=[15, 24, 15, 26, 1, 8, 45]
   let tab = []
    for(let i=0; i< array.length; i++){
         if(array[i]>20){
           tab=tab.concat(array[i])
    }
  }
     return tab
 }
 console.log(filter())
