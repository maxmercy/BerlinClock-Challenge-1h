var BerlinClock = {
    tick: function() {
        var time = new Date(),
            second = time.getSeconds();
        minute = time.getMinutes();
        hour = time.getHours();
        this.updateHours()
        this.updateMinutes()
        this.updateClock(hour, minute, second)
    },

    updateSeconds: function(second) {
        $('.secondsCircle').toggleClass('yellow');
    },

    updateHours: function() {
        nbr = Math.floor(hour / 5)
        nbrRedFive = $('#hoursOfFive .red').size();
        if (nbr != nbrRedFive) {
            if (nbr < nbrRedFive) {
                $("#hoursOfFive .ticker").removeClass('red');
            }
            $("#hoursOfFive .ticker:lt(" + nbr + ")").addClass('red');
        }
        nbrRest = hour - nbr * 5
        nbrRedFiveOne = $('#hoursOfOne .red').size();
        if (nbrRest != nbrRedFiveOne) {
            if (nbrRest < nbrRedFiveOne) {
                $("#hoursOfOne .ticker").removeClass('red');
            }
            $("#hoursOfOne .ticker:lt(" + nbrRest + ")").addClass('red');
        }
    },

    updateMinutes: function() {
        nbr = Math.floor(minute / 5)
        nbrYellowFive = $('#minutesOfFive .yellow').size();
        if (nbr != nbrYellowFive) {
            if (nbr < nbrYellowFive) {
                $("#minutesOfFive .ticker").removeClass('yellow');
                  $("#minutesOfFive .ticker").removeClass('red');
            }
            $("#minutesOfFive .ticker:lt(" + nbr + ")").addClass('yellow');
            $("#minutesOfFive .yellow:nth-child(3n)").addClass('red');
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
        $('#clock').empty();
        if (minute <10) { min = "0" + minute}
        $('#clock').append( hour+":"+min+":"+second );


    },
    reset: function() {
    }
}

setInterval(function() {
    BerlinClock.tick()
    BerlinClock.updateSeconds()
}, 1000);
