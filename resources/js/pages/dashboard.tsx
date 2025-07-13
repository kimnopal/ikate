import ComingSoonCard from '@/components/coming-soon-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { redirectToComingSoon, withFeatureCheck } from '@/utils/coming-soon';
import { Head, Link } from '@inertiajs/react';
import { BarChart3, Bell, FileText, MessageSquare, Settings, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-muted-foreground">Selamat datang di dashboard IKATE. Beberapa fitur masih dalam pengembangan.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2,450</div>
                            <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Event Aktif</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">Event bulan ini</p>
                        </CardContent>
                    </Card>

                    <ComingSoonCard title="Laporan Analytics" description="Fitur analitik mendalam" size="sm" />
                </div>

                {/* Main Content Area */}
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Left Column - Working Features */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Fitur Tersedia</CardTitle>
                                <CardDescription>Fitur yang dapat digunakan saat ini</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button asChild variant="outline" className="w-full justify-start">
                                    <Link href="/alumni">
                                        <Users className="mr-2 h-4 w-4" />
                                        Data Alumni
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full justify-start">
                                    <Link href="/settings/profile">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Pengaturan Profil
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full justify-start">
                                    <Link href="/coming-soon">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Lihat Halaman Coming Soon
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Coming Soon Features */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Fitur Segera Hadir</CardTitle>
                                <CardDescription>Fitur yang sedang dalam pengembangan</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                    disabled
                                    onClick={() =>
                                        withFeatureCheck('messaging', () => {
                                            alert('Fitur messaging aktif!');
                                        })
                                    }
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Sistem Pesan
                                </Button>
                                <Button variant="outline" className="w-full justify-start" disabled onClick={() => redirectToComingSoon()}>
                                    <Bell className="mr-2 h-4 w-4" />
                                    Notifikasi
                                </Button>
                                <Button variant="outline" className="w-full justify-start" disabled onClick={() => redirectToComingSoon()}>
                                    <BarChart3 className="mr-2 h-4 w-4" />
                                    Laporan & Analitik
                                </Button>
                            </CardContent>
                        </Card>

                        <ComingSoonCard title="Integrasi API" description="Koneksi dengan sistem eksternal" size="md" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
