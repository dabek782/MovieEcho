MovieEcho
MovieEcho is a simple web app built with React and TypeScript that helps users discover movies similar to the ones they type in the search box.

For example, if you search for F1, the app will suggest other racing movies and show basic details like release date, main actors, and director.

Features
✅ Search for a movie and find similar titles
✅ Get details: release year, cast, director
✅ Uses TMDB API for accurate movie data
✅ Uses LLM (e.g. OpenAI GPT) to suggest similar films if no results are found

Tech stack
React + TypeScript

Axios (for API requests)

TMDB API

OpenAI / LLM API

How to run
1️⃣ Clone the repository

git clone https://github.com/your-username/movieecho.git
cd movieecho

2️⃣ Install dependencies

npm install

3️⃣ Get your API keys

TMDB: https://www.themoviedb.org/documentation/api

OpenAI: https://platform.openai.com/

4️⃣ Add your keys to an .env file
5️⃣ Run the app

npm start