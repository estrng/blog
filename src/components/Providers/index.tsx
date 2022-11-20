import { ThemeProvider } from "../../contexts/ThemeContext";
import { ContextCompose } from "../ContextComposer";
import { ProvidersProps } from "./types";

export function Providers({ children }: ProvidersProps) {
  const Providers = [ThemeProvider];
  return <ContextCompose components={Providers}>{children}</ContextCompose>;
}
