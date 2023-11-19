export interface Invoice {
  id: Number,
  number: string,
  date: Date,
  dateDue: Date,
  totalAmount: Number,
  taxAmount: Number,
  untaxAmount: Number
}
