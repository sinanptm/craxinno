import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordInput from "../components/PasswordInput";
import { MovingInput } from "../components/ui/input";
import { memo, useEffect, useState, useCallback, FormEvent } from "react";
import { InfoIcon } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { validateSignupForm } from "@/lib/formValidation";
import { signup } from "@/lib/api";
import { toast } from "@/hooks/useToast";
import useStore from "@/hooks/useStore";
import { setId } from "@/store/authSlice";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', phone: '', password: '', confirmPassword: '' });
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch, user, userId } = useStore();

  useEffect(() => {
    if (user?._id) {
      navigate("/profile");
      return;
    }
    if (userId) {
      navigate("/register");
    }
  }, [navigate, user, userId]);

  const handleSubmit = useCallback(async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = validateSignupForm(phone, email, password, confirmPassword);
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      try {
        const response = await signup({ email, password, phone });
        dispatch(setId({ userId: response.userId }));

        toast({
          title: "Success!",
          variant: "success",
          description: "Your details have been submitted successfully. Please enter your personal information to proceed.",
        });

        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        navigate("/register");
        //eslint-disable-next-line
      } catch (error:any) {
        toast({
          variant: "destructive",
          title: "Error in submitting form",
          description: error?.response?.data?.message || "Failed to submit form. Please try again.",
        });
      }
    }
    setLoading(false);
  }, [phone, email, password, confirmPassword, dispatch, navigate]);

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none font-semibold">
        <CardHeader className="space-y-1 text-center mb-7">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>Set up your RentlyPass in as little as 2 minutes.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 mb-4">Contact details</h3>
              <div className="space-y-1">
                <MovingInput type="email" name="email" value={email} autoComplete="username" label="Email address" onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="relative space-y-1">
                <MovingInput type="tel" name="phone" value={phone} label="Mobile number" onChange={(e) => setPhone(e.target.value)} />
                <button type="button" className="absolute right-3 top-[14px] text-muted-foreground" aria-label="More information">
                  <InfoIcon fill="gray" color="white" size={20} />
                </button>
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
              <h3 className="text-sm font-bold text-gray-500 mb-4">Set a password</h3>
              <div className="space-y-3">
                <PasswordInput label="Create a password" onChange={(e) => setPassword(e.target.value)} value={password} />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                <PasswordInput label="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>
            </div>
            <div className="space-y-4 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <InfoIcon size={16} className="mt-0.5 shrink-0" />
                <p>We need a password to keep your information safe. But don't worry, we'll also send your custom RentlyPass URL via email.</p>
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
                {isLoading ? "Submitting..." : "Create your account"}
              </Button>
              <p className="text-center">
                By clicking "Create your account", you agree to our <Link to="#" className="underline">Terms & Conditions</Link> and <Link to="#" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(SignupPage);
