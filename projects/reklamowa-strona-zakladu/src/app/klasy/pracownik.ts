export class Pracownik {
  public firstname: string = '';
  public lastname: string = '';
  public phoneNumber: string = '';
  public email: string = '';
  public id: number = 0;
  public profilImageId = 0;
  public description = '';
  public socialMedia: {
    twitter: '';
    facebook: '';
    telegram: '';
    instagram: '';
  };

  constructor() {
    this.socialMedia = {
      twitter: '',
      facebook: '',
      telegram: '',
      instagram: '',
    };
  }
}
