const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});
// 기본 문법 서버 오픈하는 문법 => 8080포트와 function 실행

app.get('/pet',function(요청,응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');

});
// 누군가 경로로 접속하면 함수를 실행해줘 실행 "get요청" req, res

app.get('/hi',function(req,res){
    res.send('안녕 내 첫 웹서버야');
});

// request 요청 respond 응답 저 둘의 파라미터들이랑 밑에 res.send();