import { BustimeQuery } from './bustimeQuery.js';

const umQuery = new BustimeQuery("UM");
const theRideQuery = new BustimeQuery("THERIDE");
const queryObjects = [
  { name: "um", obj: umQuery },
  { name: "theRide", obj: theRideQuery }
];

document.addEventListener('DOMContentLoaded', () => {
  showRoutes();
});

function showRoutes() {
  for (const qo of queryObjects) {
    const rtContainer = document.getElementById(`${qo.name}-routes`);

    fetch(`/api/getRoutes?agency=${qo.name.toUpperCase()}`)
      .then(response => response.json())
      .then(routes => {
        if (!routes || routes.error) {
          console.error(`Error fetching routes for ${qo.name}:`, routes.error || 'Unknown error');
          return;
        }

        for (const rtInfo of routes) {
          const rtNum = rtInfo.rt;
          const rtName = rtInfo.rtnm;
          const rtColor = rtInfo.rtclr;

          const rtDiv = document.createElement('div');
          rtDiv.classList.add('rt');

          const circleDiv = document.createElement('div');
          circleDiv.classList.add('circle');
          circleDiv.style.backgroundColor = rtColor;
          circleDiv.textContent = rtNum;

          const routeName = document.createElement('h6');
          routeName.textContent = rtName;

          rtDiv.appendChild(circleDiv);
          rtDiv.appendChild(routeName);
          rtContainer.appendChild(rtDiv);
        }
      })
      .catch(error => {
        console.error(`Error fetching routes for ${qo.name}:`, error);
      });
  }
}
