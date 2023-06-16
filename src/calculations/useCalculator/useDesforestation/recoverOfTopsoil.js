const recoveryOfTopsoil = () => {
  //Dado de input
  const hectare = 1

  //Botão "Fitofisionomia Raridade" que terá na Dashboard da calculadora
  //Considerar botão "Fitofisionomia Raridade" setado em "Com raridade" com valor 1
  const fitofisionomia = 1

  //Botão "APP" que terá na Dashboard da calculadora
  //Considerar botão "APP" setado em "SIM" com valor 1
  const buttonAPP = 1

  //Considerar botões "Fitofisionomia Raridade && APP" setados em "SIM && Com raridade" com valor 1

  function calcHectareValue() {
    if ((buttonAPP === 1 && fitofisionomia === 1) || buttonAPP === 1) {
      return hectare * 3.8
    } else if (fitofisionomia === 1) {
      return hectare * 1.8
    } else {
      return hectare
    }
  }
  const hectareValue = calcHectareValue()

  //Seleção de valor de impacto "CONSERVADOR || PRINCÍPIO DA PRECAUÇÃO"
  //Será definido como valor padrão o valor de impacto "CONSERVADOR" com valor 1, CONSERVATIVE =! 1 será "PRINCÍPIO DA PRECAUÇÃO"
  const CONSERVATIVE = 1
  const precoRecupSuperficialSoloporHa_conservative = 14690
  const precoRecupSuperficialSoloporHa = 23400

  const precoRecSuperficialHa =
    CONSERVATIVE === 1
      ? precoRecupSuperficialSoloporHa_conservative
      : precoRecupSuperficialSoloporHa
  const custoRecSuperficialSoloSemFrete = precoRecSuperficialHa * hectareValue

  //Dinâmico por região
  const distanciaDesmatCentro = 291.440123936341

  //Dados fixos
  const capacidadeCargaCaminhaoNumeroMudas = 2700
  const mudasSuperficialporHa = 1667
  const custoTransporteMudaporKmBRL = 1.6
  const kmRodadoporLitro = 2.5
  const precoLitroDiesel = 3.24
  const salarioMedioMotoristaFreteporKmBRL = 2.22

  const numeroCaminhoesRecupSuperficialMudas =
    (hectareValue * mudasSuperficialporHa) /
      capacidadeCargaCaminhaoNumeroMudas <
    0.9999999999999
      ? 1
      : Math.ceil(
          (hectareValue * mudasSuperficialporHa) /
            capacidadeCargaCaminhaoNumeroMudas
        )

  const custoFreteMudaSuperficialTotal =
    distanciaDesmatCentro * custoTransporteMudaporKmBRL

  const QtdeLitrosDieselConsumidoRecSuperficial =
    distanciaDesmatCentro / kmRodadoporLitro

  const custoCombustivelFreteRecSuperficial =
    precoLitroDiesel * QtdeLitrosDieselConsumidoRecSuperficial

  const CustoFretecomMotoristaRecSuperficial =
    salarioMedioMotoristaFreteporKmBRL * distanciaDesmatCentro

  const custoTotalFreteSuperficialIda =
    CustoFretecomMotoristaRecSuperficial +
    custoCombustivelFreteRecSuperficial +
    custoFreteMudaSuperficialTotal

  const CustoTotalFreteSuperficialdaeVolta = custoTotalFreteSuperficialIda * 2

  const custoTotalFreteRecSuperficialFinal =
    CustoTotalFreteSuperficialdaeVolta * numeroCaminhoesRecupSuperficialMudas

  const CustoTotalRecSuperficialComFrete =
    custoTotalFreteRecSuperficialFinal + custoRecSuperficialSoloSemFrete

  return CustoTotalRecSuperficialComFrete
}

export default recoveryOfTopsoil
