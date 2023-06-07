export class OdpowiedzAPI {
  public token?: boolean;
  public info?: odpowiedzAPIinfo;
  public reason?: string;
  public reasonCode?: number;
  public value?: any;

}

export class odpowiedzAPIinfo {
  request_counter?: number;
  server_time?: number;
  request_time?: string;
}

/*
export class odpApi<K> {
  public token?: boolean;
  public info?: odpowiedzAPIinfo;
  public reason?: string;
  public reasonCode?: number;
  public value?: K;
  public test = {
    k2 : number;

  }
}
*/
