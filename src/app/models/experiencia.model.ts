export class Experiencia {

    constructor(
        private _id: number,
        private _empresa: string,
        private _cargo: string,
        private _dedicacion: string,
        private _fecha_inicio: string,
        private _fecha_fin: string,
        private _domicilio: string,
        private _url_logo: string,
    ) { }

    public get url_logo(): string {
        return this._url_logo;
    }
    public set url_logo(value: string) {
        this._url_logo = value;
    }
    public get domicilio(): string {
        return this._domicilio;
    }
    public set domicilio(value: string) {
        this._domicilio = value;
    }
    public get fecha_fin(): string {
        return this._fecha_fin;
    }
    public set fecha_fin(value: string) {
        this._fecha_fin = value;
    }
    public get fecha_inicio(): string {
        return this._fecha_inicio;
    }
    public set fecha_inicio(value: string) {
        this._fecha_inicio = value;
    }
    public get dedicacion(): string {
        return this._dedicacion;
    }
    public set dedicacion(value: string) {
        this._dedicacion = value;
    }
    public get cargo(): string {
        return this._cargo;
    }
    public set cargo(value: string) {
        this._cargo = value;
    }
    public get empresa(): string {
        return this._empresa;
    }
    public set empresa(value: string) {
        this._empresa = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}