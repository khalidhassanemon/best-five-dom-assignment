var sum=0;

document.getElementById('btn-1').addEventListener('click',function(){
    sum++;
   const x=document.getElementById('list-ul');
   const li=document.createElement('li');
   li.innerText='Cristiano Ronaldo';
   x.appendChild(li);
   document.body.style.cssText = 'color:white';
})
document.getElementById('btn-2').addEventListener('click',function(){
    sum++;
    const x=document.getElementById('list-ul');
    const li=document.createElement('li');
    li.innerText='Neymar';
    x.appendChild(li);
    document.body.style.cssText = 'color:white';
})
document.getElementById('btn-3').addEventListener('click',function(){
    sum++;
    const x=document.getElementById('list-ul');
const li=document.createElement('li');
li.innerText='Leonel Messi';
x.appendChild(li);
document.body.style.cssText = 'color:white';
})
document.getElementById('btn-4').addEventListener('click',function(){
    sum++;
const x=document.getElementById('list-ul');
const li=document.createElement('li');
li.innerText='Kylian Mbappé';
x.appendChild(li);
document.body.style.cssText = 'color:white';
})
document.getElementById('btn-5').addEventListener('click',function(){
    sum++;
const x=document.getElementById('list-ul');
const li=document.createElement('li');
li.innerText='Karim Benzema';
x.appendChild(li);
document.body.style.cssText = 'color:white';
})
document.getElementById('btn-6').addEventListener('click',function(){
    sum++;
const x=document.getElementById('list-ul');
const li=document.createElement('li');
li.innerText='Luka Modric';
x.appendChild(li);
document.body.style.cssText = 'color:white';
})

const total=document.getElementById('calculates').addEventListener('click',function(){
    const input=document.getElementById('nmbr');
    const inputString=input.value;
    const inputInt=parseInt(inputString);
    const totalExpenses=sum*inputInt;
    const p=document.getElementById('total-expense');
    p.value=totalExpenses;
})