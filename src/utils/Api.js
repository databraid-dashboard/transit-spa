export default class Api {
  static fetchJourneys(origin, destination) {
    return fetch(
      `http://localhost:8000/directions?origin=${origin}&destination=${destination}&alternatives=true`,
    )
      .then(response => response.json())
      .catch(e => e);
  }

  static fetchAlerts() {
    return fetch(
      `http://localhost:8000/alerts`,
    )
      .then(response => response.json())
      .catch(e => e);
  }
}
