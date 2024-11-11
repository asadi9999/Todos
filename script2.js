var myarr=['benz','vw','opel','bogati','ferrari','volvo',]
var newarr=['ali']
myarr.forEach((e,index) => {
    console.log(`${index} -> ${e}`)
});
myarr.push('infiniti');

console.log(myarr)

const arr3=myarr.concat(newarr)
console.log(arr3)
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));
arrayLike=[
    'tehran',
    'isfahan',
    'ahvaz',
    'mashhad',
    'tabriz',
    'kordestan'
]

console.log(Array.from(arrayLike)) 
// Array.from(arrayLike, mapFn, thisArg)
localStorage.setItem('myarr',JSON.stringify(arrayLike));

//....................................................................................
    function creatTodos(myarr){
        let todosList=document.querySelector('#todos-list');
        todosList.innerHTML=''
        myarr.forEach((todo,i) => {
            let li=document.createElement('li')
            li.className=('list-group-item')
            let content=document.createElement('span')
            content.textContent=todo
            let deletBtn=document.createElement('img')
            deletBtn.src=('media/delete.png')
            deletBtn.className=('float-right')
            li.append(content)
            li.append(deletBtn)
            

            todosList.append(li)
                deletBtn.addEventListener('click',e => {
                    
                myarr.splice(i,1)
                localStorage.setItem('myarr',JSON.stringify(myarr))
                creatTodos(myarr)
                })
             });
    }
creatTodos(myarr)
//..................................................add an array list to lis of a ul.....................................................
Arrdescrip=['benz is fast','vw is powerfull','opel is optional','bogatti is beautiful','ferrari is very fast','volvo is cheap and economies',]


function tst(myarr){
    let wrapper=document.createElement('div')
    wrapper.className=('x')
    document.body.prepend(wrapper)
    myarr.forEach((arr,index) => {
        console.log(`${index} -> ${arr}`)
        let ul=document.querySelector('body > div > div > div:nth-child(1) > ul')
        let li=document.createElement('li')
        
        ul.className=('list-unstyled text-danger font-weight-bold p-5')
        ul.append(li)
        let hr=document.createElement('hr')
        // console.log(hr)
        li.append(hr)
        li.textContent=`${index+1} -> ${arr}`
    });
    
}

tst(myarr)
//........................................................................................................................................
// function DescripCars(Arrdescrip){
//     alert('hi')
//     Arrdescrip.forEach((descrip,i) => {
//         let todosList=document.querySelector('#todos-list')
//         todosList.innerHTML=''
//         let li=document.createElement('li')
//             li.className=('list-group-item')
//             // let content=document.createElement('span')
//             // content.textContent=descrip

//         let p=document.createElement('p')
//         todosList.append(li)
//         li.append(p)
//         p.textContent=descrip.splice(i,1)
//         console.log(p.textContent)
//         p.className=('text-success fs-5')
//         localStorage.setItem('Arrdescrip',JSON.stringify(Arrdescrip))
//         DescripCars/(Arrdescrip)
//     });
// }

// DescripCars(Arrdescrip)

info=['ali','sima','sina','karim']
let descrip={
    fname:'ali',
    lname:'omidy',
    status:false,
    fields:['php','html','css','javascript'],
    showName(){
        return `name is: ${this.fname} and family is: ${this.lname}`
    },
    mogheiyat(){
        if(this.status == true){
            console.log('accepted')
        }else{
            console.log('rejected')
        }
    },
    showField(){
        this.fields.forEach(e => {
           console.log(e.length) 
        })
    },
    
};

console.log(descrip.showName())
console.log(descrip.mogheiyat())
console.log(descrip.showField())
function getInfo(){
    info.forEach((inf,index) => {
        console.log(`${index} -> ${inf}`)
    });
}
getInfo(descrip)

// const obj = {
//     num: 100,
//   };
  
//   obj.sum = function (a, b) {
//     return a + b + this.num;
//   };
  
//   console.log(obj.sum(10, 10)); // 👉️ 120
  








