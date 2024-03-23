import { Animal } from "./animal.mjs";

class Mascota extends Animal
{   
    #enfermedad
    #nombreAnimal
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad)
    {
        super(nombre, direccion, telefono, tipo)
        this.#nombreAnimal = nombreAnimal;
        this.#enfermedad = enfermedad;
    }

    get nombreAnimal()
    {
        return this.#nombreAnimal;
    }

    set nombreAnimal(a)
    {
        this.#nombreAnimal = a;
    }

    get enfermedad()
    {
        return this.#enfermedad;
    }

    set enfermedad(e)
    {
        this.#enfermedad = e;
    }
}

export { Mascota }