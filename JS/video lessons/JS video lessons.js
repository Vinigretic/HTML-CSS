//код который управляет контентом веб страницы
/*Код JavaScript - это последовательность инструкций JavaScript. Инструкции выполняются браузером в том порядке,
в котором они написаны.*/

/*Блоки JavaScript - это способ сгруппировать инструкции вместе. Блок начинается открывающейся фигурной скобкой
"{" и заканчивается закрывающейся "}".*/

//Файл hello

//alert("Hello World!");  //alert - вызывает оповещение при открытии страницы

//В скрипте в HTML мы можем прописывать логику. Ниже описываем функцию которая выводит оповещение на экран
//
//    <script>
//        function hello() {
//            alert('Hello world');
//        }
//
//    </script>
//
//Далее мы можем описать как эта функция будет вызываться, например привязать ее к нажатию кнопки

//Описываем кнопку и к кнопке добавляем onclick(обработчик событий) в который передаем нашу функцию
//<body>
//    <button onclick="hello()">Click here</button>
//</body>

//Создадим новый скрипт. В нем опишем функцию
//document.querySelector - с помощью него мы можем обращаться к заданным HTML тегам и что то с ними делать
//Попадать в него будет первый найденный тег на странице

//Опишем логику нашей функции

//document.querySelector('h1').innerHTML = 'Goodbye!' - передали в него тег h1 и при нажатии кнопки к которой мы подвязали
//нашу функцию содержимое h1 изменится с Hello на Goodbye!, при следующем нажатии на кнопку значение снова измнится на Hello
//innerHTML - метод который обращается к контенту внутри переданного тега

//    <script>
//        function hello() {
//        if (document.querySelector('h1').innerHTML === 'Hello') {
//            document.querySelector('h1').innerHTML = 'Goodbye!';
//        }else {
//            document.querySelector('h1').innerHTML = 'Hello';
//        }
//        }
//    </script>

//Напишем более оптимизированный код

//Создадим доп переменную, передадим в нее поиск нужного тега
//let handing = document.querySelector('h1')

//Для того что бы создать переменную которая не изменится не при каких обстоятельствах создадим константу
//const handing = document.querySelector('h1')

//    <script>
//        function hello() {
//        const handing = document.querySelector('h1')
//        if handing.innerHTML === 'Hello') {
//            handing.innerHTML = 'Goodbye!';
//        }else {
//            handing.innerHTML = 'Hello';
//        }
//        }
//    </script>

//Создание кнопки
//
//<body>
//    <h1>Hello</h1>
//    <button onclick="hello()">Click here</button>
//</body>

//Отправка форм и доступ к данным которые вводяся в форму
//Создаем форму
//<form>
//        <input autofocus id="name" placeholder="Name" type="text">
//        <input type="submit">
//    </form>
//
//autofocus делает форму активной при открытии страницы(выделяет ее и ставит курсор)
//id="name" идентификатор конкретного input
//placeholder="Name" - текс который пользователь будет видеть в форме при открытии страницы
//type="text" - тип данных которые будут вводится в форму
//<input type="submit"> кнопка отправки формы

//Далее описываем script

//<script>
//        document.addEventListener('DOMContentLoaded', function() {
//            document.querySelector('form').onsubmit = function() {
//                const name = document.querySelector('#name').value;
//                alert(`Hello, ${name}!`);
//            };
//        });
//</script>
//
//document.addEventListener('DOMContentLoaded', function() - говорим что скрипт должен выполнится только после полной загрузки
//страницы
//document.querySelector('form').onsubmit = function()  - говорим что мы ищем форму с отправкой данных
//onsubmit - реагирует на отправку формы
//const name = document.querySelector('#name').value; - говорим что мы ищем поле с id name и хотим получить доступ к его
//значению(к данным которые ввел пользователь)
//alert(`Hello, ${name}!`); - выводим уведомление с полученным значением

//Файл counter

//Создаем в скрипте функцию счетчика
//
//<script>
//        let counter = 0;
//        function count() {
//            counter += 1;
//            alert(counter)
//        }
//</script>
//
//Подвязываем ее к кнопке. Каждый раз при нажатии на кнопку переменная counter будет увеличиватья на еденицу
//<body>
//    <h1>Hello</h1>
//    <button onclick="count()">Count</button>
//</body>

