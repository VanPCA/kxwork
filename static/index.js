var personCount;
var doCount = 0;
function doit(){  personCount = document.getElementById("personNum").value;
                  if(isNaN(personCount))
                  {
                      alert("宁管这也叫数字吗？")
                }
                else
                {
                      personCount = Number(personCount);
                }
    }

    try{
const sign = '/excel';
function showExcel(data){
    var nameElement = document.querySelector('#name');
    var numberElement = document.querySelector('#number');
    var object, seq = 0;
    function count(){
        if((seq+1)<data.length)
        {
            seq=seq+1;
        }
        else
        {
            seq=0;
        }
    };
    return{
         start() {
             object = setInterval(function(){
             var {name,number}=data[seq];
             nameElement.innerHTML = name;
             numberElement.innerHTML = number;
             count();
         })
        },
        stop() {
            clearInterval(object);
            var newName = document.createElement("p");
            var newNumber = document.createElement("p");
            var node1 = document.createTextNode(nameElement.innerHTML);
            var node2 = document.createTextNode(numberElement.innerHTML);
            newName.appendChild(node1);
            newNumber.appendChild(node2);
            var element =  document.getElementById("app");
            element.appendChild(newName);
            element.appendChild(newNumber);
    }
}
}

fetch(sign)
.then(
async function(response){
const data = await response.json();
const { start, stop } = showExcel(data);
let flag = true;
window.addEventListener('keydown',function(){
    if(event.keyCode===13)
   {
       if(flag)
       {
             start();
       }
       else
       {
           stop();
           doCount+=1;
           if(doCount>=personCount)
           {
               alert("选完啦！");
            }
           }
           flag=!flag;
       }
   })
  })
  .catch((e) => {
    document.write('ERROR:  ');
    document.write(e);
    document.close();
  })
}
catch(e)
{
window.location = `https://www.baidu.com/s?ie=UTF-8&wd=${e}`
}
