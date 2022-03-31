import { object, string, ref } from 'yup';

const ValidationYup = object({
    email: string().email("Geçerli bir email girin").required("Zorunlu alan"),
    password: string().min(5, "parolanız en az 5 karakter olmalıdır").required("Zorunlu alan"),
    // initialValues teki kullandığımız keyleri kullanırsak eşleşir
    passwordConfirm: string().oneOf([ref("password")], "Parolalar uyuşmuyor").required("Zorunlu alan"),

  });

  export default ValidationYup;