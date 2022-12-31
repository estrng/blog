import { formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export function formateDateDistance(date: unknown): string {
  return formatDistanceToNow(new Date(date as string), {
    includeSeconds: true,
    locale: ptBr,
    addSuffix: true,
  });
}
