// app/about/page.tsx
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="p-8 space-y-6">
            <Card>
                <CardHeader>
                    <h4 className="font-bold text-2xl">
                        About UWEZO
                    </h4>
                </CardHeader>
                <CardContent>
                    <p className="text-base">
                        UWEZO is a tech startup dedicated to empowering individuals and
                        businesses with innovative technology solutions. Our mission is to
                        bridge the gap between technology and people, creating seamless
                        digital experiences.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <h5 className="font-semibold text-xl">
                        Our Vision
                    </h5>
                </CardHeader>
                <CardContent>
                    <p className="text-base">
                        We envision a world where technology serves humanity, making
                        everyday tasks simpler, more efficient, and more accessible to all.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
