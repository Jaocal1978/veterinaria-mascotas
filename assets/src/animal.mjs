import { Propietario } from "./propietario.mjs";

class Animal extends Propietario
{
    #tipo
    constructor(nombre, direccion, telefono, tipo)
    {
        super(nombre, direccion, telefono);
        this.#tipo = tipo;
    }

    get tipo()
    {
        return this.#tipo;
    }
}

export { Animal }