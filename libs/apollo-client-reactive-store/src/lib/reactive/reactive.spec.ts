import { reactive } from "./reactive";
import { stores } from '../stores';

class Test {
    @reactive
    accessor property1: string = "test prop";
}


const test = new Test();


describe('reactive', () => {
  it('should set default value', () => {
    expect(stores.has("Test")).toBeTruthy();
    expect(stores.get("Test")?.has("property1")).toBeTruthy();
    expect(stores.get("Test")?.get("property1")!()).toEqual("test prop")
  })
});
