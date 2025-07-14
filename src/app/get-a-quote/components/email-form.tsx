"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language/LanguageContext";

const formSchema = z.object({
  subject: z.string(),
  message: z.string(),
});

export function EmailForm() {
  const language = useLanguage().language;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mail = `mailto:inquiries@rakankertas.com?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(values.message)}`;
    window.location.href = mail;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {language === "en"
                  ? "Subject"
                  : language === "ch"
                  ? "主题"
                  : "Subjek"}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    language === "en"
                      ? "Enter the email's subject matter"
                      : language === "ch"
                      ? "输入电子邮件的主题"
                      : "Masukkan subjek emel"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {language === "en"
                  ? "Body"
                  : language === "ch"
                  ? "身体"
                  : "Badan"}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    language === "en"
                      ? "Tell us about what you need"
                      : language === "ch"
                      ? "告诉我们您需要什么"
                      : "Beritahu kami tentang apa yang anda perlukan"
                  }
                  className="resize-none h-48"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
          {language === "en" ? "Send" : language === "ch" ? "发送" : "Hantar"}
        </Button>
      </form>
    </Form>
  );
}
