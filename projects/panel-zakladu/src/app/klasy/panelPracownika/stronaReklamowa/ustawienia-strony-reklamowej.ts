export class UstawieniaStronyReklamowejDto {
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  data: FirstTemplate | {} = {};
  template: string | undefined = '';
  keywords: string | undefined = '';
  miniDescription: string | undefined = '';

  constructor(zrodlo: Partial<UstawieniaStronyReklamowej> = {}) {
    switch (zrodlo.template) {
      case 'template1':
        Object.assign(this.data, zrodlo.FirstTemplateData);
        break;
      case 'template2':
        Object.assign(this.data, zrodlo.SecondTemplateData);
        break;
    }
    this.stronaReklamowaPrzelacznik = zrodlo.stronaReklamowaPrzelacznik;
    this.template = zrodlo.template;
    this.keywords = zrodlo.keywords;

    this.miniDescription = zrodlo.miniDescription;
  }
}

export class UstawieniaStronyReklamowej {
  template = '';
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  FirstTemplateData = new FirstTemplate();
  SecondTemplateData = new SecondTemplateTmp();

  miniDescription = '';
  keywords: string = '';

  wstawDane(dane: Partial<UstawieniaStronyReklamowej> | any) {
    this.stronaReklamowaPrzelacznik = dane['wlaczona'];
  }
}

export class FirstTemplate {
  opisZakladuWStopce: string = '';
  logo: string | number = '';
  banner: string | number = '';
}

export class SecondTemplateTmp {
  logo: string | number = 0;
  banner: string | number = 0;
  header = {
    nav: {
      logo: '',
    },
    title: '',
    backgroundImage: 0,
    description: '',
  };
  aboutUs: {
    information: {
      title: string;
      shortDescription: string;
      mainDescription: string;
    };
    images: {
      mainImage: number;
      otherImages: {
        image1: number;
        image2: number;
        image3: number;
      };
    };
  };
  services: {
    title: string;
    subPage: {
      title: string;
    };
  };
  employees: {
    backgroundImage: number;
    title: string;
    shortDescription: string;
  };
  pricing: {
    title: string;
    subPage: {
      shortDescription: string;
      title: string;
    };
  };
  getInTouch: {
    backgroundImage: number;
    title: string;
    shortDescription: string;
  };
  footer = {
    title: 'Salio',
    shortDescription: 'Our barbershop is the created for men who appreciate premium quality, time and flawless look.',
    openingHours: {
      sunday: { closing: '', opening: '', activeDay: false },
      monday: { closing: '13:14', opening: '07:00', activeDay: true },
      tuesday: { closing: '16:00', opening: '06:00', activeDay: true },
      wednesday: { closing: '12:13', opening: '08:00', activeDay: true },
      thursday: { closing: '', opening: '', activeDay: false },
      friday: { closing: '10:11', opening: '05:00', activeDay: true },
      saturday: { closing: '11:12', opening: '09:00', activeDay: true },
    },
    contact: {
      title: 'Contact',
      email: 'info@example.com',
      numberOfPhone: '(+123) 456 789 101',
    },
    address: {
      title: 'Contact',
      country: 'Ukraine',
      city: 'Lviv',
      village: 'Krysowychi',
      street: 'Sahajdacznogo',
      numberOfApartment: '08',
      zipCode: '35-750',
    },
    map: {
      title: 'Contact',
      latitude: '49.84461671294488',
      longitude: '24.032144925333583',
    },
  };

  constructor() {
    this.aboutUs = {
      information: {
        title: 'Who We Are',
        shortDescription:
          'Barbershop is a team of highly qualified barbers dedicated to offering the best value. We do this by providing high quality salon services for men and boys, in a warm, friendly atmosphere.',
        mainDescription:
          'Welcome to our distinguished hair salon, where we merge the artistry of hairstyling with a commitment to providing a personalized and exceptional experience. Our team comprises skilled and passionate stylists who are not only experts in their craft but also dedicated to staying abreast of the latest trends and techniques. \n  "Upon entering our contemporary space, you\nll find an ambiance that invites relaxation and creativity. Our consultations are thorough, ensuring we understand your unique preferences and lifestyle, enabling us to tailor our services to complement your individuality. From classic cuts to avant-garde styles, our diverse range of services caters to every taste.     \n     "Education is at the core of our philosophy, and our stylists undergo continuous training to master the latest industry innovations. This commitment allows us to offer a spectrum of services, including precision cuts, creative color treatments, and transformative styling.',
      },
      images: {
        mainImage: 0,
        otherImages: {
          image1: 0, // Domyślne wartości dla image1
          image2: 0, // Domyślne wartości dla image2
          image3: 0, // Domyślne wartości dla image3
        },
      },
    };
    const subPage = {
      title: 'Our Service',
    };
    this.services = {
      title: 'OUR BARBER SERVICES',
      subPage: subPage,
    };
    this.employees = {
      backgroundImage: 0,
      title: 'Our barbers',
      shortDescription:
        'We employ only highly qualified barbers who are not just professionals, but also enjoy maintaining the atmosphere of a classic barbershop.',
    };
    const subPage2 = {
      title: 'Our Pricing',
      shortDescription:
        'We employ only highly qualified barbers who are not just professionals, but also enjoy maintaining the atmosphere of a classic barbershop.',
    };
    this.pricing = {
      title: 'Our barber pricing',

      subPage: subPage2,
    };
    this.getInTouch = {
      backgroundImage: 0,
      title: 'Get in touch',
      shortDescription: 'Leave your name and phone number, and we’ll contact you.',
    };
  }
}
