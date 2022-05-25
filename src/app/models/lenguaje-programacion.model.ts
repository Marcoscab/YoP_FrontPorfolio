export class LenguajeProgramacion{

constructor(
    private _id: number, 
    private _lenguaje: string,
    private _nivel: string
    ){};

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get lenguaje(): string {
        return this._lenguaje;
    }
    public set lenguaje(value: string) {
        this._lenguaje = value;
    }
    public get nivel(): string {
        return this._nivel;
    }
    public set nivel(value: string) {
        this._nivel = value;
    }

}