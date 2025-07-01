async function readUser() {
    const table = document.getElementById('tabela-usuarios');

    try {
        const response = await fetch('http://localhost:3000/user'); //por padrão é GET
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        table.innerHTML = "";
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <tr class="border-t">
                    <td class="p-3">${user.id}</td>
                    <td class="p-3">${user.name}</td>
                    <td class="p-3">${user.email}</td>
                    <td class="p-3">${user.role}</td>
                </tr>
            `;
            table.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}

async function readProdutos() {
    const table = document.getElementById('tabela-produtos');

    try {
        const response = await fetch('http://localhost:3000/product'); //por padrão é GET
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        table.innerHTML = "";

        data.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <tr class="border-t">
                    <td class="p-3">${product.id}</td>
                    <td class="p-3">${product.name}</td>
                    <td class="p-3">${product.price}</td>
                    <td class="p-3">${product.quant_stock}</td>
                </tr>
            `;
            table.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}

function mostrar(secao) {
    document.getElementById('usuarios').classList.add('hidden');
    document.getElementById('produtos').classList.add('hidden');
    document.getElementById(secao).classList.remove('hidden');
    if (secao === 'usuarios') {
        readUser();
    } else if (secao === 'produtos') {
        readProdutos();
    }
}

// Mostrar usuários por padrão
mostrar('usuarios');

readUser();
readProdutos();
