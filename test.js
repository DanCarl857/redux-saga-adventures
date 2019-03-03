function sayHi() {
    // statements
    return 'hi';
    return 'world'; // never executed
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
    yield 'hey';
    yield 'world';
    yield 'guys';
    return 'hi';
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next()); // returns an object

const resultGeneratorForof = sayHiGenerator();

for (const iterator of resultGeneratorForof) {
    console.log(iterator);
}

function* newGenerator() {
    yield 'something';
    const final = yield 'give me value';
    return 'final value';
}

const newGenerator = newGenerator();