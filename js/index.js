function reversFun(arg, index) {
    var x = document.getElementById("divnumberone");
    var y = document.getElementById("divnumbertwo");
    var z = document.getElementById("divnumbertree");
    if (arg === 0) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else if (arg === 1) {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";

        let tableDb = document.querySelector("#fillse_table_tbody");

        let trone = document.createElement("tr");
        tableDb.appendChild(trone);

        let troneTdone = document.createElement("td");
        troneTdone.setAttribute("class", "tr-first-td");
        trone.append(troneTdone);

        let chekInput = document.createElement("input");
        chekInput.setAttribute("type", "checkbox");
        chekInput.setAttribute("name", "vehicle");
        chekInput.setAttribute("value", "db");
        troneTdone.innerHTML = dbInfoObj[index].tab;
        troneTdone.appendChild(chekInput);

        let tdtwo = document.createElement("td");
        trone.appendChild(tdtwo);

        let imgone = document.createElement("img");
        imgone.setAttribute("src", "img/b_no_favorite.png");
        imgone.setAttribute("alt", "star");
        tdtwo.appendChild(imgone);

        let imgtwo = document.createElement("img");
        imgtwo.setAttribute("src", "img/bd_browse.png");
        imgtwo.setAttribute("alt", "overview");
        tdtwo.appendChild(imgtwo);

        let tedtwoA = document.createElement("a");
        tedtwoA.setAttribute("href", "#");
        tedtwoA.innerHTML = "Обзор";
        tdtwo.appendChild(tedtwoA);

        let imgthree = document.createElement("img");
        imgthree.setAttribute("src", "img/b_props.png");
        imgthree.setAttribute("alt", "Structure");
        tdtwo.appendChild(imgthree);

        let tedtwoAtwo = document.createElement("a");
        tedtwoAtwo.setAttribute("href", "#");
        tedtwoAtwo.innerHTML = "Структура";
        tdtwo.appendChild(tedtwoAtwo);

        let imgfore = document.createElement("img");
        imgfore.setAttribute("src", "img/b_select.png");
        imgfore.setAttribute("alt", "search");
        tdtwo.appendChild(imgfore);
        //
        let aSerch = document.createElement("a");
        aSerch.setAttribute("href", "#");
        aSerch.innerHTML = "Структура";
        tdtwo.appendChild(aSerch);

        let tdtree = document.createElement("td");
        trone.appendChild(tdtree);

        let par = document.createElement('a');
        par.setAttribute("href", "#");
        par.innerHTML = "~0";
        tdtree.appendChild(par);

        let tdtreeimg = document.createElement("img");
        tdtreeimg.setAttribute("src", "img/b_help.png");
        tdtreeimg.setAttribute("alt", "logo_for_help");
        tdtree.appendChild(tdtreeimg);

        let tdfore = document.createElement("td");
        tdfore.innerHTML = dbInfoObj[index].tipe;
        trone.appendChild(tdfore);

        let tdfive = document.createElement("td");
        tdfive.innerHTML = dbInfoObj[index].unicode;
        trone.appendChild(tdfive);
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
            for (let i = 0; i < data.length ; i++){
                console.log(data[i]);
            }

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
                button.setAttribute("onclick", "reversFun(" + (+as + 2) + ", " + (+as) + ")");
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