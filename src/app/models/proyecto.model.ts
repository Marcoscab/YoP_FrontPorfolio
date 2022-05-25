export class Proyecto{


    constructor(
        private _id: number,
        private _nombre: string,
        private _tipo: string,
        private _descripcion: string,
        private _fecha_creacion: string,
        private _url_imagen: string,
        private _url_sitio: string,
    ){}


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get fecha_creacion(): string {
        return this._fecha_creacion;
    }
    public set fecha_creacion(value: string) {
        this._fecha_creacion = value;
    }
    public get url_imagen(): string {
        return this._url_imagen;
    }
    public set url_imagen(value: string) {
        this._url_imagen = value;
    }

    public get url_sitio(): string {
        return this._url_sitio;
    }
    public set url_sitio(value: string) {
        this._url_sitio = value;
    }




}