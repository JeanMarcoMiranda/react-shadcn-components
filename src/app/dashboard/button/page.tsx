import { Button } from "@/components/ui/button";
import { Mail, ChevronRight, Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="success">success</Button>

      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>

      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button capitalize={true}>Capitalized</Button>

      <Button variant="outline" size="icon" className="m-auto">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled capitalize>
        <Loader2 className="m-2 h-4 w-4 animate-spin" />
        please wait
      </Button>
    </div>
  );
}
