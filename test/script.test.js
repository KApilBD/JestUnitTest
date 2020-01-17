const fetch = require('node-fetch');
const swapi = require('./script');

// it('calls swapi to get people', (done) => {
//     expect.assertions(1); // define how many assertion going to be in test case, here in this case 1
//     swapi.getPeople(fetch).then(data => {
//         expect(data.count).toEqual(87); // assertion
//         done();
//     })
// })
//without Done and assertions
it('calls swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87); 
    })
})


it('calls swapi to get people with promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5)
    })
})