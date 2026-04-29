  function irparacadastro() {
        let link = document.createElement("a");

        link.href = "./cadastro.html";
        link.textContent = "irParaCadastro";

        window.location.href = "./cadastro.html";
      }
      function validarFormulario() {
        let link = document.createElement("a");

        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        link.href = "./pagina2.html";
        link.textContent = "VISITAR";

        if (email == "" || senha == "") {
          alert("Por favor insira algum dado!");
          return;
        }

        if (!emailRegex.test(email)) {
          alert("Por favor, insira um valor válido de email ");
          return;
        }

        if (senha.length > 6) {
          alert("Essa senha está muito longa, digite menor que 6 dígitos!");
          return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = "./home.html";
      }