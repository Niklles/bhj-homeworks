// Задача 1.1 (Таймер обратного отсчёта):

intervalId = setInterval(function(){
    var timerValue = document.getElementById('timer');
    --timerValue.textContent;
    if (timerValue.textContent == 0){
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }
}, 1000);

