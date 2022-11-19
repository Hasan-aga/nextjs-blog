import { format, parse } from "date-fns";

export default function PrettyDate({ dateString }) {
  const date = parse(dateString, "dd-MM-yyyy", new Date());
  const prettyDate = format(date, "d MMM yyyy");
  return <time dateTim={dateString}> {prettyDate}</time>;
}
