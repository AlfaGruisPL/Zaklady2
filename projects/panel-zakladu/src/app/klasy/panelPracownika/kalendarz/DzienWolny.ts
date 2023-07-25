export class DzienWolny {
  data = new Date()
  pracownikId = 0;
  regularne = true

  constructor(Dane: Partial<DzienWolny>) {
    Object.assign(this, Dane)
    this.data = new Date(this.data
    )
  }
}
