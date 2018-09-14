import { AlumnusModule } from './alumnus.module';

describe('AlumnusModule', () => {
  let alumnusModule: AlumnusModule;

  beforeEach(() => {
    alumnusModule = new AlumnusModule();
  });

  it('should create an instance', () => {
    expect(alumnusModule).toBeTruthy();
  });
});
