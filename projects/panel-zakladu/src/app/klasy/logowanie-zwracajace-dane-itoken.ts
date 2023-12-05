export class LogowanieZwracajaceDaneItoken {
  public userData?: {
    id: number;
    email: string;
    imie: string;
    nazwisko: string;
    groups: [
      {
        id: number;
        name: string;
        groupId: number;
      }
    ];
  };
  public token?: {
    value: string;
    createTime: Date;
    endLifeTime: Date;

    endLifeTime_unix: string;
    createTime_unix: string;
  };
}
