//Для работы с датами и временем в JavaScript используется объект Date.
//
//Объект Date создается с помощью конструктора Date(). Есть несколько способов создания объекта такого типа:
//
//var x = new Date() //В объект попадут текущие дата и время
//var x = new Date(миллисекунды) //передаем колчество миллисикунд-конверирует в дату
//Количество миллисекунд отсчитывая с 1 января 1970г
//var x = new Date(строкаДаты) - "December 14, 1975 12:10:00"
//var x = new Date(год, месяц, день[, часы, минуты, секунды, миллисекунды]) - 1989, 6, 14
//Обратите внимание - параметры, указанные в квадратных скобках являются необязательными.
//
//год - формат YYYY
//месяц - от 0 до 11
//день - от 1 до 31
//часы - от 0 до 23
//минуты - от 0 до 59
//секунды - от 0 до 59
//миллисекунды - от 0 до 999
//
//Давайте рассмотрим несколько примеров создания объекта Date и покажем в комментариях - что в результате будет выводиться
//на странице при использовании команды document.write(myDate):
//
//(команду document.write() мы еще не рассматривали подробно, на данном этапе достаточно понимания что она выводит то,
//что в нее передано, в HTML-документ.)
//
//
//var myDate = new Date()  //Mon May 15 2017 19:20:25 GMT+0300 (RTZ 2 (зима))
//var myDate = new Date("December 14, 1975 12:10:00") //Sun Dec 14 1975 12:10:00 GMT+0300 (RTZ 2 (зима))
//var myDate = new Date(1989, 6, 14)  //Fri Jul 14 1989 00:00:00 GMT+0400 (RTZ 2 (лето))
//var myDate = new Date(1998, 6, 14, 11, 20, 00) //Tue Jul 14 1998 11:20:00 GMT+0400 (RTZ 2 (лето))

//Значением даты и времени можно легко управлять, используя методы, доступные для объекта Date. (Эти методы будут более
//подробно рассмотрены в следующих шагах.)
//
//В следующем примере мы установим в объекте Date определенную дату:
//
//var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
//myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
//А теперь попробуем сдвинуть дату на 10 дней вперед:
//
//var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
//myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
//myDate.setDate(myDate.getDate() + 10); // Устанавливаем новое значение даты, получив прежнее и прибавив 10.
//Обратите внимание - если прибавка дней изменит месяц и год, это будет сделано автоматически, самим методом setDate().

//Значением даты и времени можно легко управлять, используя методы, доступные для объекта Date. (Эти методы будут более
// подробно рассмотрены в следующих шагах.)
//
//В следующем примере мы установим в объекте Date определенную дату:
//
//var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
//myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
//А теперь попробуем сдвинуть дату на 10 дней вперед:
//
//var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
//myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
//myDate.setDate(myDate.getDate() + 10); // Устанавливаем новое значение даты, получив прежнее и прибавив 10.
//Обратите внимание - если прибавка дней изменит месяц и год, это будет сделано автоматически, самим методом setDate().

//Объекты типа Date можно сравнивать так же как и другие.
//
//В примере ниже мы сравниваем текущую дату с датой 1 Января 2018 и если она совпадает - печатаем поздравление.
//
//
//var currentDate = new Date();             // Объявляем переменную для текущей даты
//var nextNewYear = new Date();             // Объявляем переменную для даты Нового Года
//nextNewYear.setFullYear(2018, 0, 1);        // Записываем значение даты для Нового Года - 1 января 2018
//
//if (+currentDate == +nextNewYear) {
//  alert("Поздравляем с Новым, 2018-м Годом! Ура!!!");
//}
//
//Давайте рассмотрим основные методы объекта Date.
//
//Получение данных из объекта Date.
//
//getDay() - возвращает день недели от 0 до 6, 0 - воскресенье, 1 - понедельник и т.д.
//getTimezoneOffset() - возвращает смещение часового пояса  относительно UTC, в минутах с противоположным знаком.
//getYear() - возвращает значение года минус 1900, к использованию не очень рекомендуется.
//getFullYear() -  возвращает значение года.
//getMonth() - возвращает месяц, от 0 до 11
//getDate() - возвращает число месяца от 1 до 31
//getHours() - возвращает час, от 0 до 23
//getMinutes() - возвращает количество минут, от 0 до 59
//getSeconds() - возвращает количество секунд, от 0 до 59
//getMilliseconds() - возвращает количество миллисекунд, от 0 до 999
//getTime() - возвращает количество миллисекунд, прошедших с полуночи 1 января 1970г GMT.
//Применение
//var a = new Date
//a.getDay()

//Запись данных в объект Date.
//
//setYear() - устанавливает значение года минус 1900, к использованию не очень рекомендуется.
//setFullYear() - устанавливает значение года.
//setMonth() - устанавливает месяц, от 0 до 11
//setDate() - устанавливает день месяца, от 1 до 31
//setHours() - устанавливает час, от 0 до 23
//setMinutes() - устанавливает количество минут, от 0 до 59
//setSeconds() - устанавливает количество секунд, от 0 до 59
//setMilliseconds() - устанавливает количество миллисекунд, от 0 до 999
//setTime() - устанавливает количество миллисекунд, прошедших с полуночи 1 января 1970г GMT.

//Применение
//var a = new Date
//a.setDate(15)

//Преобразование данных объекта Date
//
//Date.parse() - преобразовывает строку с датой, например "Jul 05, 2017" и возвращает количество миллисекунд, прошедших
//с полуночи 1 января 1970 г. Если строку преобразовать не удалось - возвращает NaN.
////Применение
//var a = new Date
//Date.parse(a)
//
//var myDate = new Date();
//document.write(myDate.setTime(Date.parse("22 May 2017 11:11"))); //Выведет на экран "1495613460000"
//document.write(myDate);  //Выведет на экран следующий результат: Mon May 22 2017 11:11:00 GMT+0300 (RTZ 2 (зима))

//toLocaleString() - Возвращает объект типа String содержащий дату в длинном формате, например "10 январь 2017г. 12:26:01"
//в соответствии с региональными настройками операционной системы, в которой запущен скрипт.  Внешне разница будет, например,
//между странами в которых распространено 12-часовое обозначение времени, по сравнению с 24-часовым.
//Применение
//var a = new Date();
//console.log(a.toLocaleString())

//toLocaleTimeString() - преобразовывает данные о времени в строку, используя настройки форматирования операционной системы,
//в которой выполняется скрипт.
//Применение
//var a = new Date();
//console.log(a.toLocaleTimeString())

//toLocaleDateString() - выполняет преобразование, аналогичное предыдущему, но с датой.
//Применение
//var a = new Date();
//console.log(a.toLocaleDateString())