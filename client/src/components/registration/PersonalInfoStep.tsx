import { FormData } from "@/types";
import { InfoIcon } from "lucide-react";
import { MovingInput } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/DatePicker";
import { ChangeEvent, memo } from "react";

interface PersonalInfoStepProps {
  formData: FormData;
  handleChange: (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (field: keyof FormData) => (value: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PersonalInfoStep = ({
  formData,
  handleChange,
  handleSelectChange,
  setFormData,
}: PersonalInfoStepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-gray-500 mb-4">Personal details</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/4">
              <Select value={formData.title} onValueChange={(value) => handleSelectChange("title")(value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Mr" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr</SelectItem>
                  <SelectItem value="mrs">Mrs</SelectItem>
                  <SelectItem value="miss">Miss</SelectItem>
                  <SelectItem value="ms">Ms</SelectItem>
                  <SelectItem value="dr">Dr</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <MovingInput
                name="name"
                type="text"
                value={formData.fullName}
                label="Full Name as per your passport"
                onChange={handleChange("fullName")}
              />
            </div>
          </div>

          <DatePicker
            date={formData.dateOfBirth}
            setDate={(date) => setFormData((prev) => ({ ...prev, dateOfBirth: date! }))}
          />

          <MovingInput
            name="address"
            type="text"
            value={formData.address}
            label="Current address"
            onChange={handleChange("address")}
          />

          <div className="relative">
            <MovingInput
              type="text"
              name="duration"
              value={formData.duration}
              label="How long have you lived at this address?"
              onChange={handleChange("duration")}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-label="More information"
            >
              <InfoIcon fill="gray" color="white" size={20} />
            </button>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Tell us a bit about yourself
            </label>
            <Textarea
              value={formData.about}
              onChange={(e) => setFormData((prev) => ({ ...prev, about: e.target.value }))}
              placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
              className="min-h-[100px] resize-none"
            />
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground flex items-start gap-2">
        <InfoIcon size={16} className="mt-0.5 shrink-0" />
        <p>All information can be edited once you have created your account.</p>
      </div>
    </div>
  );
};

export default memo(PersonalInfoStep);