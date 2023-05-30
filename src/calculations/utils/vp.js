function calcularVP(taxa, anos, valorAnual) {
  var vp = 0
  for (var i = 1; i <= anos; i++) {
    vp += valorAnual / Math.pow(1 + taxa, i)
  }

  return vp
}

export default calcularVP
