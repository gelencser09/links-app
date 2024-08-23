"use client";

import { InfoAlert } from "@/components/alert";
import { useEffect, useState } from "react";

const countDownSeconds = 5;

export default function LoadError() {
  const [countDown, setCountDown] = useState<number>(countDownSeconds);

  useEffect(() => {
    if (countDown < 0) {
      setCountDown(countDownSeconds);
      window.location.reload();
      return;
    }

    setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
  }, [countDown]);

  return (
    <InfoAlert>
      <section className="flex flex-col gap-3 items-center justify-center">
        <p className="font-bold">
          The database is waking up <span className="text-lg">🥴</span>
        </p>
        <p>{"Let's give it a few seconds!"}</p>
        <p>Reloading page in {countDown} seconds...</p>
      </section>
    </InfoAlert>
  );
}
