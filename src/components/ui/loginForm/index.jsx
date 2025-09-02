import { useActionState } from "react";
import Heading from "../heading";

import doTheLoginThing from "@/actions/doTheLoginThing";

const initialState = { ok: false, message: "" };

export default function LoginForm() {
  const [formState, formAction, isPending] = useActionState(
    doTheLoginThing,
    initialState
  );

  return (
    <section className='login__container'>
      <Heading as='h1' size='xl' color='light'>
        Login
      </Heading>
      <form
        action={formAction}
        aria-busy={isPending}
        className='login__container__form'
      >
        <input
          className='login__container__form__input'
          type='text'
          name='username'
          placeholder='brugernavn'
        />
        <p
          role={formState.ok ? "status" : "alert"}
          className='login__container__form__error'
        >
          {formState?.properties?.username?.errors}
        </p>
        <input
          className='login__container__form__input'
          type='password'
          name='password'
          placeholder='adgangskode'
        />
        <p
          role={formState.ok ? "status" : "alert"}
          className='login__container__form__error'
        >
          {formState?.properties?.password?.errors}
        </p>
        <button
          className='login__container__form__button'
          type='submit'
          disabled={isPending}
        >
          Log ind
        </button>
        <p className='login__container__form__error'>{formState?.errors}</p>
      </form>
    </section>
  );
}
