export class Usuario{
 

constructor(private _id:number, private _userName:string, private _password:string){}
   
set id(id:number ){
    this._id=id;
}
get id():number{
    return this._id;
}

set userName(userName:string){
    this._userName=userName;
}

get userName():string{
    return this._userName;
}

set password(password:string){
    this._password=password;
}

get password():string{
    return this._password;
}


}