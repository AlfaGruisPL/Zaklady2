export class HttpError {

  error:
    {
      time: number;
      counter: number;
      reason: string;
      reasonCode: number
    }
    | undefined

  headers = {}
  message: string = ''
  name: string = ''
  ok: boolean = false
  status: number = 0
  readonlystatusText: string = ''
  url: string = ''
}