//Создадим новый скрипт
//аналог f строки pythona в js
//`Counter is now ${counter}`
//Строку необходимо взять в такие кавычки ``, перед переменной которую хотим вывести поставить $ и взять ее в {}
//
//    <script>
//        let counter = 0;
//        function count() {
//            counter += 1;
//            document.querySelector('h1').innerHTML = counter;
//            if (counter % 10 === 0) {
//            alert(`Counter is now ${counter}`);
//            }
//        }
//
//    </script>

//Для того что бы отделить код JS от HTML нужно сделать следующее
//Так как код читается последовательно сверху вниз и все поисковые запросы отработали, скрипты js нужно либо размещать внизу
//страницы HTML(для того что бы она полностью загрузилась) либо использовать следующий код
//Необходимо создать  участика так называемого слушателя событий
//document.addEventListener
//Метод addEventListener можно применить не только к document а к любому елементу HTML.
//Этот метод обычно принимает два аргумента
//Первый - указывает на событие которое нужно отследить. Например нажатие на кнопку или прокрутка страницы
//В нашем случае нам нужно событие полной загрузки документа - DOMContentLoaded
//document.addEventListener('DOMContentLoaded'), он будет запускать нужный код только после полной загрузки страницы
//Второй аргумент - это функция которая должна запускаться после события, функция используется без названия
//document.addEventListener('DOMContentLoaded', function() {
//
//});
//Затем в нашу функцию мы должны добавить код котороый она должна выполнить

//Вызовем в нашем скрипте метод
//document.querySelector который обращается ко всему документу
//Скажем ему что ищем кнопку
//document.querySelector('button')
//Вызовем метод onclick - нажатие кнопки
//document.querySelector('button').onclick
//И скажем что это все равно нашей функции
//document.querySelector('button').onclick = count;

//document.addEventListener('DOMContentLoaded', function() {
//    document.querySelector('button').onclick = count;
//});


//в тег кнопки в HTML уже ничего не передаем
//<button>Count</button>
//
//    <script>
//        let counter = 0;
//        function count() {
//            counter += 1;
//            document.querySelector('h1').innerHTML = counter;
//            if (counter % 10 === 0) {
//            alert(`Counter is now ${counter}`);
//            }
//        }
//         document.addEventListener('DOMContentLoaded', function() {
//         document.querySelector('button').onclick = count;
//         });
//    </script>

//Можно вообще не писать код JS в HTML файле, а создать отдельный файл JS и подключить его в HTML.
//Создаем файл counter.js с нашим кодом и подключаем его в HTML
//
//<script src="counter.js"></script>

//Добавим в наш скрипт функцию для создания интервального запуска
//setInterval - встроенная функция JS, нужна для создания интервалов запуска каких либо функций
//setInterval(count, 1000) - первый параметр название функции которую нужно запускать, второй время
//(в этом случае 1000 милисекунд или 1 секунда), через которое будет запускаться функция

//Создание страницы которая будет сохранять информацию

//LocalStorage - локальное хранилище в котором браузер может сохранять информацию. Информация сохраняется в нем как пара
//ключ-значение.
//
//Чтобы использовать локальное хранилище, мы используем две ключевые функции:
//
//localStorage.getItem(key): эта функция ищет запись в локальном хранилище по заданному ключу и возвращает значение, связанное
//с ним.
//localStorage.setItem(key, value): эта функция устанавливает запись в локальном хранилище связывая ключ с новым значением.


//if (!localStorage.getItem('counter')) - пишем условие что если нашей переменной counter не существует
//
//(localStorage.setItem('counter', 0)) - мы ее создадим и присвоим ей значение 0
//
//function count() { - далее описываем функцию count
//
//let counter = localStorage.getItem('counter'); - создаем в ней переменную которая будет равна тому значению которое
//localStorage.getItem найдет в хранилище. Каждый раз когда мы будем открывать страницу в переменную будет сохраняться
//последнее значение
//
//counter ++; - увеличиваем последнее найденое значение на 1
//
//document.querySelector('h1').innerHTML = counter; меняем значение заголовка которое видит пользователь
//
//localStorage.setItem('counter', counter) - присваеваем нашей переменной последнее значение перед закрытием страницы,
//которое сохранится в хранилище
//
//document.addEventListener('DOMContentLoaded', function() { - говорим что функция запустится после после полной загрузки
//страницы
//
//document.querySelector('h1').innerHTML = localStorage.getItem('counter') - помещаем в название заголовка последнее сохраненное
//в хранилище значение переменной
//
//document.querySelector('button').onclick = count; - говорим что функция запускается при нажатии на кнопку
//
//if (!localStorage.getItem('counter')){
//   (localStorage.setItem('counter', 0));
//}
//
//function count() {
//    let counter = localStorage.getItem('counter');
//    counter ++;
//    document.querySelector('h1').innerHTML = counter;
//    localStorage.setItem('counter', counter)
//}
//document.addEventListener('DOMContentLoaded', function() {
//document.querySelector('h1').innerHTML = localStorage.getItem('counter')
//document.querySelector('button').onclick = count;
//
//});


