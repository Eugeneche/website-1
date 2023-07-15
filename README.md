Чтобы создать новую категорию
---
!!! Важно: наименование категорий, slug, cover, также, как и названифя папок, должны быть только в английской раскладке !!!: 

 = На компьютере создаем папку, например, "drone-video" !!! Только в английской раскладке !!! Название папки - часть URL- адреса.

В обычном текстовом редакторе - Блокнот - создаем новый текстовый файл. Переименовываем его, например, в index.ru.mdx (либо с любой другой локализацией - index.en.mdx).

В Github из файла index.ru.mdx из любой уже существующей категории копируем данные и вставляем в только что созданный файл. Редактируем под новую категорию.

Описание полей фалов:

"title" - заголовок категории, которые отображается на сайте; 

"seo_title" - мета-тэг title, рекомендуемое значение для наиболее важной информации - 70 знаков с пробелами (можно больше, просто в выдаче Гугла помещается только около 70 символов);

"seo_description" - мета-тэг title, рекомендуемое значение для наиболее важной информации - 150 - 170 знаков с пробелами (можно больше, просто в выдаче Гугла помещается только около 150 - 170 символов);

"category" - оставить, как есть: для категорий - значение "root" (корневой уровень) !!! Только в английской раскладке !!!;

"slug" - так же, как и название папки, она же - категория, например, "drone-video" !!! Только в английской раскладке !!!;

hero_image:
  image: "./cover.jpg" - оставить как есть (так именуется фото, которое будет использоваться для обложки)
  
  alt: "Photo events" - нужно вписать хоть что-нибудь, лучше что-то вразумительное, что кратко описывает фото, т.к. для Гугла это почти обязательный атрибут
  

Под вторыми --- под всеми полями просто пишется текст - описание категории. Если текст не готов - можно добвлять по мере готовности.

Сохраняем файл и закрываем. Копируем этот файл и вставляем в эту же папку. Переименовываем копию, например, в index.en.mdx. Редактируем для английской версии проекта. Сохраняем файл и закрываем.


 = Постуапем аналочно для следующего языка.


 = Фото для обложки преименовывается в "cover.jpg"  - маленькими буквами. !!! Только в английской раскладке !!! 


 = Для установки порядка, в котором категории будут отображаться на главной и в меню, нужно в файле order.mdx название новой папки в кавычках вписать в необходимом порядке.

!!! ПРОВЕРИТЬ НАЛИЧИЕ КАТЕГОРИИ В ФАЙЛЕ order.mdx


 = Размещение на Github:

На Github открываем папку Works. Кликаем на Add file, затем - Upload files. Перетаскиваем вновь созданную папку в появившееся поле на Github.

Внизу подтверждаем кликом кнопки Commit changes.

---

Чтобы создать новый проект: 
---

!!! Если категория для этого проекта еще не существует, выполняем предыдущий пункт. После создания категории добавляем проект.

 = На компьютере создаем папку, например, "drahoslava-florian" !!! Только в английской раскладке !!! Название папки - часть URL- адреса.

В обычном текстовом редакторе - Блокнот - создаем новый текстовый файл. Переименовываем его, например, в index.ru.mdx (либо с любой другой локализацией - index.en.mdx).

В Github из файла index.ru.mdx в аналогичном проекте копируем данные и вставляем в только что созданный файл. Редактируем под новый проект.


Описание полей фалов:

"title" - заголовок проекта, который отображается на сайте; 

"seo_title" - мета-тэг title, рекомендуемое значение для наиболее важной информации - 70 знаков с пробелами (можно больше, просто в выдаче Гугла помещается только около 70 символов); 

"seo_description" - мета-тэг title, рекомендуемое значение для наиболее важной информации - 150 - 170 знаков с пробелами (можно больше, просто в выдаче Гугла помещается только около 150 - 170 символов);

"category" - название категории в виде части URL-адреса, например, "wedding-photos" !!! Только в английской раскладке !!!;

"show_in_main_page" - будет ли показываться на главной странице. Если да - значение "yes", если нет - пустая строка.
!!! НА ГЛАВНОЙ ПРЕДУСМОТРЕНО МЕСТО ДЛЯ 3-Х ПРОЕКТОВ!!!

"slug" - так же, как и название папки, например, "drahoslava-florian" !!! Только в английской раскладке !!!

"link" - только для видео проектов, иначе - пустая строка

hero_image:
  image: "./cover.jpg" - оставить как есть (так именуется фото, которое будет использоваться для обложки)
  
  alt: "Маша и Паша" - нужно вписать хоть что-нибудь, лучше что-то вразумительное, что кратко описывает фото, т.к. для Гугла это почти обязательный атрибут
  

 = Под вторыми --- под всеми полями просто пишется текст - описание проекта. Если текст не готов - можно добвлять по мере готовности.
Сохраняем файл и закрываем. Копируем этот файл и вставляем в эту же папку. Переименовываем копию, например, в index.en.mdx. Редактируем для английской версии проекта. Сохраняем файл и закрываем.


 = Постуапем аналочно для следующего языка.

Размещаем фото проекта. Фото для обложки преименовывается в "cover.jpg" - маленькими буквами !!! Только в английской раскладке !!!. Его не нужно дублировать, просто желаемое фото для обложки переименовываем.


 = Размещение на Github:

На Github в директории Projects открываем нужную категорию. Кликаем на Add file, затем - Upload files. Перетаскиваем вновь созданную папку в появившееся поле на Github.

Внизу подтверждаем кликом кнопки Commit changes.


!!! --- ЕСЛИ ПРОЕКТ НЕ ОТОБРАЗИЛСЯ НА ГЛАВНОЙ - ПРОВЕРИТЬ ПОЛЕ "show_in_main_page".

---

 = Тексты, которые меняются в зависимости от языковой версии, находятся в i18/l10n/cs.json или en.json или ru.json соответственно.

---

 = Если на Github нужно заменить файл на новый с одним и тем же именем, например, обновленный mdx файл или фото, можно не удалять старый файл, просто затянуть новый, нажав Add file, затем - Upload files, и после подтвеждения обновлений (Commit changes) файлы обновятся автоматически.

---

 = Редактировать файлы *.mdx *.json  можно либо прямо в Github, нажав на кнопку редактирования (карандаш справа верху), либо в компьютере, открыв файл правой кнопкой мыши - Открыть с помощью - и выбрать Блокнот.

