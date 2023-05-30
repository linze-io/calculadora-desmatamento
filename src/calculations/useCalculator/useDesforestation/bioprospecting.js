import calcMontante from "../../utils/calcMontante"
import vpl from "../../utils/vpl"

const bioprospecting = () => {
  // const bioCustoEmUSD = 23.39
  // const bioCustoEmUSD_conservative = 13.63

  //Dado de input
  const hectare = 1

  //Dado fixo
  const txDisconto = 0.03

  //Nessa linha teremos o mesmo formato que tinhamos na calculadora de impactos do garimpo ilegal do ouro. Considerando se é um impacto CONSERVADOR ou PRECAUÇÃO
  //const bioCustoEmUSDValor = txPrevalence === CONSERVATIVE ? bioCustoEmUSD_conservative : bioCustoEmUSD
  const bioCustoEmUSDValor = 13.63

  const bioprospeccaoCusto = bioCustoEmUSDValor * hectare

  const amounts = calcMontante(bioprospeccaoCusto)

  const bioprospeccao1 = bioprospeccaoCusto * 1

  const bioprospeccaoVPL = vpl(txDisconto, amounts)

  const soma_Bioprospeccao1_bioprospeccaoVPL = bioprospeccao1 + bioprospeccaoVPL

  const totalBioprospeccao = soma_Bioprospeccao1_bioprospeccaoVPL * hectare

  return totalBioprospeccao
}

export default bioprospecting