//Файл colors
//Изменение стилей CSS

//создадим заголовок и три кнопки, каждому тегу присвоим id
//
//    <h1 id="hello">Hello!</h1>
//    <button id="red">Red</button>
//    <button id="blue">Blue</button>
//    <button id="green">Green</button>

//Далее напише скрипт который при нажатии на кнопку будет менять цвет заголовка

//<script>
//        document.addEventListener('DOMContentLoaded', function() {
//            // change font color to red
//            document.querySelector('#red').onclick = function() {
//                document.querySelector('#hello').style.color = 'red';
//            };
//            // change font color to blue
//            document.querySelector('#blue').onclick = function() {
//                document.querySelector('#hello').style.color = 'blue';
//            };
//            // change font color to green
//            document.querySelector('#green').onclick = function() {
//                document.querySelector('#hello').style.color = 'green';
//            };
//        });
//</script>

//document.addEventListener('DOMContentLoaded', function(){};- говорим что код запустится после полной загрузки страницы
//document.querySelector('#red').onclick = function() - говорим что ищем елемент с id red(кнопка) и говорим что функция
//запустится при нажатии на кнопку - onclick
//document.querySelector('#hello').style.color = 'red'; - далее если кнопка нажата выполняется код в функции который ищет
//елемент с id hello(заголовок) и меняет его цвет style.color на красный. И так для каждой кнопки
//атрибут style.SOMETHING - с помощью него мы меняем стили елемента

//Оптимизация кода 1

//создадим заголовок и три кнопки, но теперь кнопкам присвоим атрибут data-color
//data-SOMETHING - используем для присвоения данных елементу HTML, в нашем случае это цвет

//Далее создадим скрипт

//    <script>
//        document.addEventListener('DOMContentLoaded', function() {
//            document.querySelectorAll('button').forEach(function(button) {
//                button.onclick = function() {
//                    document.querySelector('#hello').style.color = button.dataset.color;
//                }
//            });
//        });
//    </script>

//document.addEventListener('DOMContentLoaded', function(){};- говорим что код запустится после полной загрузки страницы
//document.querySelectorAll('button') - при запуске этой функции получим список из всех найденых
//элементов на странице, в нашем случае это кнопка
//forEach(function(button) - пройдется по всем елементам списка(в функцию передаем тот же елемент что и в querySelectorAll
//button.onclick - обращаемся к елементу в функции и применяем к нему метод onclick(запустит функцию в случае нажатия на
//кнопку)
//document.querySelector('#hello').style.color = button.dataset.color; - обращаемся к элементу '#hello' и с помощью метода
//dataset - обращаемся к атрибуту(data-color) меняем его цвет

//Оптимизация кода 2

//создадим заголовок и кнопку с выпадающим списком
//
//<select>
//    <option value="black">Black</option>
//    <option value="red">Red</option>
//    <option value="blue">Blue</option>
//    <option value="green">Green</option>
//</select>

//option - елементы выпадающего списка, присвоим им атрибут value, который содержит цвет

//Далее сосздадим скрипт

//    <script>
//        document.addEventListener('DOMContentLoaded', function() {
//            document.querySelector('select').onchange = function() {
//                document.querySelector('#hello').style.color = this.value;
//            }
//    });
//    </script>

//document.addEventListener('DOMContentLoaded', function(){};- говорим что код запустится после полной загрузки страницы
//document.querySelector('select').onchange = function() - говорим что ищем елемент select и говорим что функция
//запустится при выборе путкта из выпадающего списка - onchange
//document.querySelector('#hello').style.color = this.value - говорим что при запуске функции отработает этот код
//this.value - метод с помощью которого получаем доступ к атрибутам выпадающего списка

