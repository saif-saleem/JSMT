const foods=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

// const foodCardsContainer = document.getElementById("food-cards");

// // Loop through the food items and create a card for each
// foods.forEach((food, index) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const image = document.createElement("img");
//     image.src = food.imageSrc;

//     const name = document.createElement("h2");
//     name.textContent = food.name;

//     const type = document.createElement("p");
//     type.textContent = food.type;
//     type.classList.add(food.type);

//     const time = document.createElement("p");
//     time.textContent = `Time: ${food.time}`;

//     const rating = document.createElement("p");
//     rating.textContent = `Rating: ${food.rating}`;
//     rating.classList.add("rating");

//     card.appendChild(image);
//     card.appendChild(name);
//     card.appendChild(type);
//     card.appendChild(time);
//     card.appendChild(rating);

//     foodCardsContainer.appendChild(card);
// });


const postContainer=document.getElementsByClassName("card_container")[0];






const postMethods =()=>{
foods.map((postData)=>{
const postElement=document.createElement('div');
postElement.classList.add('card');
postElement.innerHTML=`<img src="${postData.imageSrc}" alt="" > <div class="desc"> <span class="type">${postData.type}</span> <div class="details"><p class="name">${postData.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${postData.rating}</span></div> </div> <div class="like"> <h3 class="time">${postData.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
`
postContainer.appendChild(postElement)
})
}

postMethods();

function like_btn(button){
    
    const isLiked = button.classList.contains('liked');

    if (!isLiked) {
        button.classList.add('liked');
    button.innerHTML="";
    button.innerHTML=`<img src="./likered.svg" alt="" >`;
    }

    else{
        button.classList.add('notliked');
        button.classList.remove('liked');
        button.innerHTML="";
        button.innerHTML=`<img src="./hrt.svg" alt="" >`;
    }
  
}

function filter_veg(){
    postContainer.innerHTML="";
    foods.map((pd)=>{
        if(pd.type==="veg"){
       let pde=document.createElement('div');
       pde.classList.add('card');
       pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
       `
       postContainer.appendChild(pde);
        }
    })
}


function filter_nonveg(){
    postContainer.innerHTML="";
    foods.map((pd)=>{
        if(pd.type==="non-veg"){
       let pde=document.createElement('div');
       pde.classList.add('card');
       pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
       `
       postContainer.appendChild(pde);
        }
    })
}


function filter_all(){
    postContainer.innerHTML="";
    foods.map((pd)=>{
       let pde=document.createElement('div');
       pde.classList.add('card');
       pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
       `
       postContainer.appendChild(pde);
        
    })
}



let findSelected=()=>{
    let selected=document.querySelector("input[name='btn']:checked").value;
    if (selected==='above 4'){
        postContainer.innerHTML="";
        foods.map((pd)=>{
            if(pd.rating>=4.0){
           let pde=document.createElement('div');
           pde.classList.add('card');
           pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
           `
           postContainer.appendChild(pde);
            }
        })  
    }

    else{
        postContainer.innerHTML="";
    foods.map((pd)=>{
        if(pd.rating<4.0){
       let pde=document.createElement('div');
       pde.classList.add('card');
       pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
       `
       postContainer.appendChild(pde);
        }
    })
    }
}

let radioBtns=document.querySelectorAll("input[name='btn']");
radioBtns.forEach(radiobtn=>{
    radiobtn.addEventListener("change", findSelected);
})

function searchData(){
    const searchTerm=document.getElementById("search_bar").value.toLowerCase();
    const filteredData=foods.filter(
        dt=>
        dt.name.toLowerCase().includes(searchTerm)
    )
    postContainer.innerHTML="";
    filteredData.map((pd)=>{
       let pde=document.createElement('div');
       pde.classList.add('card');
       pde.innerHTML=`<img src="${pd.imageSrc}" alt="" > <div class="desc"> <span class="type">${pd.type}</span> <div class="details"><p class="name">${pd.name}</p> <div class="rt"><img src="./star.png" alt="" >  <span class="rating">${pd.rating}</span></div> </div> <div class="like"> <h3 class="time">${pd.time}</h3> <div class="lc"> <button class="likebtn" onclick="like_btn(this)" style="display:flex"><img src="./hrt.svg" alt="" ></button> <img src="./cmt.svg" alt="" ></div>  </div></div>
       `
       postContainer.appendChild(pde);
        
    })
}

