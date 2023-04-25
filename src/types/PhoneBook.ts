export interface IPhoneBook {
  sequence: number
  firstName: string
  lastName: string
  phone: string
  address1?: string
  address2?: string
  age?: number
  email?: string
}

export interface IPhoneBooks extends Array<IPhoneBook> {

}
