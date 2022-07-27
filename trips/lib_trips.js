"use strict";

class Trip {
  constructor(destination, miles, gallons) {
    this.destination = destination;
    this.miles = parseFloat(miles);
    this.gallons = parseFloat(gallons);
  }

  get isValid() {
    // a read-only property
    if (this.destination == "" || isNaN(this.miles) || isNaN(this.gallons)) {
      return false;
    } else if (this.miles <= 0 || this.gallons <= 0) {
      return false;
    } else {
      return true;
    }
  }

  get mpg() {
    // a read-only property
    return this.miles / this.gallons;
  }

  toString() {
    const mpg = this.mpg.toFixed(1);
    return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
  }
}

const trips = [];

const push = (trip) => {
  // only allow Trip objects to be added to array
  if (trip instanceof Trip) {
    trips.push(trip);
  }
};

const totalMpg = () => {
  // a read-only property
  let totalMiles = 0;
  let totalGallons = 0;
  for (let trip of trips) {
    totalMiles += trip.miles;
    totalGallons += trip.gallons;
  }
  return totalMiles / totalGallons;
};

const toString = () => {
  let str = "";
  for (let trip of trips) {
    str += trip.toString() + "\n";
  }
  str += "\nCumulative MPG: " + totalMpg().toFixed(1);
  return str;
};

export { Trip, push, totalMpg, toString };
