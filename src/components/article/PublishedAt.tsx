import { useFormattedDate } from "../../hooks/useFormattedDate";
import CalendarIcon from "@mui/icons-material/CalendarToday";

type PublishedAtProps = {
  date: string;
  className: string
};
export default function PublishedAt({ date, className }: PublishedAtProps) {
  const fotmattedDate = useFormattedDate(date);
  return (
    <div className={className}>
      <span>
        <CalendarIcon fontSize="small" />
      </span>
      <span> {fotmattedDate}</span>
    </div>
  );
}
