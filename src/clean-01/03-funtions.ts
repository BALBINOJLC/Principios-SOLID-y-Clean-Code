(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActors(Movieid: string) {
        console.log({ Movieid });
    }

    // funcion para obtener el bio del actor por el id
    function getBioUsuario(id: string) {
        console.log({ id });
    }


    interface IMovie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function Createmovie(Movie: IMovie) {
        console.log({ Movie });
    }


    interface IActor {
        fullName: string;
        birthdate: Date;
    }
    // Crea un nuevo actor
    function createActor(actor: IActor): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (actor.fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }




})();