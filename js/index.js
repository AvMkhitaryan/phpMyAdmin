function reversFun(arg) {

    let content = document.getElementById("revFun");

    if (arg === 0) {
        content.innerHTML = ` <div class="col-7">
                                <div class="col-divs">
                                    <h3 class="h3-style">Основные настройки</h3>
                                    <div class="d-flex h3-big-div">
                                        <div>
                                            <img src="img/s_asci.png" alt="logo">
                                        </div>
                                        <div>
                                            <p>Сопоставление кодировки соединения</p>
                                        </div>
                                        <div>
                                            <img src="img/b_help.png" alt="logo">
                                        </div>
                                        <div class="col-divs-Sel_Opt">
                                            <select>
                                                <option value="utf8mb4_1">utf8mb4_1_general_ci</option>
                                                <option value="utf8mb4_2">utf8mb4_2</option>
                                                <option value="utf8mb4_3">utf8mb4_3</option>
                                                <option value="utf8mb4_4" selected>utf8mb4_4</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-divs">
                                    <h3 class="h3-style">Настройки внешнего вида</h3>
                                    <div class="d-flex h3-big-div">
                                        <div>
                                            <img src="img/s_lang.png" alt="logo">
                                        </div>
                                        <div>
                                            <p>Язык-Language</p>
                                        </div>
                                        <div>
                                            <img src="img/b_help.png" alt="logo">
                                        </div>
                                        <div class="col-divs-Sel_Opt">
                                            <select>
                                                <option value="English">English</option>
                                                <option value="Armenian">Armenian</option>
                                                <option value="Eussian" selected>Russina</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex h3-big-div">
                                        <div>
                                            <img src="img/s_theme.png" alt="logo">
                                        </div>
                                        <div>
                                            <p>Тема:</p>
                                        </div>
                                        <div class="col-divs-Sel_Opt">
                                            <select>
                                                <option value="pmahomme" selected>pmahomme</option>
                                                <option value="origin">Origin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex h3-big-div">
                                        <div>
                                            <i class="fa fa-circle" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <p>Размер шрифта: </p>
                                        </div>
                                        <div>
                                            <img src="img/b_help.png" alt="logo">
                                        </div>
                                        <div class="col-divs-Sel_Opt">
                                            <select>
                                                <option value="90%">90%</option>
                                                <option value="85%">85%</option>
                                                <option value="82%" selected>82%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex h3-big-div">
                                        <div>
                                            <img src="img/b_tblops.png" alt="logo">
                                        </div>
                                        <div>
                                            <a href="">Дополнительные настройки</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-5">
                                <div class="col-divs">
                                    <h3 class="h3-style">Сервер баз данных</h3>
                                    <div class="d-flex h3-big-div">
                                        <ul>
                                            <li>Сервер: 127.0.0.1 via TCP/IP</li>
                                            <li>Тип сервера: MariaDB</li>
                                            <li>Соединение сервера: SSL не используетс</li>
                                            <li>Версия сервера: 10.4.6-MariaDB - mariadb.org binary distribution</li>
                                            <li>Версия протокола: 10</li>
                                            <li>Пользователь: root@localhost</li>
                                            <li>Кодировка сервера: cp1252 West European (latin1)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-divs">
                                    <h3 class="h3-style">Веб-сервер</h3>
                                    <div class="d-flex h3-big-div">
                                        <ul>
                                            <li>Apache/2.4.41 (Win64) OpenSSL/1.1.1c PHP/7.3.9</li>
                                            <li>Версия клиента базы данных: libmysql - mysqlnd 5.0.12-dev - 20150407 -
                                                $Id: 7cc7cc96e675f6d72e5cf0f267f48e167c2abb23 $
                                            </li>
                                            <li>PHP расширение: mysqliДокументация curlДокументация
                                                mbstringДокументация
                                            </li>
                                            <li>Версия PHP: 7.3.9</li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="col-divs">
                                    <h3 class="h3-style">phpMyAdmin</h3>
                                    <div class="d-flex h3-big-div">
                                        <ul>
                                            <li>Информация о версии: 4.9.0.1, последняя стабильная версия: <a href="">4.9.2</a>
                                            </li>
                                            <li><a href="">Документация</a></li>
                                            <li><a href="">Официальная страница phpMyAdmin</a></li>
                                            <li><a href="">Пожертвовать</a></li>
                                            <li><a href="">Получить помощь</a></li>
                                            <li><a href="">Список изменений</a></li>
                                            <li><a href="">Лицензия</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> `
    } else if (arg === 1) {
        content.innerHTML = "fdgdjkfg";
    } else {
        content.innerHTML = "db";
    }
}


let myObjects = [
    {
        name: 'Базы данных',
        src: 'img/s_db.png'
    },
    {
        name: 'Sql',
        src: 'img/b_sql.png'
    },
    {
        name: 'Состояние',
        src: 'img/s_status.png'
    },
    {
        name: 'Учетные записи пользователей',
        src: 'img/s_rights.png'
    },
    {
        name: 'Экспорт',
        src: 'img/b_export.png'
    },
    {
        name: 'Импорт',
        src: 'img/b_import.png'
    },
    {
        name: 'Настройки',
        src: 'img/b_tblops.png'
    },
    {
        name: 'Репликация',
        src: 'img/s_replication.png'
    },
    {
        name: 'Переменные',
        src: 'img/s_link.png'
    },
    {
        name: 'Кодировки',
        src: 'img/s_asci.png'
    },
    {
        name: 'Типы таблиц',
        src: 'img/b_engine.png'
    },
    {
        name: 'Расширения',
        src: 'img/b_plugin.png'
    },


];

