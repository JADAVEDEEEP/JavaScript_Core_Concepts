
//here i build simple promise and i resolved and rejected based on the math function random decimal number geneter if number mathc promise will be resolved or it will reject  
const lotterypromise = new Promise((resolve,reject)=>{
    if(Math.random()>=0.5){
        resolve('you won')
}else { 
    reject('you lost bye')
}
})
lotterypromise.then(res=>console.log(res)).catch(err =>console.log(err))