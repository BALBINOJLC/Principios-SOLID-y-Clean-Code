







(() => {
    interface Person {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    interface User extends Person {
        email: string,
        role: string,
        lastAccess: Date,
    }

    interface UserSettings extends User {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    type Gender = 'M' | 'F' | 'O';


    class Person {

        constructor(
            public Person: Person,

        ) { }
    }

    class User extends Person {
        constructor(
            public User: User,
            Person: Person,
        ) {
            super(Person);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public UserSettings: UserSettings,
            User: User,
            Person: Person,

        ) {
            super(User, Person)
        }
    }



  
})();