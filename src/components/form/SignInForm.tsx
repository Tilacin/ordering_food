"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, "Требуется электронная почта")
    .email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(1, "Требуется пароль")
    .min(8, "Пароль должен содержать более 8 символов"),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Электронная почта</FormLabel>
                <FormControl>
                  <Input placeholder="e-mail" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password"{...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full mt-6">
          Вход
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        или
      </div>
      <GoogleSignInButton>Войдите с помощью аккаунта Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
      Если у вас нет учетной записи, пожалуйста&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Зарегистрируйтесь
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
