function CrearCookie(){
        var caduca = new Date("12 31,2019");
        var hoy = new Date();
        document.cookie = "CookieDiego1 = PrimerCookie;expires="+ caduca.toGMTString();
        

}

function LeerCookie(identificador){
        alert("Entramos");
        var buscamos = identificador + "=";
        var fin = "";
        if(document.cookie.length>0){
                var inicio = document.cookie.indexOf(buscamos);
                if(inicio != -1){
                        inicio += buscamos.length;
                        fin = document.cookie.indexOf(";",inicio);
                        if(fin==-1){
                                fin = document.cookie.length;
                                alert("<p>El valor almacenado en la cokkie es: <b>" + document.cookie.substring(inicio,fin) + "</b></p.>");
                                //return unescape(document.cookie.substring(inicio,fin));
                        }
                }else alert("No encontrado");
        }
        
}

function BorrarCookie(identificador){
        var expiracion = new Date();
        expiracion.setTime(expiracion.getTime()-1);
        var nombre = identificador;
        var limpiador = " ";
        document.cookie = nombre + "=" + limpiador + "; expires=" + expiracion.toGMTString();
}