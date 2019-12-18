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
        content.innerHTML = ` <div>
                                <div>
                                    <h3>Базы данных</h3>
                                </div>
                                <div class="d-flex">
                                    <div class="revFun-divs">
                                        <img src="img/b_newdb.png" alt="logo">
                                    </div>
                                    <div class="revFun-divs">
                                        <div>Создать базу данных</div>
                                    </div>
                                    <div class="revFun-divs">
                                        <img src="img/b_help.png" alt="logo">
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="revFun-divs">
                                        <input type="text" placeholder="имя база данных">
                                    </div>
                                    <div class="revFun-divs">
                                        <select>
                                            <option value="utf-8.1">UTF-8.1</option>
                                            <option value="utf-8.2">UTF-8.2</option>
                                            <option value="utf-8.3">UTF-8.3</option>
                                            <option value="utf-8.1" selected>UTF-8.3</option>
                                        </select>
                                    </div>
                                    <div class="revFun-divs">
                                        <button>Создать</button>
                                    </div>
                                </div>
                                <div>
                                    <div class="fil-div-h3"><h3>Фильтры</h3></div>
                                    <div class="d-flex search-filt">
                                        <div>
                                            <div class="search-filt-div">Содержит слово: </div>
                                        </div>
                                        <div>
                                            <input type="text">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <table style="width:100%">
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Age</th>
                                        </tr>
                                        <tr>
                                            <td>Jill</td>
                                            <td>Smith</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td>Eve</td>
                                            <td>Jackson</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>80</td>
                                        </tr>
                                    </table>

                                </div>
                            </div>  `;
    } else {
        content.innerHTML = `<div class="filse">
                                <fieldset id="fld">
                                    <legend id="leg">Фильтры</legend>
                                    <div class="d-flex">
                                        <h6>Содержит слово:</h6>
                                        <input type="text" id="fld-input">
                                    </div>
                                </fieldset>
                            </div>
                            <div class="filse">
                                <table class="tab">
                                    <tr>
                                        <th>Таблица</th>
                                        <th>Действие</th>
                                        <th>Строки</th>
                                        <th>Тип</th>
                                        <th>Сравнение</th>
                                    </tr>
<!--                                    <tr>-->
<!--                                        <td class="tr-first-td"><input type="checkbox" name="vehicle" value="db">sdsdghfghfghgfhfghfghs</td>-->
<!--                                        <td>-->
<!--                                            <img src="img/b_no_favorite.png" alt="star">-->
<!--                                            <img src="img/bd_browse.png" alt="overview">-->
<!--                                            <a href="#">Обзор</a>-->
<!--                                            <img src="img/b_props.png" alt="Structure">-->
<!--                                            <a href="#">Структура</a>-->
<!--                                            <img src="img/b_select.png" alt="search">-->
<!--                                            <a href="">Поиск</a>-->
<!--                                        </td>-->
<!--                                        <td>-->
<!--                                            <a href="#">~0</a>-->
<!--                                            <img src="img/b_docs.png" alt="what?">-->
<!--                                        </td>-->
<!--                                        <td>Aria</td>-->
<!--                                        <td>utf8_general_ci</td>-->
<!--                                    </tr>-->
                                </table>
                            </div> `;

        let tableDb = document.getElementsByClassName("tab");

        for (let h in dbInfoObj) {
            let trone = document.createElement("tr");
            tableDb.appendChild(trone);

            let troneTdone=document.createElement("td");
            troneTdone.setAttribute("class","tr-first-td");
            trone.appendChild(troneTdone);

            let chekInput = document.createElement("input");
            chekInput.setAttribute("type","checkbox");
            chekInput.setAttribute("name","vehicle");
            chekInput.setAttribute("value","db");
            troneTdone.innerHTML=dbInfoObj[h].tab;
            troneTdone.appendChild(chekInput);

            let tdtwo=document.createElement("td");
            trone.appendChild(tdtwo);

            let imgone =document.createElement("img");
            imgone.setAttribute("src","img/b_no_favorite.png");
            imgone.setAttribute("alt","star");
            tdtwo.appendChild(imgone);

            let imgtwo =document.createElement("img");
            imgtwo.setAttribute("src","img/bd_browse.png");
            imgtwo.setAttribute("alt","overview");
            tdtwo.appendChild(imgtwo);

            let tedtwoA =document.createElement("a");
            tedtwoA.setAttribute("href","#");
            tedtwoA.innerHTML="Обзор";
            tdtwo.appendChild(tedtwoA);

            let imgthree =document.createElement("img");
            imgthree.setAttribute("src","img/b_props.png");
            imgthree.setAttribute("alt","Structure");
            tdtwo.appendChild(imgthree);

            let tedtwoAtwo =document.createElement("a");
            tedtwoAtwo.setAttribute("href","#");
            tedtwoAtwo.innerHTML="Структура";
            tdtwo.appendChild(tedtwoAtwo);

            let imgfore =document.createElement("img");
            imgfore.setAttribute("src","img/b_select.png");
            imgfore.setAttribute("alt","search");
            tdtwo.appendChild(imgfore);

            let aSerch =document.createElement("a");
            aSerch.setAttribute("href","#");
            aSerch.innerHTML="Структура";
            tdtwo.appendChild(aSerch);

        }

    }
}

