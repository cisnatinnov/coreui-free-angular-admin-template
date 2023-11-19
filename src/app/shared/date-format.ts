export const dateFormat: any = (date: string | number | Date) => {
  const addZero = (n: number) => {
    if (n < 10) {
      return `0${n}`
    }
    return n
  }
  const d = new Date(date);
  return `${addZero(d.getDate())}-${addZero(d.getMonth()+1)}-${d.getFullYear()}
          ${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(d.getSeconds())}`
}