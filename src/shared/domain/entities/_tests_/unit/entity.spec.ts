import { validate as uuidValidate } from "uuid";
import { Entity } from "../../entity";
import { en } from "@faker-js/faker/.";


type Stubprops = {
  prop1: string;
  prop2: number;
}


class StubEntity extends Entity <Stubprops>{

}

describe('Entity unit tests', () => {
  it('should create a new entity', () => {
    const props = {prop1: 'value1', prop2: 15}
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)// exige que seja estritamente igual a props
    expect(entity._id).not.toBeNull()// exige que o ID não seja nulo
    expect(uuidValidate(entity._id)).toBeTruthy()// exige que o ID seja um UUID válido
  })


  it('should accept a valid uuid', () => {
    const props = {prop1: 'value1', prop2: 15}
    const id = 'b096e2ca-2cc0-4e6d-83e2-cb932cbaad9a'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()// exige que o ID seja um UUID válido
    expect(entity._id).toBe(id)// exige que o ID seja igual ao ID passado
  })


  it('should convert a entity to a JSON', () => {
    const props = {prop1: 'value1', prop2: 15}
    const id = 'b096e2ca-2cc0-4e6d-83e2-cb932cbaad9a'
    const entity = new StubEntity(props, id)


    expect(entity.toJSON()).toStrictEqual({id, ...props})// exige que o JSON seja igual ao objeto passado
  })
})
