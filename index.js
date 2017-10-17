// TODO(sdh): Simple query:
const id = 87507
fetch(`https://www.boardgamegeek.com/xmlapi2/thing?id=${id}`).then(
    x=>x.text().then(
    x=>console.log(new DOMParser().parseFromString(x, 'text/xml').firstChild)));

// See also API docs:
// https://boardgamegeek.com/wiki/page/BGG_XML_API2

// Ideas:
//  (1) Read entire collection, query for game info (maybe cache to localstorage to save time? refresh button?)
//  (2) Provide filters for mechanic, theme, player count (best vs possible), age, rating (personal vs community), play time
//  (3) Maybe expand metadata with a personal dictionary
//       - BGG allows specifying comments in individual games in collection - support TAG= syntax?
//         Allow overriding values, such as MAXPLAYERS=5 for The Birds Told Me To Do It?

// Local storage should be a versioned JSON structure, probably? Maybe a proto if we're using TS?
//  - if version mismatch then just reread - no big deal
