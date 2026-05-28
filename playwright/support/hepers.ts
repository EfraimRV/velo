export function gerarCodigoPedido() {
    const prefixo = 'VLO';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Gera 3 letras aleatórias
    let parteLetras = '';
    for (let i = 0; i < 3; i++) {
      parteLetras += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    
    // Gera 3 números aleatórios
    const parteNumeros = Math.floor(100 + Math.random() * 900);
    
    return `${prefixo}-${parteLetras}${parteNumeros}`;
  }
  
  // Exemplo de uso:
  const order = gerarCodigoPedido();
  console.log(order); // Ex: VLO-XTY482
