
//TODO: evitar de usar estos metodos, ya que no son seguros y dificil de testear
const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}

)();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();