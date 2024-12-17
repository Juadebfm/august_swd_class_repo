// junk
// const fetchNews2 = (keyword = "technology") => {
//   fetch("https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

const container = document.getElementById("newsContainer");
const newsDetails = document.getElementById("newsDetail");
const newsDetailsImage = document.getElementById("detailImage");
const newsDetailsTitle = document.getElementById("detailTitle");
const newsDetailsDescription = document.getElementById("detailDescription");
const newsDetailsAuthor = document.getElementById("detailAuthor");

let newsData = [];

// Fetches the news data
async function fetchNews(keyword = "technology") {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    // const success = data.status;
    // const totalNews = data.totalResults;
    newsData = data.articles;
    renderNews(newsData);
  } catch (error) {
    console.error("Error in fetching data", error);
    container.innerHTML = `
    <div class="col-span-full text-center text-red-500">
    Failed to load news.Please check your API key or/and internet connection
    </div>
    `;
  }
}

// renders the news data
function renderNews(articles) {
  container.innerHTML = "";

  // one check if at all we are receiving article data from the fetch call in the fetchNews function
  // check to ensure that even if we're recieving the article data, it is not an empty array.
  if (!articles || articles.length === 0) {
    container.innerHTML = `
    <div class="col-span-full text-center text-red-500">
    No news article found
    </div>
    `;

    return;
  }

  articles.forEach((article, index) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer";

    card.innerHTML = `
card.innerHTML = `
<img src="${article.urlToImage || "./star.jpg"}" alt="${
      article.title || "Alt Text"
    }" class="w-full h-48 object-cover"/>
    <div class="p-4">
    <h2 class="text-lg font-bold">${article.title || "News Title"}</h2>
    <p class="text-gray-600">${article.description || "News Description"}</p>
    <a href="${article.url}" class="text-blue-500 hover:text-blue-700">
    Read More
    </a>
`;

console.log('Rendering article:', article.title);
console.log('Article URL:', article.url);
console.log('Article Image URL:', article.urlToImage);

`;

    card.addEventListener("click", () => {
      showDetailView(article);
    });

    container.appendChild(card);
  });
}

// show full news detail when card is news card is clicked
function showDetailView(article) {
  container.classList.add("hidden");
  newsDetails.classList.remove("hidden");

  newsDetailsImage.src = article.urlToImage || "./star.jpg";
  newsDetailsTitle.textContent = article.title || "News Title";
  newsDetailsAuthor.textContent = `By ${
    article.author || "Random"
  } on ${new Date(article.publishedAt).toLocaleDateString()}`;
  newsDetailsDescription.textContent =
    article.content || "No addition content available";
}

document.getElementById("backButton").addEventListener("click", () => {
  container.classList.remove("hidden");
  newsDetails.classList.add("hidden");
});

// search functionality
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearSearch");

let searchTimeout;

searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const searchTerm = e.target.value.trim();

  // debouncing to reduce excessive api calls
  searchTimeout = setTimeout(() => {
    if (searchTerm) {
      fetchNews(searchTerm);
      clearButton.classList.remove("hidden");
    } else {
      fetchNews();
      clearButton.classList.add("hidden");
    }
  }, 500);
});

//clear functionlity

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  fetchNews();
  clearButton.classList.add("hidden");
});

// initial load
fetchNews();
