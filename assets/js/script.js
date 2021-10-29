//implementacion patron modulo 
let modulo = (()=>{
    let inyectarTodo = (url,id) => { //funcion  privada
        id.setAttribute('src', url);
        id.style.display = 'block';
    };

     //funcion publica 
    return {
        mostrarTodo: (url,id) => inyectarTodo(url,id),
    };
})();

// Se define clase padre Multimedia
class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }

    get url(){
        return this.getUrl();
    }

    set url(nueva_url){
        this.setUrl(nueva_url);
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

// se define una clase hija de Multimedia llanmada Reproductor
class Reproductor extends Multimedia {
    constructor(url,id){
        super(url);
        let _id = id;

        this.getId = ()=> _id;
    };

    // Se crea metodo playMultimedia que llama a la función pública de la IIFE
    playMultimedia(){
        modulo.mostrarTodo(this.url,this.getId());
    };

     // Método para modificar el tiempo de inicio 
    setInicio(tiempo){
        this.getId().setAttribute('src',`${this.url}?start=${tiempo}`) 
    };
};

//invocamos al metodo para cada Instancias de la clase Reproductor
let playMusica = new Reproductor("https://www.youtube.com/embed/oVWEb-At8yc",musica);
playMusica.playMultimedia();
let playPelicula = new Reproductor("https://www.youtube.com/embed/vW-PHNZ-Xww",peliculas);
playPelicula.playMultimedia();
let playSerie = new Reproductor("https://www.youtube.com/embed/wvOAA1U0li8",series);
playSerie.playMultimedia();

// Llamamos a método para cambiar tiempo de inicio de la instancia playMusica
playMusica.setInicio(70);