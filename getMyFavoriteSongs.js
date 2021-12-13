//auth token scoped to only user-library-read access:
//Authorization: Bearer BQBEDdtJIPOiWvr5NvTBZ3BJ3BJ5Rpm6Tf3HWqCMSHDGuz3WBeuIhz1nMvB1MOsYc_0a-uyYqjtpT0qYU7C9OjgHebUd4BpISG4Y7jHAO3cRWGJmrNpLmrBmn2NM9x9jQsa1f7lIJwUY73jxURs8kNJnTw

//curl -X "GET" "https://api.spotify.com/v1/me/tracks?limit=50&offset=0" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBEDdtJIPOiWvr5NvTBZ3BJ3BJ5Rpm6Tf3HWqCMSHDGuz3WBeuIhz1nMvB1MOsYc_0a-uyYqjtpT0qYU7C9OjgHebUd4BpISG4Y7jHAO3cRWGJmrNpLmrBmn2NM9x9jQsa1f7lIJwUY73jxURs8kNJnTw"

import fetch from 'node-fetch';

const response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50&offset=0', {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQBEDdtJIPOiWvr5NvTBZ3BJ3BJ5Rpm6Tf3HWqCMSHDGuz3WBeuIhz1nMvB1MOsYc_0a-uyYqjtpT0qYU7C9OjgHebUd4BpISG4Y7jHAO3cRWGJmrNpLmrBmn2NM9x9jQsa1f7lIJwUY73jxURs8kNJnTw"
    }
});
const data = await response.json();
const tracks = {}
console.log(data)
console.log("data.items: " + data.items)
for (const [key, value] of Object.entries(data.items)) {
    id = value.id
    tracks[id] = {
        "name": value.name,
        "artists": value.artists
    }
}

console.log(tracks);