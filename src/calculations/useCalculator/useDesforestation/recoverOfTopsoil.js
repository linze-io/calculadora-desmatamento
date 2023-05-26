import fixedCalcultions from "hooks/fixedCalculations";

const CONSERVATIVE = 0.29

const recoveryOfTopsoil = (country_region, distanceanningCenter, txPrevalence, hectare) => {
  
  const { general, recoverOfTopSoll } = fixedCalcultions(country_region)
  const { kmRotatedPerLiter, priceLiterDieselUSD, averageDriverSalaryFreightPerKmUSD } = general 
  const { soilSurfaceRecPerHa_conservative, soilSurfaceRecPerHa, capacityLoadTruckNumberOfSeedlings, superficialSeedlingsPerHa, transportCostChangesPerKm } = recoverOfTopSoll

  //Condição que será respondida pelo usuário se "SIM" ou "NÃO"
  let hectareValue
  if (APPValue === true) {
    //SIM
    const hectareValue = hectare * 3.8
  }else {
    //NÃO
    const hectareValue = hectare
  }

  //Condição que será respondida pelo usuário se "Com raridade" ou "Sem Raridade"

  



  const soilSurfaceRecPerHaValue = txPrevalence === CONSERVATIVE ? soilSurfaceRecPerHa_conservative : soilSurfaceRecPerHa;

    const numberOfPathsSuperficialSeddlindRecovery = ((hectareValue*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings) < 0.9999999999999 ? 1 : Math.ceil((hectareValue*superficialSeedlingsPerHa)/capacityLoadTruckNumberOfSeedlings);
    const totalSurfaceFreightCostChances = distanceanningCenter * transportCostChangesPerKm;
    const quantityOfLitersConsumedDieselSurfaceRecovery =	distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightSurfaceRecovery =	priceLiterDieselUSD * quantityOfLitersConsumedDieselSurfaceRecovery;
    const costFreightWithDriverSurfaceRecovery = averageDriverSalaryFreightPerKmUSD * distanceanningCenter;
    const toSurfaceFreightCostOneWay = costFreightWithDriverSurfaceRecovery+ fuelCostFreightSurfaceRecovery + totalSurfaceFreightCostChances;
    const toSurfaceFreightCostRoundTrip =	toSurfaceFreightCostOneWay * 2;
    const toCostFreightFinalSurfaceRecovery =	toSurfaceFreightCostRoundTrip * numberOfPathsSuperficialSeddlindRecovery;
    
    
      const surfaceSoilRecoveryWithoutFreight = soilSurfaceRecPerHaValue * hectareValue;
      const toSurfaceRecoveryCostWithFreight = toCostFreightFinalSurfaceRecovery + surfaceSoilRecoveryWithoutFreight;
      return toSurfaceRecoveryCostWithFreight

   
}

export default recoveryOfTopsoil