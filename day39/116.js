"use strict";
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
function getSeasonName(season) {
    switch (season) {
        case Season.Spring:
        case Season.Summer:
            return "It's either spring or summer!";
        case Season.Autumn:
            return "It's autumn!";
        case Season.Winter:
            return "It's winter!";
        default:
            return "Invalid season!";
    }
}
const currentSeason = Season.Spring;
console.log(getSeasonName(currentSeason));
