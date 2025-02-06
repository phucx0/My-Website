import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link href={'/home'}>Home</Link>
      <Link href={'/auth/sign-in'}>Go to Sign In</Link>
      <Link href={'/auth/sign-up'}>Go to Sign Up</Link>
    </div>
  );
}
