import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordInput from "../components/PasswordInput";
import { MovingInput } from "../components/ui/input";
import { memo, useEffect, useState } from "react";
import { InfoIcon } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { validateSignupForm } from "@/lib/formValidation";
import { signup } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setId } from "@/store/authSlice";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number | string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setLoading]  = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.auth.userId);
  const user = useAppSelector(state=>state.auth.user)

  useEffect(() => {
    if(user&&user._id){
      navigate("/profile");
      return
    }
    if (userId || userId.length >1) {
      navigate("/register");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true)

      const newErrors = validateSignupForm(phone as string, email, password, confirmPassword);
      setErrors(newErrors);


      if (!Object.values(newErrors).some(error => error !== '')) {
        const { userId } = await signup({ email, password, phone: phone as string });

        dispatch(setId({ userId }));

        toast({
          title: "Success!",
          variant: "success",
          description: "Your details has been submitted successfully. Please enter your personal information to proceed",
        });

        setEmail("");
        setPassword("");
        setPhone("");
        setConfirmPassword("");

        navigate("/register");
      }
      //eslint-disable-next-line
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error in submitting form",
        description: error.response.data.message || "Failed to submit form. Please try again.",
      });
    } finally{
      setLoading(false)
    }
  };

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
              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-4">Contact details</h3>
                <div className="space-y-1">
                  <MovingInput
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="username"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
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
                    className="absolute right-3 top-[14px] text-muted-foreground"
                    aria-label="More information"
                  >
                    <InfoIcon fill="gray" color="white" size={20} />
                  </button>
                </div>
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-4">Set a password</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <PasswordInput
                      label="Create a password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>
                  <div className="space-y-1">
                    <PasswordInput
                      label="Confirm your password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs text-muted-foreground flex items-start gap-2">
                <InfoIcon size={16} className="mt-0.5 shrink-0" />
                <p>We need a password to keep your information safe. But don't worry, we'll also send your custom RentlyPass URL via email.</p>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
                {isLoading?"Submitting...":"Create your account"}
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
};

export default memo(SignupPage);