(() => {

    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FuitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor(color: FuitColor): string[] {
        //todo: Seguir practicando y buscar otras opciones para hacerlo

        const fruitsByColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };
        if (!Object.keys(fruitsByColor).includes(color)) throw new Error('the color must be: red, yellow, purple');

        return fruitsByColor[color];


        //todo: manera de hacerlo con switch
        // switch (color) {
        //     case 'red':
        //         return ['manzana', 'fresa'];
        //     case 'yellow':
        //         return ['piña', 'banana'];
        //     case 'purple':
        //         return ['moras', 'uvas'];
        //     default: throw new Error('the color must be: red, yellow, purple');
        // }


        //TODO: es una manera para hacerlo

        // const fruitsByColor: { [key: string]: string[] } = {
        //     'red': ['manzana', 'fresa'],
        //     'yellow': ['piña', 'banana'],
        //     'purple': ['moras', 'uvas']
        // };
        // if (fruitsByColor[color]) {
        //     return fruitsByColor[color];
        // } throw new Error('the color must be: red, yellow, purple');


        //TODO: manera original para hacerlo
        // if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps(): void | string {


        //todo: manera que lo hizo fernando

        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';


        // if (!isFirstStepWorking) {
        //     return 'First step broken.';
        // }
        // if (!isSecondStepWorking) {
        //     return 'Second step broken.';
        // }
        // if (!isThirdStepWorking) {
        //     return 'Third step broken.';
        // }
        // if (!isFourthStepWorking) {
        //     return 'Fourth step broken.';
        // }
        // return 'Working properly!';
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados

})();