console.log("🎧 Spotify tracker running");

// ---- state ----
let lastTrack = null;

// ---- helpers ----
function getHourKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getHours()}`;
}

function increment(key) {
  chrome.storage.local.get({ stats: {} }, (res) => {
    const stats = res.stats;
    const hour = getHourKey();

    stats[hour] ??= { tracks: 0 };
    stats[hour][key]++;

    chrome.storage.local.set({ stats }, () => {
      console.log("📊 stats updated", stats[hour]);
    });
  });
}

// ---- tracker ----
setInterval(() => {
  const trackEl = document.querySelector(
    '[data-testid="nowplaying-track-link"]'
  );

  if (!trackEl) return;

  const track = trackEl.textContent.trim();
  if (!track || track === lastTrack) return;

  lastTrack = track;
  console.log("🎵 New track:", track);
  increment("tracks");

}, 5000);
