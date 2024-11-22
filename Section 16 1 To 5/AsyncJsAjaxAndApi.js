/*
SYNCRONOUNS JAVASCRIPT 

--> that means all the operation will be executed one by one thats called sync javascript
--> most of they are synchronize 
-->it would be held line by line 
-->it will be executed only when the previous exection will be executed 

----------------EXECUTED ALL LINE BY LINE --------------------

const p = dcoument.queryselector('.p')
p.context = 'my name is deep jadav'
-->here woulbe be execrution block since we dont click ok so thats the problem with synce programing 
alert('text set!')
p.context = 'my name is deep jadav'

const p = dcoument.queryselector('.p')
-->here settomeout is the Asynce function so it would be executed after the 5 sedonds so thats 
major diffrance with Async and sync prorgaming fosnt matter if its callback but it will executed first 
-->async time will not wait to finish the execution it will excuted second operation without blcoing the code 
settimeout(()=>{
    p.textcontent = 'deep is jadav
    },5000)
    p.style.color = 'red


    //////////////////////////////////////////AJAX AND XML///////////////////////////////////////////

    -->Async javascript and xml
    -->example i want fake api server data so  i can requerst directly to that server
    using ajax calls 
    -->we can commnucate with the remote web server async way were we can request the data danaymecally from that server 
    -->ajax calls can send the HTTP requsts to fetch the data from remote server
    /////////////////////////////////////////////////APIS AND WEB APIS////////////////////////////////

    --> Apis used to exchange the information between tow parties 
    --> we also called the apis to online apis or web server apis 
    that contains the data of the server we need 
    -->jason data formt that widley used range in the world 
*/
