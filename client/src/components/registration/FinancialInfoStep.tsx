import { FormData } from "@/types";
import { MovingInput } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChangeEvent } from "react";

interface FinancialInfoStepProps {
  formData: FormData;
  handleChange: (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (field: keyof FormData) => (value: string) => void;
}

export const FinancialInfoStep = ({ formData, handleChange, handleSelectChange }: FinancialInfoStepProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-gray-500 mb-4">Financial details</h3>
      <Select value={formData.employment} onValueChange={(value) => handleSelectChange("employment")(value)}>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="What is your current employment status?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">Full-time employed</SelectItem>
          <SelectItem value="part-time">Part-time employed</SelectItem>
          <SelectItem value="self-employed">Self-employed</SelectItem>
          <SelectItem value="unemployed">Unemployed</SelectItem>
          <SelectItem value="student">Student</SelectItem>
          <SelectItem value="retired">Retired</SelectItem>
        </SelectContent>
      </Select>

      <MovingInput
        type="number"
        name="savings"
        value={formData.savings}
        label="Additional savings/investments"
        onChange={handleChange("savings")}
      />
    </div>
  );
};