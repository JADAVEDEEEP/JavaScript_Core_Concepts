//this how even loop work in call stack 


console.log('text statt ')//first ececute 
setTimeout(()=>console.log('ddde fbhdgfjdf'),0)//fourth execute 
promise.resolve('sucess Resolved ').then(res=>{//third 
  console.log(res)  
  console.log('text deep')//second secute 
})
