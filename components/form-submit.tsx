"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type FormSubmitProps = {
  children: ReactNode;
};

export const FormSubmit = ({ children }: FormSubmitProps): JSX.Element => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {children}
    </Button>
  );
};
