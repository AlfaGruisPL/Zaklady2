export class Pracownik {
  public firstname: string = '';
  public lastname: string = '';
  public phoneNumber: string = '';
  public email: string = '';
  public id: number = 0;
  public profilImageId = 0;
  public description = '';
  private socialMedia_: {
    twitter: '';
    facebook: '';
    telegram: '';
    instagram: '';
    whatsapp: '';
  };

  constructor() {
    this.socialMedia_ = {
      twitter: '',
      facebook: '',
      telegram: '',
      instagram: '',
      whatsapp: '',
    };
  }

  get socialMedia() {
    if (!this.socialMedia_.whatsapp) this.socialMedia_.whatsapp = '';
    if (!this.socialMedia_.facebook) this.socialMedia_.facebook = '';
    if (!this.socialMedia_.telegram) this.socialMedia_.telegram = '';
    if (!this.socialMedia_.instagram) this.socialMedia_.instagram = '';
    if (!this.socialMedia_.twitter) this.socialMedia_.twitter = '';
    return this.socialMedia_;
  }

  set socialMedia(k: any) {
    this.socialMedia_ = k;
  }
}
