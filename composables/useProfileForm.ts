import { object, string } from "yup";
import type { IUser } from "~/store/user/user.types";
import { validateInn } from "~/utils/validator.ts/inn.validator";

export const useProfileForm = (user: Ref<IUser | null>) => {
  const passwordRules = string()
    .min(10, rules.minPassword)
    .max(40, rules.maxPassword)
    .matches(/^(?=.*[0-9])/, rules.number)
    .matches(/^(?=.*[A-Z])/, rules.letter)
    .matches(/^(?=.*[!@#$%^&*])/, rules.symbol)
    .label("");

  const { meta, values } = useForm({
    validationSchema: object({
      fio: string().required(rules.required).label(""),
      email: string().email(rules.email).required(rules.required).label(""),
      inn: string()
        .required(rules.required)
        .test("validateInn", rules.inn, validateInn)
        .label(""),

      bankName: string().label(""),
      bankBik: string().label(""),
      bankCorAccount: string().label(""),
      bankCurAccount: string().label(""),

      password: passwordRules,
      newPassword: passwordRules,
      repeatPassword: passwordRules,
    }),
    initialValues: {
      fio: user.value?.fio,
      email: user.value?.email,
      inn: user.value?.inn,

      bankName: user.value?.bank?.name,
      bankBik: user.value?.bank?.bik,
      bankCorAccount: user.value?.bank?.correspondentAccount,
      bankCurAccount: user.value?.bank?.currentAccount,

      password: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  return {
    meta,
    values,
  };
};
