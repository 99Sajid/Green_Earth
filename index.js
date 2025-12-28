const loadallCards =()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>displayallCards(data));
}

displayallCards =(data)=>{
    const cardcontainer = document.getElementById('card-container');
    cardcontainer.innerHTML = "";

    data.plants.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML=`
               <div class="card bg-base-100 w-auto shadow-sm ">
  <figure>
    <img class="w-full h-50 p-2 rounded-xl"
      src="${element.image} "
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${element.name}</h2>
    <p class="text-justify max-w-3xl">${element.description}</p>
    <div class="flex justify-between">
    <h3 class="p-1 bg-red-500 rounded-2xl">${element.category}</h3>
    <h3><i class="fa-solid fa-bangladeshi-taka-sign"></i>${element.price}</h3>
    </div>
    <div class="card-actions justify-center ">
      <button class="btn btn-primary w-full rounded-2xl bg-green-600 p-3 text-white" onclick="HistoryCard('${element.name}',${element.price})">Add to Card</button>
    </div>
  </div>
</div>
        `;

        cardcontainer.append(div);
        
    
})

}

const CatagorySelection =(id)=>{

    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayallCards(data));
    

};
let totalamount =0;


const HistoryCard =(name,price)=>{
  totalamount = totalamount + price;
  const totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.innerText= totalamount;
  const HistoryCard = document.getElementById('historyCard');
  const hsdiv = document.createElement('div');
  hsdiv.innerHTML=`
                   <div class="card bg-[#F0FDF4] w-auto shadow-sm mb-4 hcard">
  <div class="card-body">
    <div class="card-actions flex flex-row justify-between items-center">
    <div class="flex flex-col">
    <p class="justify-start text-lg font-semibold">${name}</p>
    <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${price}</p>
    </div>
      
      <button class="btn btn-square btn-sm" id="closeBtn" onclick="removeamount(this,${price})">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    
    
    </div>
  </div>  
</div>
  `;
  HistoryCard.appendChild(hsdiv);
 
}

 const removeamount =(btn,price)=>{
    btn.closest('.hcard').remove() ;
    console.log(price);
    totalamount = totalamount - price;
const totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.innerText= totalamount;
 } 


const loadallCatagories =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayallCatagories(data));
}
displayallCatagories =(data)=>{ 

    // console.log(data);
    const catagoriesContainer = document.getElementById('catagories-container');
    // catagoriesContainer.innerHTML = '';

    data.categories.forEach(element => {
        const div = document.createElement('div'); 
        div.innerHTML=`
        <button onclick="CatagorySelection('${element.id}')" class="btn w-50">${element.category_name}</button>
        `

        catagoriesContainer.append(div);
    });

}
loadallCatagories();
loadallCards();
