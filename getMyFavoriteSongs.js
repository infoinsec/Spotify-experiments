//auth token scoped to only user-library-read access:
//Authorization: Bearer BQBEDdtJIPOiWvr5NvTBZ3BJ3BJ5Rpm6Tf3HWqCMSHDGuz3WBeuIhz1nMvB1MOsYc_0a-uyYqjtpT0qYU7C9OjgHebUd4BpISG4Y7jHAO3cRWGJmrNpLmrBmn2NM9x9jQsa1f7lIJwUY73jxURs8kNJnTw

import fetch from 'node-fetch';

const response = await fetch('https://api.github.com/users/github');
const data = await response.json();

console.log(data);