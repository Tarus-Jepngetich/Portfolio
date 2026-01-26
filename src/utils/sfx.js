let audio;

export function playPageFlip(volume = 0.3) {
  try {
    if (!audio) {
      audio = new Audio("/sfx/page-flip.mp3"); // ✅ public folder URL
      audio.preload = "auto";
    }

    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;

    // Try to play; ignore if browser blocks it
    audio.play().catch((err) => {
      // Uncomment to debug:
      // console.log("Audio blocked or failed:", err);
    });
  } catch (e) {
    // Uncomment to debug:
    // console.log("Audio error:", e);
  }
}
