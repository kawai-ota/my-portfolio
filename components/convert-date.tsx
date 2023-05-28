import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

interface DateProps {
  dateISO: string;
}

export default function ConvertDate({ dateISO }: DateProps) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", { locale: ja })}
    </time>
  );
}
