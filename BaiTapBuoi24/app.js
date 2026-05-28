let cartCount = 0;
function addToCart(){ //Function for click cartbutton event
    cartCount +=1;
    const badgeEle = document.getElementById('cart-badge')
    badgeEle.innerText = cartCount
}

async function fetchProducts(){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        console.log("Data", data)
        const categoryCounts = data.reduce((accumulator, product) =>{
            const cat = product.category;

            accumulator[cat] ? accumulator[cat] += 1 : accumulator[cat] = 1
            return accumulator
        }, {});
        console.log("Thống kê danh mục", categoryCounts)
        const categoryListEle = document.getElementById('category-list');
        let categoryHtml = `
    <li class="flex justify-between items-center bg-indigo-50 text-indigo-600 px-3 py-2 rounded-lg font-medium cursor-pointer">
        <span>Tất cả sản phẩm</span>
        <span class="bg-indigo-200 text-indigo-800 text-xs py-1 px-2 rounded-full font-bold">
            ${ data.length }
        </span>
    </li>
`;;
        Object.entries(categoryCounts).forEach(([categoryName, count]) => {
    categoryHtml += `
        <li class="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">
            <span class="capitalize">${categoryName}</span>
            <span class="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-full font-medium">
                ${count}
            </span>
        </li>
    `;
});
    categoryListEle.innerHTML = categoryHtml;
        let htmlContent = '';
data.forEach(product => {
    htmlContent += `<div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
    <div class="h-48 flex items-center justify-center p-2 mb-4 bg-gray-50 rounded-lg">
        <img src="${product.image}" alt="..." class="max-h-full max-w-full object-contain">
    </div>

    <div class="flex-grow flex flex-col">
        <span class="text-xs text-gray-500 mb-1 uppercase font-semibold">${product.category}</span>
        
        <h3 class="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 flex-grow">
            ${product.title}
        </h3>

        <div class="flex items-center text-xs text-gray-500 mb-4 mt-auto">
            <span class="text-yellow-400 mr-1">⭐</span>
            <span class="font-medium mr-1">${product.rating.rate}</span> 
            <span>(${product.rating.count})</span>
        </div>
    </div>

    <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <span class="text-lg font-bold text-indigo-700">$${product.price}</span>
        
        <button onclick ="addToCart()" class="bg-gray-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center" title = "thêm vào giỏ hàng">
            <i class="fa-solid fa-cart-shopping"></i>
        </button>
    </div>
</div>`
});

const productsEle = document.getElementById('product-list');
productsEle.innerHTML = htmlContent;
    } catch(err){
        console.log("Error",err)
    }
}

fetchProducts();



// 0: 
// category "men's clothing"
// description"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id 1
// image"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price 109.95
// rating
// : 
// count 120
// rate 3.9
// [[Prototype]]
// : 
// Object
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"