/*
  A greeter based on object literals and arrays.

  On a command line, pass a peraon's name and the name of a language as arguments.

  Example:

  node greeterjs. John english

  Output:

  Good afternoon, John! Happy Friday!

  Other entries to try:

  node greeter.js 賢司 japanese
  node greeter.js Carlos spanish

*/  

'use strict'

const english = {
	dayName: function() {
	    var day = "";
        switch (new Date().getDay()) {
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tues";
                break;
            case 3:
                day = "Wednes";
                break;
            case 4:
                day = "Thurs";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Satur";
                break;
        }
        return `${day}day`;
	},
	timeOfDay: function() {
        var hour = new Date().getHours();
        return (hour > 5 && hour <= 12) ? 'morning' :
                hour <= 18 ? 'afternoon' :
                hour <= 22 ? 'evening' : 'night';
	},
	greeting: function(name) {
		return `Good ${this.timeOfDay()}, ${name}! Happy ${this.dayName()}!`
	}
}

const japanese = {
	dayName: function() {
	    var day = "";
        switch (new Date().getDay()) {
            case 0:
                day = "日"; // nichiyoubi
                break;
            case 1:
                day = "月"; // gesuyoubi
                break;
            case 2:
                day = "火"; // kayoubi
                break;
            case 3:
                day = "水"; // suiyoubi
                break;
            case 4:
                day = "木"; // mokuyoubi
                break;
            case 5:
                day = "金"; // kinyoubi
                break;
            case 6:
                day = "土"; // doyoubi
                break;
        }
        return `${day}曜日`;
	},
	timeOfDay: function() {
        var hour = new Date().getHours();
        return (hour > 5 && hour <= 17) ? 'こんにちは' : 'こんばんは';  // konnichiwa, konbanwa
	},
	greeting: function(name) {
		return `${this.timeOfDay()}, ${name}さん! ${this.dayName()}を楽しんでください。` // [whatever]youbi o tanoshinde kudasai
	}
}

const spanish = {
	dayName: function() {
	    var day = "";
        switch (new Date().getDay()) {
            case 0:
                day = "domingo";
                break;
            case 1:
                day = "lunes";
                break;
            case 2:
                day = "martes";
                break;
            case 3:
                day = "miércoles";
                break;
            case 4:
                day = "jueves";
                break;
            case 5:
                day = "viernes";
                break;
            case 6:
                day = "sábado";
                break;
        }
        return `${day}`;
	},
	timeOfDay: function() {
        var hour = new Date().getHours();
        return (hour > 6 && hour <= 12) ? 'Buenos días' :
                hour <= 17 ? 'Buenas tardes' : 'Buenas noches';
	},
	greeting: function(name) {
		return `${this.timeOfDay()}, ${name}! Feliz ${this.dayName()}!`
	}
}

let phrases = [
    english,
    japanese,
    spanish
];

let languages = {
	'english': 0,
	'japanese': 1,
	'spanish': 2
}

var args = process.argv;

console.log(phrases[languages[args[3]]].greeting(args[2]));
