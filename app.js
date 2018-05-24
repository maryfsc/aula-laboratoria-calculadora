function grades() { 
    var firstGrade = parseInt(document.getElementById('num1').value);
    var secondGrade = parseInt(document.getElementById('num2').value);

    var result = (firstGrade + secondGrade) / 2;

    var message = document.getElementById('complete');
    message.textContent = 'A média da estudante é de ' + result + '.';

    return false;

}

