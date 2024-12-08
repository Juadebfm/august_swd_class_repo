const container = document.getElementById("countries_container");

// 1 fetch country data
// 2 loop through the country data
// 3. and render cards

// function fetches the country data
async function fetchCountriesData() {
  try {
    // add a console.log to verify data
    console.log("Countries Data:", countries_data);
    // check if the data is valid
    if (!countries_data || !Array.isArray(countries_data)) {
      throw new Error("Something went wrong while loading data");
    }

    // function to render the countries data
    renderCountriesCards(countries_data);
  } catch (error) {
    console.log("Error", error);

    //show error to user
    container.innerHTML = `
    <div class="col-span-full text-center text-red-500">
      <p>Failed to load countries. ${error.message}</p>
    </div>
    `;
  }
}

// function to create a single country card
function createCountryCard(country) {
  // check defensively for issues
  if (!country) {
    console.error("Country not found");
    return document.createElement("div");
  }

  //create card div
  const cardDiv = document.createElement("div");

  // add styling
  // cardDiv.classList.add("bg-white", "rounded-lg", ...)
  cardDiv.className = `
  bg-white
  rounded-lg
  shadow-md
  overflow-hidden
  transition
  duration-300
  hover:shadow-xl
  `;

  // check for each property
  const population = country.population || 0;
  const area = country.area || 0;
  const region = country.region || "";
  const capital = country.capital || "";
  const languages = country.languages || [];
  const flag = country.flag || "./star.jpg";
  const name = country.name || "Country name";

  //set card content
  cardDiv.innerHTML = `
  <div class="p-8">
  <div class="flex items-center mb-4">
  <img src="${flag}" alt="${name}" class="w-16 h-16 object-cover rounded"/>
  <h2 class="text-2xl font-bold text-gray-800">${name}</h2>
  </div>
  <div>
  <p><strong>Capital:</strong> ${capital}</p>
  <p><strong>Region:</strong> ${region}</p>
  <p><strong>Population:</strong> ${population.toLocaleString()} people</p>
  <p><strong>Language:</strong> ${languages.join(", ") || "N/A"}</p>
  <p><strong>Area:</strong> ${area.toLocaleString()} km(sqr)</p>


  </div>
  </div>
  
  `;

  return cardDiv;
}

// function to render all country card
function renderCountriesCards(countries) {
  // if there is an issue with any of the functions above and no countries is entering this function through the parameter
  container.innerHTML = "";

  // create and add cards for each country
  countries.forEach((country) => {
    const countryCard = createCountryCard(country);
    container.appendChild(countryCard);
  });
}

// fetch and render country
document.addEventListener("DOMContentLoaded", fetchCountriesData);
