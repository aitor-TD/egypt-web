// FUNCIONES PARA MODIFICAR LAS FOTOS DE "BOOK YOUR OWN TRIP"
function modificacion(idcaja) {
    if (window.innerWidth > 929) {
        if (idcaja == 'anclaEstancias') {
            document.getElementById("anclaEstancias").style = "width: 65%; filter: grayscale(0%);";
            document.getElementById("anclaVuelos").style = "width: 35%";
        }
        if (idcaja == 'anclaVuelos') {
            document.getElementById("anclaVuelos").style = "width: 65%; filter: grayscale(0%);";
            document.getElementById("anclaEstancias").style = "width: 35%;";
        }
    } else {
        if (idcaja == 'anclaEstancias') {
            document.getElementById("anclaEstancias").style = "filter: grayscale(0%);";
        }
        if (idcaja == 'anclaVuelos') {
            document.getElementById("anclaVuelos").style = "filter: grayscale(0%);";
        }
    }
}

function normalidad(idcaja) {
    if (window.innerWidth > 928) {
        if (idcaja == 'anclaEstancias') {
            document.getElementById("anclaEstancias").style = "width: 50%; filter: grayscale(100%);"
            document.getElementById("anclaVuelos").style = "width: 50%";
        }
        if (idcaja == 'anclaVuelos') {
            document.getElementById("anclaEstancias").style = "width: 50%; filter: grayscale(100%);";
            document.getElementById("anclaVuelos").style = "width: 50%";
        }
    } else {
        if (idcaja == 'anclaEstancias') {
            document.getElementById("anclaEstancias").style = "filter: grayscale(100%);";
        }
        if (idcaja == 'anclaVuelos') {
            document.getElementById("anclaVuelos").style = "filter: grayscale(100%);";
        }
    }
}





// FUNCIONES PARA QUE FUNCIONE LA SELECCIÓN DE HOTELES

function agrandamiento(idhotel) {
    if (window.innerWidth > 929) {

        if (idhotel == 'ohri') {
            document.getElementById("ohri").style = "width: 61%;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 1;";

            document.getElementById("cairo").style = "width: 19%;";
            document.getElementById("ramses").style = "width: 19%;";
        }

        if (idhotel == 'cairo') {
            document.getElementById("cairo").style = "width: 61%;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 1;";

            document.getElementById("ohri").style = "width: 19%;";
            document.getElementById("ramses").style = "width: 19%;";
        }

        if (idhotel == 'ramses') {
            document.getElementById("ramses").style = "width: 61%;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 1;";


            document.getElementById("cairo").style = "width: 19%;";
            document.getElementById("ohri").style = "width: 19%;";
        }
    }

    if (window.innerWidth <= 929) {
        if (idhotel == 'ohri') {
            document.getElementById("ohri").style = "height: 250px;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 1;";

            document.getElementById("cairo").style = "height: 130px;";
            document.getElementById("ramses").style = "height: 130px;";
        }

        if (idhotel == 'cairo') {
            document.getElementById("cairo").style = "height: 250px;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 1;";

            document.getElementById("ohri").style = "height: 130px;";
            document.getElementById("ramses").style = "height: 130px;";
        }

        if (idhotel == 'ramses') {
            document.getElementById("ramses").style = "height: 250px;";
            document.getElementById("btn-reservas").style = "display: flex;";

            document.getElementById("default-info").style = "opacity: 0;";
            document.getElementById("desc-ohri").style = "opacity: 0;";
            document.getElementById("desc-cairo").style = "opacity: 0;";
            document.getElementById("desc-ramses").style = "opacity: 1;";


            document.getElementById("cairo").style = "height: 130px;";
            document.getElementById("ohri").style = "height: 130px;";
        }
    }

}





// FUCIONES PARA LAS RUTAS

var banderaRuta1 = true;
var banderaRuta2 = true;
var banderaRuta3 = true;

