export const calculateIVFluidGIR = (
  weight: number,
  dxPC: number,
  ml: number
) => {
  if (weight === 0 || dxPC === 0 || ml === 0) {
    return 0;
  }

  return ((dxPC * ml * 10) / (weight * 60)).toFixed(2);
};
