 function orcamentoEnviado() {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let data = document.getElementById("data").value;
        let descricao = document.getElementById("descricao").value;

        if (nome == "" || email == "" || data == "" || descricao == "") {
          alert("Um dos campos não foi preenchido, por favor preencher!");
          return;
        }

        alert("Orçamento enviado com sucesso!");
      }