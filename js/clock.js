$(document).ready(function () {
  let clock;

  // 🎯 Target your wedding date: 07 July 2025, 12:00 PM IST
  let targetDate = moment.tz("2025-07-07 12:00", "Asia/Kolkata");

  // Get the current time
  let currentDate = new Date();

  // Calculate time difference in seconds
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If wedding date already passed
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Wedding date has already passed!");
  } else {
    // Start countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("Countdown has ended!");
        }
      }
    });

    // Continuously check when it hits 0
    function checkTime() {
      let t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(checkTime, 1000);
    }

    setTimeout(checkTime, 1000);
  }

  });

