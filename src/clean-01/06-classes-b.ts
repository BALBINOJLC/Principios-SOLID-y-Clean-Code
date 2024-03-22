(() => {

    // Se le tiene que asignar a cada clase una responsibilidad unica

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        firtsName      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public firtsName     : string;

        constructor({ firtsName, gender, birthdate }: PersonProps ){
            this.firtsName      = firtsName;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        birthdate : Date;
        email     : string;
        gender    : Gender;
        firtsName : string;
        role      : string;
    }

    class User extends Person {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            birthdate,
            email,
            gender,
            firtsName,
            role,
        }: UserProps ) {
            super({ firtsName, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        firtsName            : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder  : string;


        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            firtsName,
            gender,
            birthdate,
        }: UserSettingsProps ) {
            super({ email, role, firtsName, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        firtsName: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();