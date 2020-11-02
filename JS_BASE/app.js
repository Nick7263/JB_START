//Подключаем установленный модуль через команду require.
let express = require('express');
//создаём новый объект как экхемпляр класса express
let app = express();

let port = 3000;

app.listen(port,function(){
console.log('node express work on 3000')
});

//Далее чтобы запустить первое приложение
//get метод обращения 
app.get('/',function(req,res){
    res.end('<h1>Hello</h1>Hello my first super landing page');
});

app.get('/cat',function(req,res){
    res.end('<h1>Category</h1>');
});