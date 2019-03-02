export const age = (planet, seconds) => {
  
  const earthYearInSeconds = 31557600;

  const planetCheck = {
    earth: earthYearInSeconds,
    mercury: earthYearInSeconds * 0.2408467,
    venus: earthYearInSeconds * 0.61519726,
    mars: earthYearInSeconds * 1.8808158,
    jupiter: earthYearInSeconds * 11.862615,
    saturn: earthYearInSeconds * 29.447498,
    uranus: earthYearInSeconds * 84.016846,
    neptune: earthYearInSeconds * 164.79132
  };

  return Math.round((seconds / planetCheck[planet]) * 100) / 100
}