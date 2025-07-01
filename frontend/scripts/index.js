async function loadProducts(){
    try {
        const productSection = document.getElementById('cards-produtos');

        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        productSection.innerHTML = "";

        data.forEach(product => {
            console.log(product);
            productSection.innerHTML += `
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                    
                    <img src="${"../backend/public" + product.photo}" alt="Jogo 1" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h4 class="text-lg font-bold mb-2">${product.name}</h4>
                        <div class="flex justify-between">
                            <p class="text-sm text-gray-600 mb-4">${product.description}</p>
                            <p class="text-sm text-gray-600 mb-4">R$ ${product.price}</p>

                        </div>
                        <button
                            class="bg-blue-600 text-white w-full h-9 rounded hover:bg-blue-700 transition">Comprar</button>
                    </div>
                </div>
            `
        });
        

    } catch (error) {
        console.error(error);
    }
}