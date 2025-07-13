import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Clock, Code, Hammer, Sparkles } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Coming Soon',
        href: '/coming-soon',
    },
];

export default function ComingSoon() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Coming Soon" />

            <div className="flex min-h-[80vh] items-center justify-center p-4">
                <div className="mx-auto max-w-lg">
                    <Card className="relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }}
                            />
                        </div>

                        <CardHeader className="relative space-y-4 text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                                <Hammer className="h-10 w-10 text-white" />
                            </div>

                            <div className="space-y-2">
                                <CardTitle className="text-2xl font-bold">Sedang Dikembangkan</CardTitle>
                                <CardDescription className="text-base">Fitur ini masih dalam tahap pengembangan</CardDescription>
                            </div>
                        </CardHeader>

                        <CardContent className="relative space-y-6">
                            <div className="space-y-4 text-center">
                                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>Segera hadir untuk Anda</span>
                                </div>

                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Tim developer sedang bekerja keras untuk menghadirkan fitur terbaik. Terima kasih atas kesabaran Anda menunggu.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-4">
                                <div className="space-y-2 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                                        <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="text-xs text-muted-foreground">Coding</div>
                                </div>

                                <div className="space-y-2 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                                        <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="text-xs text-muted-foreground">Testing</div>
                                </div>

                                <div className="space-y-2 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20">
                                        <Hammer className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="text-xs text-muted-foreground">Building</div>
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/dashboard">
                                        <ArrowLeft className="h-4 w-4" />
                                        Kembali ke Dashboard
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
