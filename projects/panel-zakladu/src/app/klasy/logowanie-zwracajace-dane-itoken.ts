export class LogowanieZwracajaceDaneItoken {
  public userData?: {
    id: number;
    email: string;
    imie: string;
    nazwisko: string;
    grupy: [{
      id: number,
      nazwa: string
    }];
  }
  public token?: {
    value: string;
    createTime: Date;
    endLifeTime: Date;


    endLifeTime_unix: string;
    createTime_unix: string;
  }
}
