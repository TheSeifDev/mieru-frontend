import LoginForm from "@/src/components/auth/login/LoginForm";
import { Navbar } from "@/src/components/marketing/navbar/Navbar";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LoginForm />
    </main>
  );
} 