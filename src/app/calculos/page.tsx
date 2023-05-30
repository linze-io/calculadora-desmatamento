"use client"

import { useEffect } from "react"
import woodAndNonWoodProducts from "../../calculations/useCalculator/useDesforestation/woodAndNonWoodProducts"

export default function Calculos() {
  useEffect(() => {
    const woodAndNonWoodProducts1 = woodAndNonWoodProducts()

    console.log("TotalwoodAndNonWoodProducts", woodAndNonWoodProducts1)
  }, [])
  return <h2>teste</h2>
}
