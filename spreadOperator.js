function spreadoperator() {
//  const testone =[1,2,3];
//  const testtwo =[4,5,6];
//  const combined =[...testone,...testtwo];
//  console.log(combined);  
 const numbers1=[1,2,3,4,5,6];
 const[one,two,three,...rest] =numbers1
 console.log(one);
 console.log(two);
 console.log(rest);
 const carname = {
 name : 'Audio',
 color : 'black',
 model : '65i-7' 
 }
 const fruitname ={
    name: 'apple',
    color:'Red',
    taste: 'Sweet'
 }
 const myvechilefruit={...carname,...fruitname};
console.log(myvechilefruit);
}

