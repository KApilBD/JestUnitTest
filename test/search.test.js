const googlesearch = require('./search');

dbMock = [
    'google.com',
    'gmail.com',
    'drive.g.com',
    'photos.com',
    'cook.com',
    'sharechat.com',
    'hiymy.com'
]

describe('google search', () => {
    it('google search api test', () => {
        expect('hello').toBe('hello');
    })

    it('check', () => {
        expect(googlesearch('coo', dbMock)).toEqual(['cook.com'])
    })

    it('to work with undefined and null input', () => {
        expect(googlesearch(undefined, dbMock)).toEqual([]);
        expect(googlesearch(null, dbMock)).toEqual([]);
    })

    it('does not return more then 3 matchs', () => {
        expect(googlesearch('.com', dbMock).length).toEqual(3)
    })
})