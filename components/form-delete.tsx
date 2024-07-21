"use client";
import { FC, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type FormDeleteProps = {
  children: ReactNode;
};

export const FormDelete = ({ children }: FormDeleteProps): JSX.Element => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} variant="destructive">
      {children}
    </Button>
  );
};
