import calcMontante from "../../utils/calcMontante"
import vpl from "../../utils/vpl"
import calcularPagamentoPeriodico from "../../utils/pgto"

const carbon = () => {
  //Dado de input

  const hectare = 1

  //Essa condição é necessária por que é de acordo com o que o usuário ira selecionar no  "USO DE SOLO ANTERIOR"

  // const carbonoPorHaVegetacaoNativaPrimariaAmazonia = 348
  // const carbonoPorHaVegetacaoNativaSecundariaAmazonia = 0 //falta definir valor

  //const carbonoPorHaVegetacaoNativa = carbonoPorHaVegetacaoNativaPrimariaAmazonia ? carbonoPorHaVegetacaoNativaPrimariaAmazonia : carbonoPorHaVegetacaoNativaSecundariaAmazonia

  const carbonoPorHaVegetacaoNativa = 348 //Valor definido como padrão

  /*

    Essa condição é necessária por que é de acordo com o que o usuário ira selecionar no  "USO DE SOLO POSTERIOR". Como Default iremos utilizar "carbonoHaPastagem"
    Faltam algumas informações para colocarmos nas constantes

    const carbonoHaPastagem = 16.2**
    const carbonoHaLavoura = Precisamos do valor
    const carbonoHaMineracao = Precisamos do valor
    const carbonoPorHaVegetacaoNativaSecundariaAmazonia = 0

    */

  const carbonoHa = 16.2 //Valor definido como padrão

  //Aqui é feito a subtração do valor de "USO DO SOLO ANTERIOR" menos o valor de "USO DO SOLO POSTERIOR"
  const saldoCarbonoPorHa = carbonoPorHaVegetacaoNativa - carbonoHa

  //Dados fixos
  const custoCarbonoPorHaUSD = 10
  const txCambio = 5.2 //Estudar se devemos utilizar essa taxa de cambio em cada impacto, ou somente no final de todos os impactos
  const qtdAnos = 30
  const txDisconto = 0.03

  //Multiplicação para simplificar os 3 valores para ser utilizado na função PGTO
  const multi_TxCambio_custoCarbono_saldoCarbonoPorHa =
    txCambio * custoCarbonoPorHaUSD * saldoCarbonoPorHa
    console.log("multi_TxCambio_custoCarbono_saldoCarbonoPorHa", multi_TxCambio_custoCarbono_saldoCarbonoPorHa)


  //Função PGTO
  const carbonoPGTOReais = calcularPagamentoPeriodico(multi_TxCambio_custoCarbono_saldoCarbonoPorHa, txDisconto, qtdAnos)
  console.log("calcularPagamentoDesconto", carbonoPGTOReais)

  const amounts = calcMontante(carbonoPGTOReais)

  const carbono1 = carbonoPGTOReais * 1

  const VPLCarbon = vpl(txDisconto, amounts)

  const soma_carbono1_VPLCarbon = carbono1 + VPLCarbon

  const toCarbon = soma_carbono1_VPLCarbon * hectare

  return toCarbon
}

export default carbon
