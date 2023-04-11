export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let fizz = n % 5 === 0;
        let buzz = n % 3 === 0;
        if (fizz && buzz) {
            this.message = 'FizzBuzz';
        } else if (fizz) {
            this.message = 'Fizz';
        } else if(buzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}