function alto(idRuta) {
    if (idRuta == "ruta1") {
        if (banderaRuta1 == true) {
            // REINICIO DE LAS OTRAS RUTAS
            document.getElementById('desc-rutas2').style = "height: 0%; opacity: 0;";
            document.getElementById('desc-rutas3').style = "height: 0%; opacity: 0;";
            document.getElementById('flechita2').style = "transform: rotate(0deg)";
            document.getElementById('flechita3').style = "transform: rotate(0deg)";
            document.getElementById('ruta2').style = "height: 500px";
            document.getElementById('ruta3').style = "height: 500px";
            document.getElementById('opacoRutas2').style = "height: 45%";
            document.getElementById('opacoRutas3').style = "height: 45%";
            banderaRuta2 = true;
            banderaRuta3 = true;

            document.getElementById('flechita1').style = "transform: rotate(180deg)";
            document.getElementById('ruta1').style = "height: 950px";
            document.getElementById('opacoRutas1').style = "height: 80%";
            document.getElementById('desc-rutas1').style = "height: 82%; opacity: 1;";

            banderaRuta1 = false;
        } else {
            document.getElementById('flechita1').style = "transform: rotate(0deg)";
            document.getElementById('ruta1').style = "height: 500px";
            document.getElementById('opacoRutas1').style = "height: 45%";
            document.getElementById('desc-rutas1').style = "height: 0%; opacity: 0;";
            banderaRuta1 = true;
        }
    }

    if (idRuta == "ruta2") {
        if (banderaRuta2 == true) {
            document.getElementById('desc-rutas1').style = "height: 0%; opacity: 0;";
            document.getElementById('desc-rutas3').style = "height: 0%; opacity: 0;";
            document.getElementById('flechita1').style = "transform: rotate(0deg)";
            document.getElementById('flechita3').style = "transform: rotate(0deg)";
            document.getElementById('ruta1').style = "height: 500px";
            document.getElementById('ruta3').style = "height: 500px";
            document.getElementById('opacoRutas1').style = "height: 45%";
            document.getElementById('opacoRutas3').style = "height: 45%";
            banderaRuta1 = true;
            banderaRuta3 = true;

            document.getElementById('flechita2').style = "transform: rotate(180deg)";
            document.getElementById('ruta2').style = "height: 950px";
            document.getElementById('opacoRutas2').style = "height: 80%";
            document.getElementById('desc-rutas2').style = "height: 82%; opacity: 1;";

            banderaRuta2 = false;
        } else {
            document.getElementById('flechita2').style = "transform: rotate(0deg)";
            document.getElementById('ruta2').style = "height: 500px";
            document.getElementById('opacoRutas2').style = "height: 45%";
            document.getElementById('desc-rutas2').style = "height: 0%; opacity: 0;";
            banderaRuta2 = true;
        }
    }

    if (idRuta == "ruta3") {
            if (banderaRuta3 == true) {
                document.getElementById('desc-rutas1').style = "height: 0%; opacity: 0;";
                document.getElementById('desc-rutas2').style = "height: 0%; opacity: 0;";
                document.getElementById('flechita2').style = "transform: rotate(0deg)";
                document.getElementById('flechita1').style = "transform: rotate(0deg)";
                document.getElementById('ruta2').style = "height: 500px";
                document.getElementById('ruta1').style = "height: 500px";
                document.getElementById('opacoRutas2').style = "height: 45%";
                document.getElementById('opacoRutas1').style = "height: 45%";
                banderaRuta2 = true;
                banderaRuta1 = true;

                document.getElementById('flechita3').style = "transform: rotate(180deg)";
                document.getElementById('ruta3').style = "height: 950px";
                document.getElementById('opacoRutas3').style = "height: 80%";
                document.getElementById('desc-rutas3').style = "height: 82%; opacity: 1;";

                banderaRuta3 = false;
            } else {
                document.getElementById('flechita3').style = "transform: rotate(0deg)";
                document.getElementById('ruta3').style = "height: 500px";
                document.getElementById('opacoRutas3').style = "height: 45%";
                document.getElementById('desc-rutas3').style = "height: 0%; opacity: 0;";
                banderaRuta3 = true;
            }
    }
}



// +++++++++++++++++++++++++++++++++++RUTAS CON LÍNEA DE TIEMPO

// ++++++++++++++++++++++RUTA 1

$('#dia1ruta1').on('click', function() {
    document.getElementById('routeContent1').innerHTML = "";
    document.getElementById('routeContent1').innerHTML = "<p>Day 1:</p>After arriving at the airport you will be picked up from it and moved to your hotel, you can eat in the hotel's restaurant while you look at the pyramids. After eating you can rest in the pool until a bus pick you up to see the city. After visitng the city you will go back to the hotel to rest.";
    
    document.getElementById('dia1ruta1').style = "background-color: gray;";
    document.getElementById('dia2ruta1').style = "background-color: white;";
    document.getElementById('dia3ruta1').style = "background-color: white;";
    
    $('#book-btn1').css('opacity', '1');
});

$('#dia2ruta1').on('click', function() {
    document.getElementById('routeContent1').innerHTML = "";
    document.getElementById('routeContent1').innerHTML = "<p>Day 2:</p>The second day you will visit the pyraimds at 9am, a bus will pick you up from the hotel and you will be back at 1 pm, the rest of the day will be free. <br> You can go anywhere you want, like going shopping, eating in the best restaurants or walking around the city.";
    
    document.getElementById('dia1ruta1').style = "background-color: white;";
    document.getElementById('dia2ruta1').style = "background-color: gray;";
    document.getElementById('dia3ruta1').style = "background-color: white;";
    
    $('#book-btn1').css('opacity', '1');
});

