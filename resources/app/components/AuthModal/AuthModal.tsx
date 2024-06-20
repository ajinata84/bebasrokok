import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// Define the login schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Define the signup schema
const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  username: z.string().min(4, "Username must be at least 4 characters"),
  age: z.coerce.number().min(1, "Age is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

export default function AuthModal({
  ButtonTrigger,
}: {
  ButtonTrigger: React.ReactNode;
}) {
  const apiUrl = "localhost:8080";

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize the form with either login or signup schema
  const form = useForm<LoginFormValues | SignupFormValues>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      age: undefined,
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues | SignupFormValues> = async (
    data
  ) => {
    console.log("bu");
    setLoading(true);
    try {
      const endpoint = isLogin
        ? "http://localhost:8080/login"
        : "http://localhost:8080/register";
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const resdata = await response.text();
      if (response.ok) {
        if (isLogin) {
          Cookies.set("token", resdata);
          toast({
            title: "Login Successful",
          });
        }
        if (!isLogin) {
          toast({
            title: "Register Successful, now redirecting to login",
          });
          setIsLogin(!isLogin);
        }
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: "Authentication Error",
        description:
          "Failed to authenticate. Please check your credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{ButtonTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? "Login" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {isLogin ? "Log in to your account" : "Create a new account"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isLogin && (
              <>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Age" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <Button
              type="submit"
              className="w-full h-[40px] bg-[#04A775] hover:bg-[#016B4B]"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-white"></div>
              ) : isLogin ? (
                "Continue"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex-row flex items-center">
          <p className="font-semibold">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <Button
            variant={"link"}
            className="text-[#004DBB]"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
