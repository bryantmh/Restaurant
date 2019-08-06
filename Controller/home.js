////////////////////
// Home Component //
////////////////////

const dayConversion = {
    'Sun': 7,
    'Mon': 1,
    'Tue': 2,
    'Wed': 3,
    'Thu': 4,
    'Fri': 5,
    'Sat': 6
}



const home = Vue.component('home', {
    template: homeHTML,

    data() {
        return {
            date: '',
            time: '',
            allRestaurants: [],
            openRestaurants: [],
        }
    },

    methods: {

        getOpenRestaurants(date, timeIn) {
            var tempDate = date.split('-');
            var origDay = new Date(tempDate[1] + '/' + tempDate[2] + '/' + tempDate[0]);
            var day = origDay.getDay();
            var hour = new Date('Jan 15, 1995 ' + timeIn).getHours();
            var minute = new Date('Apr 6, 1830 ' + timeIn).getMinutes();
            this.openRestaurants = [];
            var self = this;

            this.allRestaurants.forEach(function(restaurant) {
                restaurant.times.forEach(function(datetime) {

                    var time = self.getTime(datetime, day);

                    //If you've made it this far, the day exists, now time to check the time
                    self.checkTime(day, origDay, time, hour, minute, restaurant, datetime);
                });
            });
            // this.openRestaurants = openRestaurants;
        },

        onSubmit(evt) {
            evt.preventDefault();
            this.getOpenRestaurants(this.date, this.time);
        },

        getHoursAndMinutes(time, isPM = false) {
            if (time.indexOf(':') != -1) {
                if (isPM) {
                    hour = parseInt(time.substring(0, time.indexOf(':'))) + 12;
                }
                else {
                    hour = time.substring(0, time.indexOf(':'));
                }
                minutes = time.substring(time.indexOf(':') + 1, time.indexOf(':') + 3);
            }
            else {
                if (isPM) {
                    hour = parseInt(time.substring(0, time.indexOf(' '))) + 12;
                }
                else {
                    hour = time.substring(0, time.indexOf(' '));
                }
                minutes = 0;
            }
            if (!isPM) {
                if (hour == 12) {
                    hour = 0;
                }
            }
            else {
                if (hour == 24) {
                    hour = 12;
                }
            }
            return {'hour': hour, 'minutes': minutes};
        },

        getTime(datetime, day) {
            var time = null

            var firstDay = '';
            var firstDayNum = 0;
            var lastDay = '';
            var lastDayNum = 0;
            var additionalDay = '';
            var additionalDayNum = -1;

            if (datetime.substring(3,4) == '-') {
                firstDay = datetime.substring(0,3);
                firstDayNum = dayConversion[firstDay];
                lastDay = datetime.substring(4,7);
                lastDayNum = dayConversion[lastDay];

                if (datetime.substring(7,8) ==',') {
                    additionalDay = datetime.substring(9,12);
                    additionalDayNum = dayConversion[additionalDay];
                }
                else {
                    additionalDayNum = -1;
                }

                if (day == 0) {
                    day = 7;
                }
                if ((firstDayNum <= day && lastDayNum >= day) || day == additionalDayNum) {
                    //Congratulations, the day has been found!
                    if (additionalDayNum == -1) {
                        // Use a different Index
                        time = datetime.substring(8);
                    }
                    else {
                        time = datetime.substring(13);
                    }
                }
            }
            else if (datetime.substring(3,4) == ',') {
                additionalDay = datetime.substring(0,3);
                additionalDayNum = dayConversion[additionalDay];
                firstDay = datetime.substring(5,8);
                firstDayNum = dayConversion[firstDay];
                lastDay = datetime.substring(9,12);
                lastDayNum = dayConversion[lastDay];
                time = datetime.substring(13);
            }
            else {
                firstDay = datetime.substring(0,3);
                firstDayNum = dayConversion[firstDay];
                if (firstDayNum == day) {
                    time = datetime.substring(4);
                }
            }
            return time;
        },

        checkTime(day, origDay, time, hour, minute, restaurant, datetime) {
            if (time != null) {
                var startEnd = time.split('-');
                var startTime = startEnd[0].trim();
                var endTime = startEnd[1].trim();
                var startHour = 0;
                var endHour = 0;
                var startMinute = 0;
                var endMinute = 0;
                var retTime = {};

                if (/am/.test(startTime)) {
                    retTime = this.getHoursAndMinutes(startTime);
                }
                else {
                    retTime = this.getHoursAndMinutes(startTime, true);
                }
                startHour = retTime['hour'];
                startMinute = retTime['minutes'];

                if (/pm/.test(endTime)) {
                    retTime = this.getHoursAndMinutes(endTime, true);
                }
                else {                            
                    retTime = this.getHoursAndMinutes(endTime);
                }
                endHour = retTime['hour'];
                endMinute = retTime['minutes'];

                if (endHour < startHour) {
                    if ((startHour <= hour && hour <= 23) || hour == 0 && minute == 0) {
                        if (hour == startHour) {
                            if (startMinute <= minute) {
                                this.openRestaurants.push(restaurant);
                            }
                        }
                        else if (hour == endHour) {
                            if (endMinute >= minute) {
                                this.openRestaurants.push(restaurant);
                            }
                        }
                        else {
                            this.openRestaurants.push(restaurant);
                        }
                    }
                    else {
                        day += 1;
                        if (day == 8) {
                            day = 1;
                        }
                        var tomorrow = new Date();
                        tomorrow.setDate(origDay.getDate() + 1);
                        time = this.getTime(datetime, tomorrow.getDay());
                        console.log(time);
                        if (time != null) {
                            if (hour <= endHour) {
                                if (hour == endHour) {
                                    if (minute <= endMinute) {
                                        this.openRestaurants.push(restaurant);
                                    }
                                }
                                else {
                                    this.openRestaurants.push(restaurant);
                                }
                               
                            }
                        }

                    }
                }

                if (startHour <= hour && endHour >= hour) {
                    if (hour == startHour) {
                        if (startMinute <= minute) {
                            this.openRestaurants.push(restaurant);
                        }
                    }
                    else if (hour == endHour) {
                        if (endMinute >= minute) {
                            this.openRestaurants.push(restaurant);
                        }
                    }
                    else {
                        this.openRestaurants.push(restaurant);
                    }
                }
            }
        }


    },

    watch: {

    },

    mounted() {
        axios
            .get('/Model/rest_hours.json')
            .then(response => (this.allRestaurants = response.data))
    },

});
