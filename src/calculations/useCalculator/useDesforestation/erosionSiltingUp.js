import calcMontante from "../../utils/calcMontante";
import vpl from "../../utils/vpl";


const erosionSiltingUp = () => {


  //Constante usada para definir se é o cenário "CONSERVADOR" que é igual a 1 ou "PRINCIPIO DA PRECAUÇÃO" que é diferente de 1
  const CONSERVATIVE = 1

  //Dado de input 
  const hectare = 1

  //Dados fixos
  const percapitaPIBBrasilEmUSD = 8717.18
  const txDisconto = 0.03
  



  if(CONSERVATIVE === 1) {

    const assoreaCustoPorHaUSD = 18

    const amounts = calcMontante(assoreaCustoPorHaUSD)

    const assoreamento1 = assoreaCustoPorHaUSD * 1

    const assoreamentoVPLHectare = vpl(txDisconto, amounts)

    const soma_assoreamento1_assoreamentoVPLHectare = assoreamento1 + assoreamentoVPLHectare
    
    const toErosion = soma_assoreamento1_assoreamentoVPLHectare * hectare

    return toErosion
      
  }else{

    const calc1 = Math.log(percapitaPIBBrasilEmUSD);
    const calc2 = Math.pow(calc1, 2);
    const calc3 = 13.32 * calc1;
    const calc4 = 0.623 * calc2;
    const calc5 = calc3 - 65.64 - calc4;
    const assoreaCustoPorHaUSD = Math.exp(calc5);

    const amounts = calcMontante(assoreaCustoPorHaUSD)

    const assoreamento1 = assoreaCustoPorHaUSD * 1

    const assoreamentoVPLHectare = vpl(txDisconto, amounts)

    const soma_assoreamento1_assoreamentoVPLHectare = assoreamento1 + assoreamentoVPLHectare
    
    const totalErosao = soma_assoreamento1_assoreamentoVPLHectare * hectare
    
        
    return totalErosao
  }
} 

export default erosionSiltingUp




