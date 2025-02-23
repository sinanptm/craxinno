import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format, parse, isValid } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dispatch, memo, SetStateAction, useId, useState, ChangeEvent } from "react";

type Props = {
  date: Date | undefined;
  //eslint-disable-next-line
  setDate: Dispatch<SetStateAction<any>>;
  label?: string;
  placeholder?: string;
  className?: string;
};

const DatePicker = ({ 
  date, 
  setDate, 
  label = "Date of birth",
  placeholder = "DD/MM/YYYY",
  className 
}: Props) => {
  const id = useId();
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = date ? format(date, "dd/MM/yyyy") : '';

  const handleCalendarSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setInputValue(newDate ? format(newDate, "dd/MM/yyyy") : '');
    setIsOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length === 10) {
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        setDate(parsedDate);
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Input
          id={id}
          type="text"
          value={inputValue || formattedDate}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="h-12 pl-3 pr-10"
          aria-label={label}
          aria-describedby={`${id}-description`}
        />
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-12 w-12 hover:bg-transparent"
              aria-label="Open calendar"
            >
              <CalendarIcon
                size={16}
                className="text-muted-foreground/80 hover:text-foreground transition-colors"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleCalendarSelect}
              initialFocus
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div 
        id={`${id}-description`} 
        className="text-xs text-gray-500 mt-1"
      >
        Enter date in DD/MM/YYYY format or use calendar
      </div>
    </div>
  );
};

export default memo(DatePicker);