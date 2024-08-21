// app/page.tsx
import FormLogin from "./(components)/form-login";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 shadow-lg rounded-lg bg-primary-foreground">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <FormLogin />
      </div>
    </div>
  );
}
