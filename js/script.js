// Script para gerar link de redirecionamento aleatório para o WhatsApp
var links = [
      "https://api.whatsapp.com/send/?phone=556200000000&text=Ol%C3%A1,%20quero%20conhecer%20seus%20conte%C3%BAdos%20pagos!",
      "https://api.whatsapp.com/send/?phone=556200000000&text=Ol%C3%A1,%20quero%20conhecer%20seus%20conte%C3%BAdos%20pagos!",
      "https://api.whatsapp.com/send/?phone=556200000000&text=Ol%C3%A1,%20quero%20conhecer%20seus%20conte%C3%BAdos%20pagos!",
      "https://api.whatsapp.com/send/?phone=556200000000&text=Ol%C3%A1,%20quero%20conhecer%20seus%20conte%C3%BAdos%20pagos!"
    ];

    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];

    document.getElementById("whatsapp-button").href = randomLink;
<!-- Para redirecionar automaticamente descomente a linha excluindo os "//" -->
    <!-- Redirecionar para o link aleatório -->
    // setTimeout(function() {
    // window.location.href = randomLink;
    // }, 3000); // Redirecionar após 3 segundos (3000 milissegundos)
<!-- Para redirecionar automaticamente descomente a linha -->