let dbInfoObj = [
    {
        tab: "dt",
        tipe: "arial",
        unicode: "utf8_general_ci",
    },
    {
        tab: "dtbb",
        tipe: "arial1",
        unicode: "utf16_general_ci",
    }

];


$(document).ready(function () {
    $.ajax({
        url: 'json/index.json',
        data: 'myObjects',
        dataType: 'json',
        success: function (data) {
            let idNav = document.getElementById('nb-id');

            for (let i in data.myObjects) {

                let a = document.createElement('a');
                a.setAttribute('class', 'nav-a-style');
                a.setAttribute('href', '#');
                idNav.appendChild(a);

                let img = document.createElement('img');
                img.setAttribute('src', data.myObjects[i].src);
                img.setAttribute("alt", "logo");
                a.appendChild(img);

                a.innerHTML += data.myObjects[i].name;
            }
        }, error: function (error) {
            console.log(error)
        }
    });

    $.ajax({
        url: 'json/index2.json',
        data: 'collObj',
        dataType: 'json',
        success: function (data) {
            let cdiv = document.getElementById("collapse-divs");

            for (let as in data.collObj) {

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
                i.setAttribute("class", "fa fa-plus test");
                i.setAttribute("aria-hidden", "true");
                a.appendChild(i);

                let button = document.createElement("button");
                button.setAttribute("class", "btn btn-link");
                button.setAttribute("onclick", "reversFun(" + (+as + 2) + ")");
                button.innerHTML = data.collObj[as].nameone;
                divone.appendChild(button);

                let divonea = document.createElement("div");
                divonea.setAttribute("id", "demo" + as);
                divonea.setAttribute("class", "collapse first-demo flex-column");
                cdiv.appendChild(divonea);


                for (let vs in data.collObj[as].title) {

                    let divA = document.createElement("a");
                    divA.setAttribute("href", "#demo" + ((+vs + as + 2) ** 4));
                    divA.setAttribute("class", "btn btn-link last-toggle");
                    divA.setAttribute("data-toggle", "collapse");
                    divonea.appendChild(divA);

                    let iconsOne = document.createElement("i");
                    iconsOne.setAttribute("class", "fa fa-plus test1");
                    iconsOne.setAttribute("aria-hidden", "true");
                    iconsOne.innerHTML = data.collObj[as].title[vs].n;
                    divA.appendChild(iconsOne);

                    let divtwo = document.createElement("div");
                    divtwo.setAttribute("id", "demo" + ((+vs + as + 2) ** 4));
                    divtwo.setAttribute("class", "collapse demo-info");
                    divonea.appendChild(divtwo);

                    let paragraf = document.createElement("p");
                    paragraf.innerHTML = "text";
                    divtwo.appendChild(paragraf);

                }
            }
        }, error: function (error) {
            console.log(error)
        }
    })
});


$(document).on('click', '.test', function () {
    $(this).toggleClass('fa-minus');

});
$(document).on('click', '.test1', function () {
    $(this).toggleClass('fa-minus');
});