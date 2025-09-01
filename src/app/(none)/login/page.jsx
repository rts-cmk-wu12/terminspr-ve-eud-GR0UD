import Image from "next/image";
import LoginForm from "@/components/ui/loginForm";

export default function Login() {
  return (
    <main className='login'>
      <div className='login__image-container'>
        <Image
          className='login__image'
          src='/images/splash-image.jpg'
          alt='Login background image'
          width={800}
          height={400}
        />
      </div>

      <LoginForm />
    </main>
  );
}
