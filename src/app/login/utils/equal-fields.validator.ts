import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

//Validator Function
export const equalFieldsValidator = (...fields: string[]): ValidatorFn => {
  return (group: FormGroup): ValidationErrors | null => {
    const areEquals = fields
      .map((fieldName) => group.get(fieldName))
      .filter(Boolean)
      .every((control, i, array) => control.value === array[0].value);

    return areEquals ? null : { equalFields: true };
  };
};
