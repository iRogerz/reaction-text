var id;
var status = 'blue';
var preNow;
var best = Infinity;
$('body').click(function(){
    if (status == 'blue') {
        start();
        status = 'red';
    }else if(status == 'red'){
        tooSoon();
        status = 'blue';
    }else{
        showResult();
        status = 'blue';
    }
});

function start(){
    $('h1').text('等待綠色');
    $('h2').text('');
    $('body').css('background-color','red');
    var time = Math.random()*10000;
    id = setTimeout(timeOut, time);
}

function timeOut(){
    $('h1').text('點擊');
    $('h2').text('');
    $('body').css('background-color','springgreen');
    status = 'green';
    preNow = Date.now();
    
}

function tooSoon(){
    $('h1').text('太快了');
    $('h2').text('點擊頁面再玩一次');
    $('body').css('background-color','royalblue');
    clearTimeout(id)
}

function showResult(){
    var now = Date.now() - preNow;
    if(best > now){
        best = now;
    }
    $('h3').text('最佳紀錄:'+ best +'ms')
    $('h1').text(now+'ms' );
    $('h2').text('點擊頁面再玩一次');
    
}