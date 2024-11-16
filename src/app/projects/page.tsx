// app/projects/page.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <h4 className="font-bold text-lg">Project A</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            An innovative project that revolutionizes the tech landscape.
          </p>
          <Button variant="default" className="mt-4">
            Learn More
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h4 className="font-bold text-lg">Project B</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            A cutting-edge solution designed to optimize user experience.
          </p>
          <Button variant="default" className="mt-4">
            Learn More
          </Button>
        </CardContent>
      </Card>
      {/* Add more project cards as needed */}
    </div>
  );
}
