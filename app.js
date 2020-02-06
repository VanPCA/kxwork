var express = require('express');
var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path');

var app = express();

app.use('/',express.static(path.join(__dirname,'static')));
app.use('/excel',(req, res) =>{
    
    try{
    var array = xlsx.parse(path.join(__dirname,'database','exp.xlsx'))[0].data.filter(x => x)
    var data = array.map(item => {
      return {
        'name': item[0],
        'number':item[1]
      }
    });
res.json(data);
    }
    catch(e){
     document.write(e);
    }
});
   
 
app.listen(8888);
console.log('server start at http://localhost:8888')