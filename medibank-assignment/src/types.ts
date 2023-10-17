export interface PetsType {
    name: string,
    type: string
  }
export interface ResponseType {
    age: number,
    gender: string,
    name: string,
    pets: PetsType[] | null
  }
export interface GenderData{
    title:string,
    pets:string[]
}
export interface DisplayType{
    Male:GenderData,
    Female:GenderData
}  