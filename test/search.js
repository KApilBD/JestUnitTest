const googledb = [
    'google.com',
    'gmail.com',
    'drive.g.com',
    'photos.com',
    'googlesheets.com',
    'hotmail.com'
]

const googlesearch = (searchitem, db) => {
    const match = db.filter(website => {
        return website.includes(searchitem);
    })

    return match.length > 3 ? match.slice(0, 3) : match;
}

console.log(googlesearch('photo', googledb));

module.exports = googlesearch;