const loadallCards =()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>displayallCards(data));
}

displayallCards =(data)=>{
    const cardcontainer = document.getElementById('card-container');
    cardcontainer.innerHTML = '';

    data.plants.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML=`
               <div class="card bg-base-100 w-68 shadow-sm">
  <figure>
    <img class="w-full h-50 p-2 rounded-xl"
      src="${element.image} "
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${element.name}</h2>
    <p>${element.description}</p>
    <div class="flex justify-between">
    <h3 class="p-1 bg-red-500 rounded-2xl">${element.category}</h3>
    <h3><i class="fa-solid fa-bangladeshi-taka-sign"></i>${element.price}</h3>
    </div>
    <div class="card-actions justify-center ">
      <button class="btn btn-primary w-full rounded-2xl bg-green-600 p-3 text-white">Add to Card</button>
    </div>
  </div>
</div>
        `;

        cardcontainer.append(div);
        
    
})

}

const loadallCatagories =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayallCatagories(data));
}
displayallCatagories =(data)=>{ 

    // console.log(data);
    const catagoriesContainer = document.getElementById('catagories-container');
    catagoriesContainer.innerHTML = '';

    const catlength=data.categories.length;
    // console.log(catlength);
    data.categories.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML=`
        <button class="btn w-50">${element.category_name}</button>`

        catagoriesContainer.append(div);
    });

}
loadallCatagories();
loadallCards();