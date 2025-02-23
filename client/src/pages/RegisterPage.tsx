import { useState, ChangeEvent, FormEvent, memo, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import { FormData } from "@/types";
import { validateStep1, validateStep2 } from "@/lib/formValidation";
import PersonalInfoStep from "@/components/registration/PersonalInfoStep";
import FinancialInfoStep from "@/components/registration/FinancialInfoStep";
import useStore from "@/hooks/useStore";
import { register } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import { removeId, setUser } from "@/store/authSlice";

const INITIAL_FORM_DATA: FormData = {
  title: "mr",
  fullName: "",
  dateOfBirth: undefined,
  address: "",
  duration: "",
  about: "",
  employment: "",
  savings: "",
};

const RegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const router = useNavigate();
  const { dispatch, user, userId } = useStore();

  useEffect(() => {
    if (user && user._id) {
      router("/profile");
    }
  }, [user, router]);

  const handleChange = useCallback(
    (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleSelectChange = useCallback(
    (field: keyof FormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const error = step === 1 ? validateStep1(formData) : validateStep2(formData);

      if (error) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error,
        });
        return;
      }

      if (step === 1) {
        setStep(2);
        return;
      }

      try {
        setIsLoading(true);
        const response = await register({
          userId,
          bio: formData.about,
          dateOfBirth: formData.dateOfBirth,
          employmentStatus: formData.employment,
          name: formData.fullName,
          financialAssets: formData.savings,
          title: formData.title,
          homeAddress: formData.address,
          yearsAtAddress: formData.duration,
        });

        toast({
          title: "Success!",
          variant: "success",
          description: "Your registration has been completed successfully.",
        });
        dispatch(removeId());
        dispatch(setUser({ user: response.user }));
        setFormData(INITIAL_FORM_DATA);
        router("/profile");
        //eslint-disable-next-line
      } catch (error: any) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error?.response?.data?.message || "Failed to submit form. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [step, formData, userId, dispatch, router]
  );

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-none font-semibold">
        <CardHeader className="space-y-1 text-center mb-7">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2].map((stepNumber) => (
              <div
                key={stepNumber}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer",
                  step === stepNumber ? "bg-blue-600 text-white" : "bg-gray-200"
                )}
                onClick={() => stepNumber <= step && setStep(stepNumber)}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <CardTitle className="text-2xl">
            {step === 1 ? "Personal information" : "Financial information"}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Please answer questions as accurately as possible."
              : "All your information is stored securely."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <PersonalInfoStep
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                setFormData={setFormData}
              />
            ) : (
              <FinancialInfoStep
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
            )}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : step === 1 ? "Continue" : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(RegistrationPage);
