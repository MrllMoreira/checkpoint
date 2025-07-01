async function createProduct(event) {
    event.preventDefault();

    const user_id = document.getElementById('user_id').value;
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);
    const category_game = document.getElementById('category_game').value;
    const platform = document.getElementById('platform').value;
    const quant_stock = parseInt(document.getElementById('quant_stock').value);

    const product = {
        user_id,
        name,
        photo,
        description,
        price,
        category_game,
        platform,
        quant_stock
    };

    try {
        const response = await fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

       if (!response.ok) {
      const error = await response.json();
console.error('Erro do backend:', error);
alert('Erro: ' + JSON.stringify(error));
      return;
    }


        const result = await response.json();
        alert('Produto cadastrado com sucesso!');
        console.log(result);

        // Limpar o formulário
        document.getElementById('user_id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('photo').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('category_game').value = '';
        document.getElementById('platform').value = '';
        document.getElementById('quant_stock').value = '';

    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        alert('Erro ao cadastrar produto');
    }
}

async function getById(product, id) {
  try {
    const response = await fetch(`http://localhost:3000/${product}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar dados');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteEntity(product, id) {
  try {
    const response = await fetch(`http://localhost:3000/${product}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Erro ao deletar');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateEntity(product, id, updatedData) {
  try {
    const response = await fetch(`http://localhost:3000/${product}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error('Erro ao atualizar');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
