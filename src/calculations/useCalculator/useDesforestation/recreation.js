import calcMontante from "../../utils/calcMontante";
import vpl from "../../utils/vpl";

const recreation = () => {

    //Dado de input 
    const hectare = 1

    //Dados fixos
    const txDisconto = 0.03
    const temperaturaCelsius = 26.8
    const percapitaPIBBrasilEmUSD = 8717.18

    //Dinâmico por região
    const popDensidade2010 = 4.12
    const especies = 33

    const calc1 = 0.562 * Math.log(popDensidade2010);
    const calc2 = 0.566 * Math.log(percapitaPIBBrasilEmUSD);
    const calc3 = 0.0178 * temperaturaCelsius;
    const calc4 = 1.133 * Math.log(especies);
    const calc5 = calc1 + calc2 + calc3 + calc4;
    const calc6 = calc5 - 8.375;
    const recreacaoCustoPorHaUSD = Math.exp(calc6);

    const amounts = calcMontante(recreacaoCustoPorHaUSD)

    const recreacao1 = recreacaoCustoPorHaUSD * 1
    
    const recreacaoHaVPL = vpl(txDisconto, amounts)

    const soma_recreacao1_recreacaoHaVPL = recreacao1 + recreacaoHaVPL

    const totalRecreacao = soma_recreacao1_recreacaoHaVPL * hectare
    
    return totalRecreacao

}

export default recreation