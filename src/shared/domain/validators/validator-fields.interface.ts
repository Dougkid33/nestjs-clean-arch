export type FieldsErrors = {
  [field: string]: string[];
};

//props abreviação de propriedades
export interface ValidatorFieldsInterface<PropsValidated> {
  erros: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
