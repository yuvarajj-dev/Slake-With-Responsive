let array = [];
for(i=0;i<=100;i++){
    array.push(i);
}
console.log(array)

let minimum = () =>{
    minarray = array.sort((a,b)=>(a-b));
    console.log(minarray[0]);
}
minimum()

let maximum = () =>{
    maxarray = array.sort((a,b) => (b-a));
    console.log(maxarray[0]);
}
maximum()