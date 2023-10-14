function countDown(num){
    let timer = setInterval(function(){
        num--;
        if(num <=0){
            clearInterval(timer);
            console.log('DONE!');
        }
        else{
            console.log(num);
        }
    }, 1000)
}

function randomGame(){
    var num_tries =0;
    let ran_id = setInterval(function(){
        let ran_num = Math.random();
        if(ran_num>.75){
            clearInterval(ran_id);
            console.log(num_tries);
        }
        else num_tries++;
    }, 1000);

}