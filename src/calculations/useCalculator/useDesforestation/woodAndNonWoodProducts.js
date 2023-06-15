import calcMontante from "../../utils/calcMontante"
import vpl from "../../utils/vpl"

const woodAndNonWoodProducts = () => {
  //Dado de input
  const hectare = 1
/*
  Sessão discartada, pois iremos utilizar um valor fixo como foi feito na calculadora de mineração

  //Dados fixos
  //const pmnmPorHa = 1
  const txDisconto = 0.03
  const m3PorHaMaderia = 30
  const reaisPorM3Madeira = 59
  const qtdAnos = 30
  const vpNaoMadeireiroSAFPorHa = 9300

  const madeiraValorAnualPorHa = reaisPorM3Madeira * m3PorHaMaderia

  //Nessa etapa temos que calcular o valor presente liquido
  const vpMadeiraPorHa = calcularVP(
    txDisconto,
    qtdAnos,
    madeiraValorAnualPorHa
  )
  console.log("madeiraValorAnualPorHa", madeiraValorAnualPorHa)

  //Média de dois valores, assim tendo como resultado o valor de custo total
  const custoTotalPMNMporHaReais = vpNaoMadeireiroSAFPorHa + vpMadeiraPorHa / 2
  console.log("custoTotalPMNMporHaReais", custoTotalPMNMporHaReais)
  */

  const custoTotalPMNMporHaReais = 764

  //função que faz o calculo montante utilizando o valor de custoTotalPMNMporHaReais
  const amounts = calcMontante(custoTotalPMNMporHaReais)

  const pmnm1 = custoTotalPMNMporHaReais * 1

  const VPLHectarePMNM = vpl(txDisconto, amounts)

  const somaPMNM_VPLHectarePMNM = pmnm1 + VPLHectarePMNM

  const toWoodAndNonWoodProducts = somaPMNM_VPLHectarePMNM * hectare

  return toWoodAndNonWoodProducts
}

export default woodAndNonWoodProducts
