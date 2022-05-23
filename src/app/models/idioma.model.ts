export class Idioma{

constructor(
    private _id: number, 
    private _idioma: string, 
    private _nivel: string
    ){}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get idioma(): string {
        return this._idioma;
    }
    public set idioma(value: string) {
        this._idioma = value;
    }
    public get nivel(): string {
        return this._nivel;
    }
    public set nivel(value: string) {
        this._nivel = value;
    }




}