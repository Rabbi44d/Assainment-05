//  updet man

 const updetScor=document.getElementsByClassName('flex justify-center gap-x-10 my-10 w-full w-16')
 let count=40;

 for(const total of updetScor){
    total.addEventListener('click', function (e){
      count=count - 1;
      document.getElementById('updetScor').innerText=count;
    })
 }

 const UpdetScor=document.getElementsByClassName('TotalBtn')

 let TotalCount=0;

 for(const totalSit of UpdetScor ){
    totalSit.addEventListener('click', function(f){
        Count= TotalCount + 1;
        document.getElementById('TotalCount').innerText=Count;
    })
 }
    
 const UpdeTScor=document.getElementsByClassName('flex justify-center gap-x-10 my-10 w-full w-16')
 let Total=550;

 for(const totalman of UpdeTScor){
    totalman.addEventListener('click', function(f){
        Totalcount=Total*2;
        document.getElementById('TotalPrice').innerText=Totalcount;

    })
 }
