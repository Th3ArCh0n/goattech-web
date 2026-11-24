import type { Metadata } from "next";
import NotFound from "@/app/not-found";

export const metadata: Metadata = {
  title: "404",
};

export default function FourOhFourPage() {
  return <NotFound />;
}
