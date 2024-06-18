"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const FormSchema = z.object({
  cigarettesPerDay: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 1, {
      message: "Cigarettes per day must be at least 1.",
    }),
  costPerCigarette: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0.01, {
      message: "Cost per cigarette must be at least 0.01.",
    }),
  yearsSmoked: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 1, {
      message: "Years smoked must be at least 1.",
    }),
});

export function Calculator() {
  const [totalCost, setTotalCost] = useState(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cigarettesPerDay: 0,
      costPerCigarette: 0,
      yearsSmoked: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const totalCost =
      data.cigarettesPerDay * data.costPerCigarette * data.yearsSmoked * 365;
    setTotalCost(totalCost);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 space-y-6 m-auto"
      >
        <FormField
          control={form.control}
          name="cigarettesPerDay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cigarettes Per Day</FormLabel>
              <FormControl>
                <Input type="number" placeholder="10" {...field} />
              </FormControl>
              <FormDescription>
                The number of cigarettes you smoke each day.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="costPerCigarette"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cost Per Cigarette</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Rp. 50.000"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The cost of one cigarette in your currency.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="yearsSmoked"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years Smoked</FormLabel>
              <FormControl>
                <Input type="number" placeholder="5" {...field} />
              </FormControl>
              <FormDescription>
                The number of years you have been smoking.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center ">
          <Button type="submit">Calculate</Button>
          <span className="text-xl ml-6">
            Total: Rp.{totalCost.toLocaleString()}
          </span>
        </div>
      </form>
    </Form>
  );
}

export default Calculator;
