export class HerramientaInformatica{
 
    constructor(
        private _id: number,
        private _herramienta: string,
        private _nivel: string
    ){}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get herramienta(): string {
        return this._herramienta;
    }
    public set herramienta(value: string) {
        this._herramienta = value;
    }
    public get nivel(): string {
        return this._nivel;
    }
    public set nivel(value: string) {
        this._nivel = value;
    }


}