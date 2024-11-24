export const rounded = (num: number, decimals = 2) => {
  return Math.round(num * 10 ** decimals) / 10 ** decimals
}
