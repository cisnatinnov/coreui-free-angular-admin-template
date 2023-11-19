export const numberFormat: any = (n: number) => {
  return new Intl.NumberFormat('in-IN', { style: 'currency', currency: 'IDR' }).format(
    n,
  )
}