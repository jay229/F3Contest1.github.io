const api1 = "https://dummyjson.com/posts";
const api2 = "https://dummyjson.com/products";
const api3 = "https://dummyjson.com/todos";

// First function to fetch API data
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(api1)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 1000);
    });
}
function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(api2)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 2000);
    });
}

function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(api3)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 3000);
    });
}
function displayFirstApi(data) {

    const posts = data["posts"];
    // console.log(posts);
    const tbody1 = document.getElementById("body1");

    posts.forEach(apiData => {
        newRow = document.createElement("tr");
        const id = document.createElement('td');
        id.textContent = apiData["id"];

        const title = document.createElement('td');
        title.textContent = apiData["title"];

        const body = document.createElement('td');
        body.textContent = apiData["body"];

        const ui = document.createElement('td');
        ui.textContent = apiData["userId"];

        const tags = document.createElement('td');
        tags.textContent = apiData["tags"];

        const react = document.createElement('td');
        react.textContent = apiData["reactions"];


        const cells = [id, title, body, ui, tags, react];
        for (const cell of cells) {
            newRow.append(cell);

        }
        tbody1.appendChild(newRow);


    });


}
function displaySecondApi(data) {
    const tbody2 = document.getElementById("body2");
    const products = data["products"];
    products.forEach(apiData => {
        newRow = document.createElement("tr");
        const id = document.createElement('td');
        id.textContent = apiData["id"];

        const title = document.createElement('td');
        title.textContent = apiData["title"];

        const description = document.createElement('td');
        description.textContent = apiData["description"];

        const price = document.createElement('td');
        price.textContent = apiData["price"];

        const discountPercentage = document.createElement('td');
        discountPercentage.textContent = apiData["discountPercentage"];

        const rating = document.createElement('td');
        rating.textContent = apiData["rating"];

        const stock = document.createElement('td');
        stock.textContent = apiData["stock"];

        const brand = document.createElement('td');
        brand.textContent = apiData["brand"];

        const category = document.createElement('td');
        category.textContent = apiData["category"];

        const thumbnail = document.createElement('td');
        const image = document.createElement('img');
        image.src = apiData["thumbnail"];
        image.alt = 'Image';
        thumbnail.appendChild(image);

        const images = document.createElement('td');
        const img = document.createElement('img');
        if (Array.isArray(apiData["images"])) {
            apiData["images"].forEach((imgUrl)=>{
                const image = document.createElement('img');
                image.className="img-fit";
                image.src = imgUrl;
                image.alt = 'Image';
                images.appendChild(image);
            })
        }
        const cells = [id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail,images];
        for (const cell of cells) {
            newRow.append(cell);

        }
        tbody2.appendChild(newRow);


    });
}

function displayThirdApi(data) {
    const todos = data["todos"];
    // console.log(posts);
    const tbody3 = document.getElementById("body3");

    todos.forEach(apiData => {
        newRow = document.createElement("tr");
        const id = document.createElement('td');
        id.textContent = apiData["id"];

        const todo = document.createElement('td');
        todo.textContent = apiData["todo"];

        const completed = document.createElement('td');
        completed.textContent = apiData["completed"]?"Yes":"No";

        const ui = document.createElement('td');
        ui.textContent = apiData["userId"];


        const cells = [id, todo, completed, ui];
        for (const cell of cells) {
            newRow.append(cell);

        }
        tbody3.appendChild(newRow);


    });
}



const btn = document.getElementById("fetch-btn");
// console.log(btn);
btn.addEventListener("click", () => {
    PromiseAPI1()
        .then(data => {
            if (data) {
                displayFirstApi(data);
                return PromiseAPI2();
            }
        })
        .then(data => {
            if (data) {
                displaySecondApi(data);
                return PromiseAPI3();
            }
        })
        .then(data => {
            if (data) {
              displayThirdApi(data);
            }
          })
        .catch(error => console.log(error));

})
