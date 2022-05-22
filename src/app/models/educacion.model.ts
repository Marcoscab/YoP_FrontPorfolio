export class Educacion {

    constructor(
        private _id: number,
        private _entidad: string,
        private _titulo: string,
        private _fecha_cursado: string,
        private _domicilio: string,
        private _url_logo: string
    ) { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get entidad(): string {
        return this._entidad;
    }
    public set entidad(value: string) {
        this._entidad = value;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get fecha_cursado(): string {
        return this._fecha_cursado;
    }
    public set fecha_cursado(value: string) {
        this._fecha_cursado = value;
    }
    public get domicilio(): string {
        return this._domicilio;
    }
    public set domicilio(value: string) {
        this._domicilio = value;
    }
    public get url_logo(): string {
        return this._url_logo;
    }
    public set url_logo(value: string) {
        this._url_logo = value;
    }

}