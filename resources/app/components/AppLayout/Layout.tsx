import React, { useRef } from "react";
import { Button } from "../ui/button";
import {
  BarChart4,
  Calculator,
  CircleUserRound,
  Info,
  LogIn,
  LogOutIcon,
  MessageCircleMore,
  Newspaper,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import SmokeCalculator from "../Calculator/SmokeCalculator";
import AuthModal from "../AuthModal/AuthModal";
import Cookies from "js-cookie";
import LogOut from "../LogOutDialog/LogOut";

export default function Layout({ children }: { children: React.ReactNode }) {
  const token = Cookies.get("token");

  return (
    <div className="flex flex-row h-screen">
      <TooltipProvider>
        <div className="h-screen p-4 sticky top-0 flex flex-col justify-center gap-4">
          {!token && (
            <Tooltip>
              <TooltipTrigger asChild>
                <AuthModal
                  ButtonTrigger={
                    <Button size={"icon"} variant={"default"}>
                      <LogIn />
                    </Button>
                  }
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Log In/Register</p>
              </TooltipContent>
            </Tooltip>
          )}
          {token && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon"} variant={"default"}>
                  <CircleUserRound />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Akun</p>
              </TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon"} variant={"default"}>
                <Info />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Headline</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon"} variant={"default"}>
                <MessageCircleMore />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Testimoni</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon"} variant={"default"}>
                <Newspaper />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Articles</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={"icon"} variant={"default"}>
                <BarChart4 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Statistik</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <SmokeCalculator
              ButtonTrigger={
                <TooltipTrigger asChild>
                  <Button size={"icon"} variant={"default"}>
                    <Calculator />
                  </Button>
                </TooltipTrigger>
              }
            />
            <TooltipContent>
              <p>Kalkulator Pengeluaran Rokok</p>
            </TooltipContent>
          </Tooltip>
          {token && (
            <Tooltip>
              <LogOut
                ButtonTrigger={
                  <TooltipTrigger asChild>
                    <Button size={"icon"} variant={"destructive"}>
                      <LogOutIcon />
                    </Button>
                  </TooltipTrigger>
                }
              />
              <TooltipContent>
                <p>Log Out</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
      <div className="h-screen flex-col items-center justify-between  m-auto p-10 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {children}
      </div>
    </div>
  );
}
