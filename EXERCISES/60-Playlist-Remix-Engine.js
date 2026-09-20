/** In this lab, you will build a program that creates a single remix playlist from multiple playlists submitted by listeners.
 *
 * Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists may show up too many times. Your job is to work through these playlists step by step: combine them into one list, score each song, remove duplicate songs, limit how often the same artist appears, and then create a final play order.
 */

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

/** You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm.
 *
 * If the input is not an array, flattenPlaylists should @return an empty array. An example playlist has been provided for you. You can use this example to test out your function.
 *
 * flattenPlaylists should @return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.
 */
function flattenPlaylists(arrOfPlaylists) {
  if (!Array.isArray(arrOfPlaylists)) {
    return [];
  }

  const aPlaylist = [];
  playlistsLoop: for (let i = 0; i < arrOfPlaylists.length; i++) {
    const playlist = arrOfPlaylists[i];
    trackLoop: for (let t = 0; t < playlist.length; t++) {
      const track = playlist[t];
      track.source = [i, t];
      aPlaylist.push(track);
    }
  }

  return aPlaylist;
}

const aPlaylist = flattenPlaylists(playlists);
// console.log(aPlaylist)

/** You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties)
 *
 * @returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).
 */
function scoreTracks(aPlaylist) {
  const scoredPlaylist = [];
  for (let t = 0; t < aPlaylist.length; t++) {
    const track = aPlaylist[t];
    track.score = track.votes * 10 - Math.abs(track.bpm - 120);
    scoredPlaylist.push(track);
  }

  return scoredPlaylist;
}

const scoredPlaylist = scoreTracks(aPlaylist);
// console.log(scoredPlaylist);

/** You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks
 *
 * @returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.
 */
function dedupeTracks(scoredPlaylist) {
  const dedupedPlaylist = [...scoredPlaylist];

  const occured = [];
  for (let t = 0; t < dedupedPlaylist.length; t++) {
    const track = dedupedPlaylist[t];
    if (occured.includes(track.trackId)) {
      dedupedPlaylist.splice(t, 1);
      t -= 1;
      continue;
    }
    occured.push(track.trackId);
  }

  return dedupedPlaylist;
}

const dedupedPlaylist = dedupeTracks(scoredPlaylist);
// console.log(dedupedPlaylist);

/** You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist.
 *
 * @returns a new array where no artist appears more times than the given number, keeping the earliest occurrences. */

function enforceArtistQuota(dedupedPlaylist, maxPerArtist) {
  const enforcedPlaylist = [...dedupedPlaylist];

  let occCount = {};
  for (let t = 0; t < enforcedPlaylist.length; t++) {
    const track = enforcedPlaylist[t];
    if (!Object.hasOwn(occCount, [track.artist])) {
      occCount[track.artist] = 1;
      continue;
    }
    occCount[track.artist] += 1;

    if (occCount[track.artist] > maxPerArtist) {
      enforcedPlaylist.splice(t, 1);
      t -= 1;
    }
  }

  return enforcedPlaylist;
}

const enforcedPlaylist = enforceArtistQuota(dedupedPlaylist, 1);
// console.log(enforcedPlaylist);

/** You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota
 *
 * @returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.
 */
function buildSchedule(enforcedPlaylist) {
  let trackSchedule = [];

  for (let t = 0; t < enforcedPlaylist.length; t++) {
    const track = enforcedPlaylist[t];
    trackSchedule.push({ slot: t + 1, trackId: track.trackId });
  }

  return trackSchedule;
}

const trackSchedule = buildSchedule(enforcedPlaylist);
// console.log(trackSchedule);

/** You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist.
 *
 * The function should @return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.
 */
function remixPlaylist(arrOfPlaylists, maxPerArtist) {
  const aPlaylist = flattenPlaylists(arrOfPlaylists);
  const scoredPlaylist = scoreTracks(aPlaylist);
  const dedupedPlaylist = dedupeTracks(scoredPlaylist);
  const enforcedPlaylist = enforceArtistQuota(dedupedPlaylist, maxPerArtist);
  const trackSchedule = buildSchedule(enforcedPlaylist);
  return trackSchedule;
}

const remix = remixPlaylist(playlists, 1);
console.log(remix);
