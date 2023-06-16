import calcMontante from "../../utils/calcMontante"
import vpl from "../../utils/vpl"

const culturedAndSpecies = () => {

  //Dado de input
  const hectare = 1

  //Dados fixos
  const txDisconto = 0.03
  const temperaturaCelsius = 26.8
  const percapitaPIBBrasilEmUSD = 8717.18

  //Dinâmico por região
  const popDensidade2010 = 4.12
  const especies = 33

  const calc1 = 0.643 * Math.log(popDensidade2010)
  const calc2 = 1.655 * Math.log(percapitaPIBBrasilEmUSD)
  const calc3 = 0.234 * temperaturaCelsius
  const calc4 = 2.145 * Math.log(especies)
  const calc5 = calc1 + calc2 - calc3 + calc4
  const calc6 = calc5 - 20.85
  const custoEspeciesPorHaEmUSD = Math.exp(calc6)

  const amounts = calcMontante(custoEspeciesPorHaEmUSD)

  const especies1 = custoEspeciesPorHaEmUSD * 1

  const culturaEspeciesHaVPL = vpl(txDisconto, amounts)

  const soma_especies1_culturaEspeciesHaVPL = especies1 + culturaEspeciesHaVPL

  const totalCulturaEspecies = soma_especies1_culturaEspeciesHaVPL * hectare

  return totalCulturaEspecies
}

export default culturedAndSpecies
