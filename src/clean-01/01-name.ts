(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileToEvaluate = [
        { id: 1, fRejected: false },
        { id: 2, fRejected: false },
        { id: 3, fRejected: true },
        { id: 4, fRejected: false },
        { id: 5, fRejected: false },
        { id: 7, fRejected: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = fileToEvaluate.map( file => file.fRejected );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const CurrentDay = new Date();
    
    // días transcurridos - elapsed time in days
    const daysElapsed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberPerFile = 33;
    
    // primer nombre - first name
    const firstname = 'Fernando';
    
    // primer apellido - last name
    const lastname = 'Herrera';

    // días desde la última modificación - days since modification
    const daysLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const classMaxStudent = 6;


})();
