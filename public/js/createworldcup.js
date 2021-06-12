var rounds

var upload = $('.upload').clone();
$('#round_input').on('click',function(){
    rounds=$('#rounds').val()
    if(checkCube(rounds)){
        alert(rounds);
        console.log(rounds);
        $('.upload').empty()
        for(var i=0;i<rounds;i++){
            $('.upload').append(upload.html());
        }
    }
    else{
        alert("2의 거듭제곱만 가능합니다.")
    }
})

function checkCube(num){
    while(num>1){
        if(num%2===0){
            num = num/2;
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}