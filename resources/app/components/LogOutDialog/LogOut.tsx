import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

export default function LogOut({
  ButtonTrigger,
}: {
  ButtonTrigger: React.ReactNode;
}) {
  const LogOutFn = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{ButtonTrigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda benar ingin keluar??</AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan log-out dari sesi ini
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive hover:bg-destructive" onClick={LogOutFn}>
            Keluar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
