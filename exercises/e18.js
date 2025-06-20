/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const yearCounts = data.asteroids.reduce(function(acc, asteroid) {
    const year = asteroid.discoveryYear;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});
  
  const maxEntry = Object.entries(yearCounts).reduce(function(max, current) {
    if (current[1] > max[1]) {
      return current;
    }
    else {
      return max;
    }
  });

  return parseInt(maxEntry[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
