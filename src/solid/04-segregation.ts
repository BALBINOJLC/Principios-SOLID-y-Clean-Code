

//TODO: principíos de segregación de interfaces
interface Bird {  //Pajaro
    eat(): void;
}

interface  SwimmerBird { //Pajaro nadador
    swim(): void;
}

interface RunningBird { //Pajaro corredor
    run(): void;
}

interface FlyingBird { //Pajaro volador
    fly(): number;
}

class Tucan implements Bird, FlyingBird { //Tucan
    public swim(): void { }
    public fly(): number {return 12 };
    public eat(): void { };
}

class Hummunbird implements Bird, FlyingBird { //Colibri
    public fly(): number {return 1 }; //retorna la cantidad de kilometros que vuela
    public eat(): void { };
}

class Ostrich implements Bird, RunningBird { //Avestruz
    public eat(): void { };
    public run(): void { };
}

class Penguin implements Bird, SwimmerBird { // Pinguino
    public eat(): void { };
    public swim(): void { };
}