async function createProduct(event) {
  event.preventDefault();


  const form = event.target;
  const name = form.name.value.trim();
  const photo = form.photo.files[0];
  const description = form.description.value.trim();
  const price = parseFloat(form.price.value);
  const category_game = form.category_game.value;
  const platform = form.platform.value;
  const quant_stock = parseInt(form.quant_stock.value);
  if (!name || !photo || !description || !price || !category_game || !platform || !quant_stock) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('photo', photo);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('category_game', category_game);
  formData.append('platform', platform);
  formData.append('quant_stock', quant_stock);

  try {
    const response = await fetch('http://localhost:3000/product', {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      const error = await response.json();
      console.error('Erro do backend:', error);
      alert('Erro: ' + JSON.stringify(error));
      return;
    }

    const result = await response.json();
    alert('Produto cadastrado com sucesso!');

    // Limpar o formulário
    form.name.value = '';
    form.photo.value = '';
    form.description.value = '';
    form.price.value = '';
    form.category_game.value = '';
    form.platform.value = '';
    form.quant_stock.value = '';
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    alert('Erro ao cadastrar produto');
  }

  window.location.href = '../index.html';

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
