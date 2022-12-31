import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export function formateDateDistance(date: unknown): string {
  console.log("PORRA DA DATA: ", date);
  if (!date) {
    return formatDistanceToNow(new Date(), {
      includeSeconds: true,
      locale: ptBr,
      addSuffix: true,
    });
  }
  return formatDistanceToNow(new Date(date as string), {
    includeSeconds: true,
    locale: ptBr,
    addSuffix: true,
  });
}