$('#dia3ruta1').on('click', function() {
    document.getElementById('routeContent1').innerHTML = "";
    document.getElementById('routeContent1').innerHTML = "<p>Day 3:</p>The third and last day you can choose to visit the city again and go shopping or you can go to the Great Shphinx of guiza. After that you can eat with the group or you can go to the hotel and enjoy a pool evening with your family and friends.";
    
    document.getElementById('dia1ruta1').style = "background-color: white;";
    document.getElementById('dia2ruta1').style = "background-color: white;";
    document.getElementById('dia3ruta1').style = "background-color: gray;";
    
    $('#book-btn1').css('opacity', '1');
});



// ++++++++++++++++++++++RUTA 2

$('#dia1ruta2').on('click', function() {
    document.getElementById('routeContent2').innerHTML = "";
    document.getElementById('routeContent2').innerHTML = "<p>Day 1:</p>You will arrive to the airport in the morning and you will move to our office, afer packing your stuff you will be moved to the dessert and start the adventure! We are going to pick camels and our 3 days adventure will begin.We are sleeping in the desert the next 3 days, we will eat normal food and we have enough water for all ouf your crew.";
    
    document.getElementById('dia1ruta2').style = "background-color: gray;";
    document.getElementById('dia2ruta2').style = "background-color: white;";
    document.getElementById('dia3ruta2').style = "background-color: white;";
    
    $('#book-btn2').css('opacity', '1');
});

$('#dia2ruta2').on('click', function() {
    document.getElementById('routeContent2').innerHTML = "";
    document.getElementById('routeContent2').innerHTML = "<p>Day 2:</p>After waking up at 7am we will continue our trip, walking in the beautiful dessert, if you are tired you can always be carried by our camels, we will visit some interesting places in the dessert.";
    
    document.getElementById('dia1ruta2').style = "background-color: white;";
    document.getElementById('dia2ruta2').style = "background-color: gray;";
    document.getElementById('dia3ruta2').style = "background-color: white;";
    
    $('#book-btn2').css('opacity', '1');
});

$('#dia3ruta2').on('click', function() {
    document.getElementById('routeContent2').innerHTML = "";
    document.getElementById('routeContent2').innerHTML = "<p>Day 3:</p>We will arrive to our office, where you can take a shower, eat smething and get ready for flight back to your home. While you wait for your plane you can go to the city and spend some free time there, like eating or going shopping with your family and friends.";
    
    document.getElementById('dia1ruta2').style = "background-color: white;";
    document.getElementById('dia2ruta2').style = "background-color: white;";
    document.getElementById('dia3ruta2').style = "background-color: gray;";
    
    $('#book-btn2').css('opacity', '1');
});



// ++++++++++++++++++++++RUTA 3

$('#dia1ruta3').on('click', function() {
    document.getElementById('routeContent3').innerHTML = "";
    document.getElementById('routeContent3').innerHTML = "<p>Day 1:</p>After arrving to the airport you will pick a bus that will take you to the port, after getting into it, you will get into the boat and you can rest in your cabin until all the passengers are in, after that, we will start the trip. We will prepare a welcome party at the night while we travel next to the pyramids.";
    
    document.getElementById('dia1ruta3').style = "background-color: gray;";
    document.getElementById('dia2ruta3').style = "background-color: white;";
    document.getElementById('dia3ruta3').style = "background-color: white;";
    
    $('#book-btn3').css('opacity', '1');
});

$('#dia2ruta3').on('click', function() {
    document.getElementById('routeContent3').innerHTML = "";
    document.getElementById('routeContent3').innerHTML = "<p>Day 2:</p>We will arrive to Luxor in the morning, where you can spend all day going shopping, visiting the city and eating, the boat will part back to Cairo at 8pm, you can dinner in the boat and play board games in our grand living room.";
    
    document.getElementById('dia1ruta3').style = "background-color: white;";
    document.getElementById('dia2ruta3').style = "background-color: gray;";
    document.getElementById('dia3ruta3').style = "background-color: white;";
    
    $('#book-btn3').css('opacity', '1');
});

$('#dia3ruta3').on('click', function() {
    document.getElementById('routeContent3').innerHTML = "";
    document.getElementById('routeContent3').innerHTML = "<p>Day 3:</p>The third day we will arrive to Cairo, you can spend your free time where you want until you have to get your flight back to home. We do recommend you to eat in the best restaurant or yoy can go shopping with your family and friends.";
    
    document.getElementById('dia1ruta3').style = "background-color: white;";
    document.getElementById('dia2ruta3').style = "background-color: white;";
    document.getElementById('dia3ruta3').style = "background-color: gray;";
    
    $('#book-btn3').css('opacity', '1');
});