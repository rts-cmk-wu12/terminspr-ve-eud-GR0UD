"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/getCookie";

export default function SplashScreen() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  return (
    <div className={`splash-screen ${isExiting ? "splash-screen--exit" : ""}`}>
      <div className='splash-screen__content'>
        <div className='splash-screen__title'>
          <span className='splash-screen__title-text splash-screen__title-text--primary'>
            Landrup
          </span>
          <span className='splash-screen__title-text splash-screen__title-text--secondary'>
            Dans
          </span>
        </div>
        <button
          className='splash-screen__button'
          onClick={handleStart}
          disabled={isExiting}
        >
          Kom i gang
        </button>
      </div>
    </div>
  );
}
