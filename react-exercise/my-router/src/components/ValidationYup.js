import { object, string, ref } from 'yup';

const ValidationYup = object({
    email: string().email().required(),
    password: string().min(5).required(),
    // initialValues teki kullandığımız keyleri kullanırsak eşleşir
    passwordConfirm: string().oneOf([ref("password")]).required(),

  });

  export default ValidationYup;