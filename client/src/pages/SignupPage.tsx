import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordInput from "../components/PasswordInput";
import { MovingInput } from "../components/ui/input";
import { memo, useState } from "react";
import { InfoIcon } from 'lucide-react';
import { Link } from "react-router-dom";

const SignupPage = ()=> {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number | string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none font-semibold">
        <CardHeader className="space-y-1 text-center mb-7">
          <CardTitle className="text-2xl ">Create your account</CardTitle>
          <CardDescription>Set up your RentlyPass in as little as 2 minutes.</CardDescription>
        </CardHeader>
        <CardContent >
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-4">Contact details</h3>
                <MovingInput 
                  type="email" 
                  name="email"
                  value={email} 
                  label="Email address" 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="relative">
                <MovingInput 
                  type="tel" 
                  name="phone"
                  value={phone} 
                  label="Mobile number" 
                  onChange={(e) => setPhone(e.target.value)} 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-label="More information"
                >
                  <InfoIcon fill="gray" color="white" size={20} />
                </button>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-4">Set a password</h3>
                <div className="space-y-3">
                  <PasswordInput
                    label="Create a password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <PasswordInput
                    label="Confirm your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs text-muted-foreground flex items-start gap-2">
                <InfoIcon size={16} className="mt-0.5 shrink-0" />
                <p>We need a password to keep your information safe. But don't worry, we'll also send your custom RentlyPass URL via email.</p>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Create your account
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By clicking "Create your account", you are agreeing to our{" "}
                <Link to="#" className="underline">
                  Terms & Conditions
                </Link>
                {" "}and{" "}
                <Link to="#" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default memo(SignupPage)