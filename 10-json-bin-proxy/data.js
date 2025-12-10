const JSON_BIN_BASE_URL = "https://animated-space-train-5g5vj6g4x96xhvp6v-3001.app.github.dev";
const JSON_BIN_ID = "69391b34d0ea881f401ee47d";
const MASTER_KEY = "";

async function loadData() {
    try {
        const config = {
            "headers": {
                "Content-Type": "application/json",
                "X-Master-Key": MASTER_KEY
            }
        }
        const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`, config);
        return response.data.record;
    } catch (e) {
        // if there is any error of any kind, return an []
        return [];
    }
}

async function saveData(books) {
    try {
        const config = {
            "headers": {
                "Content-Type": "application/json",
                "X-Master-Key": MASTER_KEY
            }
        }

        // axios.put has three parameters:
        // 1. the URL endpoint
        // 2. the data to send over
        // 3. configuration options
        const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}`, books, config);
        return response.data;

    } catch (e) {
        return {
            "error": e
        }
    }
}

function addBook(books, title, author, pages) {
    const newBook = {
        "id": Math.floor(Math.random() * 10000 + 1),
        "title": title,
        "author": author,
        "pages": pages
    }

    books.push(newBook);
    saveData(books);
}