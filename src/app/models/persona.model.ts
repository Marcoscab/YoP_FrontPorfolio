export class Persona{



 constructor(private _id:number, private _nombre:string,private _apellido:string,private _fecha_nacimiento:Date, 
    private _empresa_actual:string, private _profesion:string, private _domicilio: string, private _acerca_de:string,
    private _url_foto_perfil:string,private _url_banner:string){

 }

 //Getters y Setters
 set id(id:number){
    this._id=id;
 }
 get id():number{
     return this._id;
 }

set nombre(nombre:string){
    this._nombre=nombre;
}

get nombre():string{
    return this._nombre;
}

set apellido(apellido:string){
    this._apellido=apellido;
}

get apellido():string{
    return this._apellido;
}

set fecha_nacimiento(fecha_nacimiento:Date){
    this._fecha_nacimiento=fecha_nacimiento;
}

get fecha_nacimiento():Date{
    return this._fecha_nacimiento;
}

set empresa_actual(empresa_actual:string){
    this._empresa_actual=empresa_actual;
}

get empresa_actual():string{
    return this._empresa_actual;
}
     
set profesion(profesion:string){
    this._profesion=profesion;
}

get profesion():string{
    return this._profesion;
}

set domicilio(domicilio:string){
    this._domicilio=domicilio;
}

get domicilio():string{
    return this._domicilio;
}

set acerca_de(acerca_de:string){
    this._acerca_de=acerca_de;
}

get acerca_de():string{
    return this._acerca_de;
}

set url_foto_perfil(url_foto_perfil:string){
    this._url_foto_perfil=url_foto_perfil;
}

get url_foto_perfil():string{
    return this._url_foto_perfil;
}

set url_banner(url_banner:string){
    this._url_banner=url_banner;
}

get url_banner():string{
    return this._url_banner;
}


}