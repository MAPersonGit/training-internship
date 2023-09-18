// Function composition - a process of applying one function result to another.

const g = (n: number) => n + 1
const f = (n: number) => n * 2


const wait = (time: number) => new Promise((resolve, _reject) => setTimeout(resolve, time))

// wait(300).then(() => 20).then(g).then(f).then(value => console.log(`This is result - ${value}`))

// Without composition
const doStuff = (x: number) => {
    const afterG = g(x)
    const afterF = g(afterG)

    return afterF;
}

// With some composition
const doStuffBetter = (x: number) => f(g(x));


// Try to rewrite this code using composition
// const doStuff = x => {
//     const afterG = g(x);
//     console.log(`after g: ${ afterG }`);
//     const afterF = f(afterG);
//     console.log(`after f: ${ afterF }`);
//     return afterF;
//   };

const trace = (label: string) => (value: string) => {
    console.log(`${label}: ${value}`)
}


const pipe = (args: any[]) => args.reduce((res, f) => {
    if (typeof f !== 'function' && f) return f

    const subRes = f(res) ?? res 
    return subRes
}, [])

// const doStuffExc = (x:number) => {
//     const afterG = g(x) 
//     trace('G')(`${afterG}`)
    
//     const afterF = f(afterG);
//     trace('F')(`${afterF}`)

//     return afterF;
// }

pipe([
    20,
    g,
    trace('after g'),
    f,
    trace('after f')
])