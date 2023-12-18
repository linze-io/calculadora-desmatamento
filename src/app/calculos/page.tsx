"use client"

import { useEffect } from "react"
import recoveryOfTopsoil from "../../calculations/useCalculator/useDesforestation/recoverOfTopsoil"

export default function Calculos() {
  useEffect(() => {
    const recoveryOfTopsoil1 = recoveryOfTopsoil()

    console.log("TotalrecoveryOfTopsoil", recoveryOfTopsoil1)
  }, [])
  return <h2>teste</h2>
}
