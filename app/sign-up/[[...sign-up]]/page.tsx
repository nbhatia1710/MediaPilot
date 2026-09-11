import { SignUp } from "@clerk/nextjs";
import AuthShell from "@/components/auth-shell";
import { clerkAuthAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <AuthShell>
      <SignUp appearance={clerkAuthAppearance} />
    </AuthShell>
  );
}