//События которые мы можем отслеживать в JS:
//onclick - нажатие на кнопку
//onmouseover - реагирует когда пользователь наводит курсор на определенный элемент
//onkeydown - реагирует на нажатие клавиши на клавиатуре - нажатие на клавишу
//onkeyup - реагирует на нажатие клавиши на клавиатуре - отрыв от клавиши(отжатие)
//onload - используется как указатель, что веб-страница полностью загружена, включая содержание, изображения, стилевые файлы
//и внешние скрипты.
//onblur -  возникает при потере элемента фокуса. Это обычно происходит, если щелкнуть на другой элемент текущего документа.
//Событие onblur противоположно по своему действию событию onfocus.

//Файл tasks
//Создадим заголовок и список который будет наполняться данными которые вводит пользователь.
//Наполняться он будет с помощью внесения данных в форму
//
//<body>
//    <h1>Tasks</h1>
//    <ul id="tasks">
//
//    </ul>
//    <form>
//        <input id="task" placeholder="New task" type="text">
//        <input id="submit" type="submit">
//    </form>
//
//</body>

//Создадим скрипт
//document.addEventListener('DOMContentLoaded', function() - говорим что код запустится после полной загрузки страницы
//document.querySelector('#submit').disabled = true; - делаем кнопку отправки формы не активной при запуске страницы
//атрибут disabled - отвечает за активность кнопки submit
//submit.disabled = true - кнопка не активна
//submit.disabled = false - кнопка активна
//
//Опсываем условие при которой кнопка отправить будет менять свое свойство с не активной на активное.
//
//document.querySelector('#task').onkeyup = function() - функция запускается в тот момент когда пользователь оторвал руки от
//клавиш, за это отвечает атрибут onkeyup
//
//Далее описываем проверку, поле формы не должно быть пустым. Если оно не пустое кнопка становится активной и наоборот
//
//if (document.querySelector('#task').value.length > 0) {
//    document.querySelector('#submit').disabled = false;
//}else {
//    document.querySelector('#submit').disabled = true;
//}
//
//document.querySelector('form').onsubmit = function() - говорим что ищет тег формы и условием для запуска функции является
//нажатие кнопки submit, за это отвечает метод onsubmit
//
//const task = document.querySelector('#task').value; - создаем переменную в которую передаем код отвечающий за доступ к
//данным которые ввел пользователь
//const li = document.createElement('li'); создаем переменную списка
//li.innerHTML = task; - говорим что контент в этой переменной равен переменной task
//метод innerHTML - отвечает за доступ к контенту
//
//document.querySelector('#tasks').append(li); - наполняем наш список контентом который вводит пользователь
//document.querySelector('#task').value = ''; - обнуляем поле ввода после каждой отправки
//document.querySelector('#submit').disabled = true; - говрим что после обнуления поля кнопка снова не активна
//return false; - говорим отпрвка формы не передается на сервер а присходит только на стороне пользователя
//
//    <script>
//        document.addEventListener('DOMContentLoaded', function() {
//            document.querySelector('#submit').disabled = true;
//            document.querySelector('#task').onkeyup = function() {
//                if (document.querySelector('#task').value.length > 0) {
//                    document.querySelector('#submit').disabled = false;
//                }else {
//                    document.querySelector('#submit').disabled = true;
//                }
//            };
//            document.querySelector('form').onsubmit = function() {
//                const task = document.querySelector('#task').value;
//                console.log(task);
//                const li = document.createElement('li');
//                li.innerHTML = task;
//                document.querySelector('#tasks').append(li);
//                document.querySelector('#task').value = '';
//                document.querySelector('#submit').disabled = true;
//                return false;
//
//            };
//        });
//    </script>


//API или прикладной программный интерфейс – это структурированная форма связи между двумя разными приложениями.
//JSON - тип данных JavaScript Object Notation
//Мы будем использовать что-то, что называется AJAX или асинхронный JavaScript и XML, что позволяет нам получать доступ к
//информации с внешних страниц даже после загрузки нашей страницы.
//fetch - функция которая позволит нам отправить запрос HTTP определенному web сайту, так же она возвращает ответ от этого
//сайта который называется promise.
//then - артибут с помощью которого мы работаем с promise, первый аргумент который он принимает это функция, параметром
//функции передаем response
//во втором случае в фунцию передаем текущую дату


