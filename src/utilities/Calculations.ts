export const calculateIVFluidGIR = (
  weight: number,
  dxPC: number,
  ml: number
) => {
  if (weight === 0 || dxPC === 0 || ml === 0) {
    return "0.00";
  }

  return ((dxPC * ml * 10) / (weight * 60)).toFixed(2);
};

export const calculateFeedGIR = (
  weight: number,
  polyCal: number,
  milk: number,
  ssc20: number,
  ssc40: number,
  ebmSingle: number,
  ebmDouble: number,
  ebmNeoSure: number
) => {
  if (weight === 0) {
    return "0.00";
  }

  let polyCalModifiers: number[] = [];
  switch (polyCal) {
    case 0:
      polyCalModifiers = [7, 7, 8.36, 7.5, 8, 9];
      break;
    case 1:
      polyCalModifiers = [8.14, 8.14, 9.5, 8.64, 9.14, 10.14];
      break;
    case 2:
      polyCalModifiers = [9.3, 9.3, 10.66, 9.8, 10.3, 11.3];
      break;
    case 3:
      polyCalModifiers = [10.44, 10.44, 11.8, 10.94, 11.44, 12.44];
      break;
    case 4:
      polyCalModifiers = [11.6, 11.6, 12.96, 12.1, 12.6, 13.6];
      break;
  }

  const milkCalc = (polyCalModifiers[0] * milk * 10) / (weight * 60);
  const ssc20Calc = (polyCalModifiers[1] * ssc20 * 10) / (weight * 60);
  const ssc40Calc = (polyCalModifiers[2] * ssc40 * 10) / (weight * 60);
  const ebmSingleCalc = (polyCalModifiers[3] * ebmSingle * 10) / (weight * 60);
  const ebmDoubleCalc = (polyCalModifiers[4] * ebmDouble * 10) / (weight * 60);
  const ebmNeoSureCalc =
    (polyCalModifiers[5] * ebmNeoSure * 10) / (weight * 60);

  return (
    milkCalc +
    ssc20Calc +
    ssc40Calc +
    ebmSingleCalc +
    ebmDoubleCalc +
    ebmNeoSureCalc
  ).toFixed(2);
};

export const generateNumberList = (start: number, end: number) => {
  const list: number[] = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};
