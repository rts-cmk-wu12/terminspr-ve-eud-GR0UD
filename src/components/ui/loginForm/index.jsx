import Heading from "../heading";

export default function LoginForm() {
  return (
    <section className='login__container'>
      <Heading as='h1' size='xl' color='light'>
        Login
      </Heading>
      <form className='login__container__form'>
        <input
          className='login__container__form__input'
          type='username'
          name='username'
          placeholder='brugernavn'
          required
        />
        <input
          className='login__container__form__input'
          type='password'
          name='password'
          placeholder='adgangskode'
          required
        />
        <button className='login__container__form__button' type='submit'>
          Log ind
        </button>
      </form>
    </section>
  );
}
