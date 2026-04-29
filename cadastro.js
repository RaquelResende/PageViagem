function validarCadastro() {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome == "" || email == "") {
          alert("Por favor, preencha os campos ");
          return;
        }
        if (!emailRegex.test(email)) {
          alert("Por favor, insira um e-mail válido");
          return;
        }
        alert("Cadastro bem sucedido!!");
        window.location.href = "./login.html";
      }

      function pesquisaCep() {
        const cep = document.getElementById("cep").value;

        if (cep.length !== 8) {
          alert("Cep precisar ter 8 numeros");
          return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((Response) => {
            if (!Response.ok) {
              throw new Error("Erro na requisição" + Response.status);
            }
            return Response.json();
          })
          .then((dados) => {
            if (dados.erro) {
              alert("Esse CEP não foi encontrado ");
            }
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
          })
          .catch((erro) => {
            console.log(erro.message);
          });
      }