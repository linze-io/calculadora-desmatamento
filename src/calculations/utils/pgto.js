function calcularPagamentoPeriodico(taxa, periodo, valor) {
    // Converter a taxa para um valor decimal e ajustar para uma taxa periódica
    taxa = taxa / 100 / 12;
  
    // Calcular o pagamento periódico
    var pagamento = (valor * taxa) / (1 - Math.pow(1 + taxa, -periodo * 12));
  
    return pagamento;
  }

export default calcularPagamentoPeriodico