let idNav = document.getElementById('nb-id');

for (let i in myObjects) {

    let a = document.createElement('a');
    a.setAttribute('class', 'nav-a-style');
    a.setAttribute('href', '#');
    idNav.appendChild(a);

    let img = document.createElement('img');
    img.setAttribute('src', myObjects[i].src);
    img.setAttribute("alt", "logo");
    a.appendChild(img);

    a.innerHTML += myObjects[i].name;
}

let collObj = [
    {
        nameone: "databasa",
        title: [
            {n: "Dtabasa1-1"},
            {n: "Dtabasa1-2"},

        ]
    },
    {
        nameone: "databasa11",
        title: [
            {n: "Dtabasa2-1"},
            {n: "Dtabasa2-2"},

        ]
    },

];

let cdiv = document.getElementById("collapse-divs");

for (let as in collObj) {

    let div = document.createElement("div");
    div.setAttribute("class", "db-divs");
    cdiv.appendChild(div);

    let divone = document.createElement("div");
    div.appendChild(divone);

    let a = document.createElement("a");
    a.setAttribute("href", "#demo" + as);
    a.setAttribute("class", "btn btn-link");
    a.setAttribute("data-toggle", "collapse");
    divone.appendChild(a);

    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-plus");
    i.setAttribute("aria-hidden", "true");
    a.appendChild(i);

    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-link");
    button.setAttribute("onclick", "reversFun(" + (+as + 2) + ")");
    button.innerHTML = collObj[as].nameone;
    divone.appendChild(button);

    let divonea = document.createElement("div");
    divonea.setAttribute("id", "demo" + as);
    divonea.setAttribute("class", "collapse first-demo");
    cdiv.appendChild(divonea);


    for (let vs in collObj[as].title) {


        let divA = document.createElement("a");
        divA.setAttribute("href", "#demo" + (+vs+(+as)));
        divA.setAttribute("class", "btn btn-link last-toggle");
        divA.setAttribute("data-toggle", "collapse");
        divonea.appendChild(divA);

        let iconsOne = document.createElement("i");
        iconsOne.setAttribute("class", "fa fa-plus");
        iconsOne.setAttribute("aria-hidden", "true");
        iconsOne.innerHTML = collObj[as].title[vs].n;
        divA.appendChild(iconsOne);

        let divtwo = document.createElement("div");
        divtwo.setAttribute("id", "demo" + + (+vs+(+as)));
        divtwo.setAttribute("class", "collapse demo-info");
        divonea.appendChild(divtwo);

        let paragraf = document.createElement("p");
        paragraf.innerHTML = "text";
        divtwo.appendChild(paragraf);

    }
}

// for (let as in collObj) {
//
//     //<div class="db-divs">
//     let colldiv = document.createElement("div");
//     colldiv.setAttribute("class", "db-divs");
//     cdiv.appendChild(colldiv);
//
//     //div
//     let colldivone = document.createElement("div");
//     colldiv.appendChild(colldivone);
//
//     let colldivoneAAA = document.createElement("a");
//     colldivoneAAA.setAttribute("href", "#demo" + (+as));
//     colldivoneAAA.setAttribute("class", "btn btn-link");
//     colldivoneAAA.setAttribute("data-toggle", "collapse");
//     colldivone.appendChild(colldivoneAAA);
//
//     let iconfirst = document.createElement("i");
//     iconfirst.setAttribute("class", "fa fa-plus");
//     iconfirst.setAttribute("aria-hidden", "true");
//     colldivoneAAA.appendChild(iconfirst);
//
//     let butone = document.createElement("button");
//     butone.setAttribute("class", "btn btn-link");
//     butone.setAttribute("onclick", "reversFun(" + (+as+2) + ")");
//     butone.innerHTML = collObj[as].nameone;
//     colldivoneAAA.appendChild(butone);
//
//     let infodiv = document.createElement("div");
//     infodiv.setAttribute("id", "demo");
//     infodiv.setAttribute("class", "collapse first-demo");
//     colldiv.appendChild(infodiv);
//
//     for (let vs in collObj[as].title) {
//
//         let divA = document.createElement("a");
//         divA.setAttribute("href", "#demo" + (+vs));
//         divA.setAttribute("class", "btn btn-link last-toggle");
//         divA.setAttribute("data-toggle", "collapse");
//         infodiv.appendChild(divA);
//
//         let iconsOne = document.createElement("i");
//         iconsOne.setAttribute("class", "fa fa-plus");
//         iconsOne.setAttribute("aria-hidden", "true");
//         iconsOne.innerHTML=collObj[as].title[vs].n;
//         divA.appendChild(iconsOne);
//
//         let divtwo=document.createElement("div");
//         divtwo.setAttribute("id","demo"+ (+vs));
//         divtwo.setAttribute("class","collapse demo-info");
//         infodiv.appendChild(divtwo);
//
//         let paragraf=document.createElement("p");
//         paragraf.innerHTML="text";
//         divtwo.appendChild(paragraf);
//
//
//     }
//
//
// }