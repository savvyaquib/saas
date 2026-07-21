"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
});

const CompanionForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return <div>CompanionForm</div>;
};

export default CompanionForm;
