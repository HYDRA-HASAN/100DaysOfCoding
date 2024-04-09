enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
  }
  
  function getSeasonName(season: Season): string {
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
  
  const currentSeason: Season = Season.Spring;
  console.log(getSeasonName(currentSeason));
  