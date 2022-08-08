//let counter = 0;
//function count() {
//    counter += 1;
//    document.querySelector('h1').innerHTML = counter;
//    if (counter % 10 === 0) {
//    alert(`Counter is now ${counter}`);
//    }
//}
//document.addEventListener('DOMContentLoaded', function() {
//document.querySelector('button').onclick = count;
//setInterval(count, 1000);
//});

//Создание страницы которая будет сохранять информацию

if (!localStorage.getItem('counter')){
   (localStorage.setItem('counter', 0));
}

function count() {
    let counter = localStorage.getItem('counter');
    counter ++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)
}
document.addEventListener('DOMContentLoaded', function() {
document.querySelector('h1').innerHTML = localStorage.getItem('counter')
document.querySelector('button').onclick = count;

});