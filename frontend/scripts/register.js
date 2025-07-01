async function createUser(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim(); //trim() utilizado para tratar strings vazias, " " apenas com espaço
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const avatar = form.avatar.files[0]; // primeiro da lista de arquivos enviados, a imagem!
  const role = form.role.value;

  // Validação simples
  if (!name || !email || !password || !role || !avatar) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const formData = new FormData(form); // inclui todos os campos e o avatar, é preciso usar pois O Multer espera um multipart/form-data

  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Erro: ${text}`);
    }

    const result = await response.json();
    alert("Usuário cadastrado com sucesso!");
    form.reset();
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    alert(`Erro: ${error.message}`);
  }
}

async function getById(user, id) {
  try {
    const response = await fetch(`http://localhost:3000/${user}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar dados');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteEntity(user, id) {
  try {
    const response = await fetch(`http://localhost:3000/${user}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Erro ao deletar');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateEntity(user, id, updatedData) {
  try {
    const response = await fetch(`http://localhost:3000/${user}/${id}`, {
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
