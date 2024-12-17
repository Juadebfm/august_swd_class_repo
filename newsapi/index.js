const container = document.getElementById("newsContainer");
const newsDetails = document.getElementById("newsDetail");
const newsDetailsImage = document.getElementById("detailImage");
const newsDetailsTitle = document.getElementById("detailTitle");
const newsDetailsDescription = document.getElementById("detailDescription");
const newsDetailsAuthor = document.getElementById("detailAuthor");

// Replace with your actual News API key
const API_KEY = "YOUR_NEWS_API_KEY_HERE";

let newsData = [];

// Fetches the news data
async function fetchNews(keyword = "technology") {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    newsData = data.articles;
    renderNews(newsData);
  } catch (error) {
    console.error("Error in fetching data", error);
    if (container) {
      container.innerHTML = `
      <div class="col-span-full text-center text-red-500">
      Failed to load news. Please check your API key or internet connection
      </div>
      `;
    }
  }
}

// Renders the news data
function renderNews(articles) {
  // Added this line to check the container, in situation where there's no container element, the code will resolve itself
  if (!container) return;

  //If found, clear it's content
  container.innerHTML = "";

  // Check if the article data is available and if it's not an em
  if (!articles || articles.length === 0) {
    container.innerHTML = `
    <div class="col-span-full text-center text-red-500">
    No news articles found
    </div>
    `;
    return;
  }

  // Remains the same, i removed the "index" in the foreach loop because in this case and implementation, it's not needed
  articles.forEach((article) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer";

    card.innerHTML = `
      <img src="${article.urlToImage || "./star.jpg"}" alt="${
      article.title || "Alt Text"
    }" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h2 class="text-lg font-bold">${article.title || "News Title"}</h2>
        <p class="text-gray-600">${
          article.description || "News Description"
        }</p>
        <a href="${article.url}" class="text-blue-500 hover:text-blue-700">
          Read More
        </a>
      </div>
    `;

    card.addEventListener("click", () => {
      showDetailView(article);
    });

    container.appendChild(card);
  });
}

// Show full news detail when card is clicked
function showDetailView(article) {
  if (!container || !newsDetails) return;

  container.classList.add("hidden");
  newsDetails.classList.remove("hidden");

  if (newsDetailsImage)
    newsDetailsImage.src = article.urlToImage || "./star.jpg";
  if (newsDetailsTitle)
    newsDetailsTitle.textContent = article.title || "News Title";
  if (newsDetailsAuthor) {
    newsDetailsAuthor.textContent = `By ${
      article.author || "Random"
    } on ${new Date(article.publishedAt).toLocaleDateString()}`;
  }
  if (newsDetailsDescription) {
    newsDetailsDescription.textContent =
      article.content || "No additional content available";
  }
}

// Event Listener for the back button, this removes the News card details div from view and shows back the container full with news cards
document.getElementById("backButton")?.addEventListener("click", () => {
  if (container && newsDetails) {
    container.classList.remove("hidden");
    newsDetails.classList.add("hidden");
  }
});

const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearSearch");

let searchTimeout;

// notice that there's a "?" in front of this variables (searchInput and clearButton), that's because we want to ensure that they're available before use, it's a new way of conditionally chanining values. We want to minimize opportunities where our code breaks
searchInput?.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const searchTerm = e.target.value.trim();

  // Debouncing to reduce excessive API calls
  searchTimeout = setTimeout(() => {
    if (searchTerm) {
      fetchNews(searchTerm);
      clearButton?.classList.remove("hidden");
    } else {
      fetchNews();
      clearButton?.classList.add("hidden");
    }
  }, 500);
});

clearButton?.addEventListener("click", () => {
  if (searchInput) searchInput.value = "";
  fetchNews();
  clearButton?.classList.add("hidden");
});

// Initial load
fetchNews();
