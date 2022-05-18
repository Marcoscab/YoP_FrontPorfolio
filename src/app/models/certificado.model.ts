
export class Certificado{


    constructor(private _id:number, private _certificado:string){}


set id(id:number){
    this._id= id;
}

get id():number{
    return this._id;
}


set certificado(certificado:string){
    this._certificado=certificado;
}

get certificado():string{
    return this._certificado;
}


}