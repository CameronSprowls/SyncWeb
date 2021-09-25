import instance, { API } from '.'

export class APITest {
  constructor(private api: API, private path: string = 'cameron') {}

  async test(): Promise<string> {
    const response = await this.api.authenticated.get(this.path);
    return response.data;
  }
}

export default new APITest(instance)