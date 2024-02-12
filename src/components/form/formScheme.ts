import {boolean, object, string} from 'yup';

export const formSchema = object({
  name: string().required().required('name required'),
  company: string().required().nullable(),
  email: string().email().required('email required'),
  ph_number: string().nullable(),
  checked: boolean().isTrue('Must be true'),
});
