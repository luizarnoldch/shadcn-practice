// app/components/form-login.tsx
"use client";

import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/form-safe"
import { FormInput } from "./form-input"
import FormSubmitButton from "./form-submit-button";

const FormLogin = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!")
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmitHandler = (formData: FormData) => {
    const title = formData.get("email") as string;
    const password = formData.get("password") as string;
    execute({ title });
  };

  return (
    <form className="space-y-3 my-2" action={onSubmitHandler}>
      <div>
        <FormInput id="email" label="Email" type="email" errors={fieldErrors} />
        <FormInput id="password" label="Password" type="password" errors={fieldErrors} />
      </div>
      <FormSubmitButton innerText="Login" customClasses="w-full" />
    </form>
  );
};

export default FormLogin;
