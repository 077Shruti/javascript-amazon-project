const xhr=new XMLHttpRequest();
xhr.addEventListener('load',()=>{
    console.log(xhr.response);
}); //we  use it because untile when we get the response it will load and after geting response it print thr response to avoid the asynchronous
xhr.open('GET','https://supersimplebackend.dev/not-supported'); //get=get some info from another computer
xhr.send();
