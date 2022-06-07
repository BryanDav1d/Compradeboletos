class SliceCatal extends HTMLElement {
    //Aqui iria el codigo
    constructor() {
        super();
    }
    connectedCallback() {
        let shawRoot = this.attachShadow({ mode: 'open' });
        shawRoot.innerHTML = `
    <style>
    
    .cuadro{
        display: inline-block;
        list-style: none;
        border-radius: 15px;
        background: white;
        border:3px solid rgb(141, 80, 160);
        margin: 15px;
    }
    .catalogo{
        text-align: center;  
        margin: 20px;
        height: 100%;
        right: 20px;
        width: 80%;
        position: relative;
        left: 100px;
    }
    
    .cuadro h4 {
        margin-bottom: 10px;
        
    }
    .cuadro p{
        color: green;
        font-size: 27px;
    }
    .cimagen{
        height: 260px;
        width: 250px;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 13px;
    }
    .carrito{
        background: rgb(183, 121, 207);
        text-decoration: none;
        height: 40px;
        width: 200px;
        border-radius: 20px;
        margin: 5px;
        color: rgb(14, 34, 99);
        font-weight: bolder;
        cursor: pointer; 
    }
        
    </style>
     
    <div class="catalogo">
        <h2>Catálogo</h2>
        <div class="cuadro">
            <img src="Img/portada1.jpg" class="cimagen">
            <div class="info">
                <h4>Doctor Strange</h4>
                <p>5.00$</p>
            </div>
            <input type="button" value="VER" class="carrito">
        </div>
        <div class="cuadro">
            <img src="Img/portada2" class="cimagen">
            <div class="info">
                <h4>Scary movie</h4>
                <p>2.00$</p>
            </div>
            <input type="button" value="VER" class="carrito">
        </div>
        <div class="cuadro">
            <img src="Img/portada3.jpg" class="cimagen">
            <div class="info">
                <h4>Thor and love</h4>
                <p>7.00$</p>
            </div>
            <input type="button" value="VER" class="carrito">
        </div>
        <div class="cuadro">
            <img src="Img/portada4.jpg" class="cimagen">
            <div class="info">
                <h4>Spiderman: <br> Sin regreso a casa</h4>
                <p>5.00$</p>
            </div>
            <input type="button" value="comprar" class="carrito">
        </div>
        <div class="cuadro">
            <img src="Img/portada5.jpg" class="cimagen">
            <div class="info">
                <h4>Ton Gun Maverick</h4>
                <p>6.00$</p>
            </div>
            <input type="button" value="VER" class="carrito">
        </div>
        <div class="cuadro">
            <img src="Img/portada6.jpg" class="cimagen">
            <div class="info">
                <h4>Sonic 2</h4>
                <p>5.00$</p>
            </div>
            <input type="button" value="VER" class="carrito">
        </div>
    </div>
      `;


      
    }
}

window.customElements.define('bbem-slice-catal', SliceCatal);



class SliceComSoon extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback() {
        let shawRoot = this.attachShadow({ mode: 'open' });
        shawRoot.innerHTML = `
        <style>
    
        .cuadro{
            display: inline-block;
            list-style: none;
            border-radius: 15px;
            background: white;
            border:3px solid rgb(141, 80, 160);
            margin: 15px;
        }
        .catalogo{
            /* border: 2px solid black; */
            text-align: center;  
            margin: 20px;
            height: 100%;
            width: 80%;
            position: relative;
            left: 100px;
        }   
        .cuadro h4 {
            margin-bottom: 10px;
        }
        .cimagen{
            height: 260px;
            width: 250px;
            justify-content: space-evenly;
            align-items: center;
            border-radius: 13px;
        }
        .carrito{
            background: rgb(183, 121, 207);
            text-decoration: none;
            height: 40px;
            width: 200px;
            border-radius: 20px;
            margin: 5px;
            color: rgb(14, 34, 99);
            font-weight: bolder;
            cursor: pointer; 
        }
        .info {
            padding: 10px 20px;
        }
        .info p{
            font-size: 30px;
            color: rgb(31, 163, 31);
            font-family: Arial, Helvetica, sans-serif;
        }
        </style>

        <div class="catalogo">
        <h2>Estrenos</h2>
        <div class="cuadro">
            <img src="Img/proximo1.jpg" class="cimagen">
            <div class="info">
                <h4>Asesino Sin Memoria</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo2.jpg" class="cimagen">
            <div class="info">
                <h4>Gemelo Siniestro</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo3.jpg" class="cimagen">
            <div class="info">
                <h4>Lightyear</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo4.jpg" class="cimagen">
            <div class="info">
                <h4>Dog: Un Viaje Salvaje</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo5.jpg" class="cimagen">
            <div class="info">
                <h4>El Teléfono Negro</h4>
                <p>Proximamente</p>
            </div>
        </div>
    </div>`;
    }

}

window.customElements.define("bbem-slice-comsoon",SliceComSoon);

/*
<div class="catalogo">
        <h2>Estrenos</h2>
        <div class="cuadro">
            <img src="Img/proximo1.jpg" class="cimagen">
            <div class="info">
                <h4>Asesino Sin Memoria</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo2.jpg" class="cimagen">
            <div class="info">
                <h4>Gemelo Siniestro</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo3.jpg" class="cimagen">
            <div class="info">
                <h4>Lightyear</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo4.jpg" class="cimagen">
            <div class="info">
                <h4>Dog: Un Viaje Salvaje</h4>
                <p>Proximamente</p>
            </div>
        </div>
        <div class="cuadro">
            <img src="Img/proximo5.jpg" class="cimagen">
            <div class="info">
                <h4>El Teléfono Negro</h4>
                <p>Proximamente</p>
            </div>
        </div>
    </div>

*/
 