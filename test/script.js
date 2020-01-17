const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            return {
                count: data.count,
                results: data.results
            }
        });
};

const getPeople = async (fetch) => {
    const res = await fetch('https://swapi.co/api/people');
    const data = await res.json();
    // console.log(data);
    return {
        count: data.count,
        results: data.results
    }
};

// getPeoplePromise(fetch);

// getPeople(fetch);

module.exports = {
    getPeople,
    getPeoplePromise
}