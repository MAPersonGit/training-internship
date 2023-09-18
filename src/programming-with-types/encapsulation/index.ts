/**
 * Weak encapsulation
 */

class WeakSafeDivisor {
    divisor: number = 1;

    setDivisor(n: number) {
        if (n === 0) throw new Error('x shoud be greather than 0')

        this.divisor = n;
    }

    divide(n: number) {
        return n / this.divisor
    }
}

const weakSafeDivisor = new WeakSafeDivisor();

try {
    weakSafeDivisor.setDivisor(0)
} catch (error) {
    console.log('Catched')    
}


function exploit(safeDivisor: any): number {
    const sd = new safeDivisor(1)

    sd.divisor = 0;
    return sd.divide(1)
}

/**
 * Here we bypassed safe mechanic of division x on zero
 */
try {
    exploit(WeakSafeDivisor)
} catch (error) {
    console.log('Catched b/c we used WeakSafeDivisor')    
}



/**
 * Trully safe division supported by type-system`s requirements encapsulation
 */
class SafeDivisor {
    private divisor: number = 1;

    setDivisor(n: number) {
        if (n === 0) throw new Error('x shoud be greather than 0')

        this.divisor = n;
    }

    divide(n: number) {
        return n / this.divisor
    }
}

/**
 * Here we bypassed safe mechanic of division x on zero
 */
try {
    exploit(SafeDivisor)
} catch (error) {
    console.log('Showed b/c we tried to changed constant variable')    
}