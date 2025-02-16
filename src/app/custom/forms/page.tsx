import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const links = [
  { href: '/custom/forms/form-basic', label: 'Form Basic', description: 'Basic form example.' },
  { href: '/custom/forms/form-error', label: 'Form Error', description: 'Form with error handling.' },
  { href: '/custom/forms/form-complete', label: 'Form Complete', description: 'Custom form complete.' },
];

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-8 p-8 text-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {links.map(({ href, label, description }) => (
          <Link key={href} href={href} passHref>
            <div className="cursor-pointer h-full">
              <Card className="h-full flex flex-col justify-between hover:shadow-xl hover:shadow-border transition-shadow duration-200 text-card-foreground bg-primary-foreground">
                <CardHeader>
                  <CardTitle>{label}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>Learn more about {label.toLowerCase()}.</p>
                </CardContent>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
