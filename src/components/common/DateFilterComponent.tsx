import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
 
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"

const DateFilterComponent = ({ onSelect, mode = "single", width = "240px" }: { onSelect: (date: Date) => void, mode?: "single" | "range" | "multiple", width?: string }) => {
    const [date, setDate] = React.useState<Date | DateRange | Date[]>()
    return (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              style={{border : "1px solid black", width}}
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date as Date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode={mode as "single"}
              selected={date as Date}
              onSelect={(selectedDate: Date | DateRange | undefined) => {
                setDate(selectedDate);
                onSelect(selectedDate as Date);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )
    }
    

export default DateFilterComponent;