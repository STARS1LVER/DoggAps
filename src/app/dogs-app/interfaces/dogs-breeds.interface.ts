export interface Race {
  [race: string]: Dog[]
}

export interface Dog {
  id: string;
  raza: string
  nombre: string;
  fecha: string;
}

