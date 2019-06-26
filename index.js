const stepScale = require('@universalstandard/step-scale')

const bpScale = (minPx, maxPx, namedBreakpointsObject) => {
  if (typeof minPx !== 'number' || typeof maxPx !== 'number') {
    throw new Error('minPx and maxPx in generateScale() must be numbers')
  }

  const scale = stepScale(minPx, maxPx, Object.keys(namedBreakpointsObject).length)
  return Object.keys(namedBreakpointsObject).reduce((acc, bp, i) => {
    acc[bp] = `${scale[i] * 0.1}em`
    return acc
  }, {})
}

export default bpScale