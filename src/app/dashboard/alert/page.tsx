import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4 m-auto" />
        <AlertTitle>Alert default variant</AlertTitle>
        <AlertDescription>
          This is the default variant of the alert
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Alert destructive variant</AlertTitle>
        <AlertDescription>
          This is the destructive variant of the alert
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Alert success variante</AlertTitle>
        <AlertDescription>
          This is the success variant of the alert
        </AlertDescription>
      </Alert>
    </div>
  );
}
