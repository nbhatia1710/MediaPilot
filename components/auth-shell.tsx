import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const AuthShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex min-h-screen h-full w-full flex-col items-center justify-center gap-6 p-4">
            <Image
                src="/images/templates/axis/auth-background.svg"
                alt="Background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            <div className="relative z-10 flex flex-col items-center">
                <Link href="/">
                    <Image
                        className="h-10 w-auto object-contain brightness-0 invert"
                        src="/logo/mediapilot.png"
                        alt="MediaPilot Logo"
                        width={180}
                        height={60}
                        priority
                    />
                </Link>
            </div>

            <Card className="relative z-10 w-full max-w-112 border-0 bg-background dark:bg-background/80 shadow-xl backdrop-blur-sm rounded-4xl">
                <CardContent className="pt-8 pb-8">
                    {children}
                </CardContent>
            </Card>

            <p className="relative z-10 max-w-xs text-center text-xs text-white/80">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-secondary"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-secondary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    );
};

export default AuthShell;
