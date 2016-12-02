var BerlinClock = {
    tick: function() {
        var time = new Date(),
            second = time.getSeconds();
        minute = time.getMinutes();
        hour = time.getHours();

        this.updateHours()
        this.updateMinutes()

    },

    updateSeconds: function(second) {
        $('.secondsCircle').toggleClass('yellow');
    },

    updateHours: function() {
        nbr = Math.floor(hour / 5)
        nbrYellowFive = $('#hoursOfFive .yellow').size();
        if (nbr != nbrYellowFive) {
            if (nbr < nbrYellowFive) {
                $("#hoursOfFive .ticker").removeClass('yellow');
            }
            $("#hoursOfFive .ticker:lt(" + nbr + ")").addClass('yellow');
        }
        nbrRest = hour - nbr * 5
        nbrYellowFiveOne = $('#hoursOfOne .yellow').size();
        if (nbrRest != nbrYellowFiveOne) {
            if (nbrRest < nbrYellowFiveOne) {
                $("#hoursOfOne .ticker").removeClass('yellow');
            }
            $("#hoursOfOne .ticker:lt(" + nbrRest + ")").addClass('yellow');
        }
    },

    updateMinutes: function() {
        nbr = Math.floor(minute / 5)
        nbrYellowFive = $('#minutesOfFive .yellow').size();
        if (nbr != nbrYellowFive) {
            if (nbr < nbrYellowFive) {
                $("#minutesOfFive .ticker").removeClass('yellow');
            }
            $("#minutesOfFive .ticker:lt(" + nbr + ")").addClass('yellow');
        }
        nbrRest = minute - nbr * 5
        nbrYellowFiveOne = $('#minutesOfOne .yellow').size();
        if (nbrRest != nbrYellowFiveOne) {
            if (nbrRest < nbrYellowFiveOne) {
                $("#minutesOfOne .ticker").removeClass('yellow');
            }
            $("#minutesOfOne .ticker:lt(" + nbrRest + ")").addClass('yellow');
        }
    },

    updateClock: function(hour, minute, second) {
      console.log()
    },
    reset: function() {
    }
}

setInterval(function() {
    BerlinClock.tick()
    BerlinClock.updateSeconds()
}, 1000);
