// app/components/form-submit-button.tsx
"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  innerText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  disabled?: boolean;
  customClasses?: string;
};

const FormSubmitButton = ({ innerText = "Submit", variant, disabled, customClasses }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      size={"sm"}
      variant={variant || "default"}
      type="submit"
      disabled={disabled || pending}
      className={cn("text-sm", customClasses)}
    >
      {innerText}
    </Button>
  );
};

export default FormSubmitButton;
