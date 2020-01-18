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


it('get people returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [0, 1, 2, 3, 4, 5, 6]
            })
        }))
        expect.assertions(2);
        return swapi.getPeoplePromise(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
        })
})