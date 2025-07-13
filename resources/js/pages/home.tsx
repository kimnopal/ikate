import MobileNav from '@/components/mobile-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import StatCard from '@/components/ui/stat-card';
import { Head } from '@inertiajs/react';
import {
    Award,
    Briefcase,
    Building2,
    GraduationCap,
    Handshake,
    Home,
    Lightbulb,
    Mail,
    MapPin,
    Newspaper,
    Phone,
    Phone as PhoneIcon,
    Search,
    Target,
    UserPlus,
    Users,
} from 'lucide-react';
import React from 'react';

const HomePage: React.FC = () => {
    const navigationItems = [
        { name: 'Beranda', href: '/', icon: Home },
        { name: 'Alumni', href: '/alumni', icon: Users },
        { name: 'Karir', href: '/karir', icon: Briefcase },
        { name: 'Berita', href: '/berita', icon: Newspaper },
        { name: 'Kontak', href: '/kontak', icon: Phone },
    ];

    const pengurus = [
        {
            name: 'Dr. Ir. Ahmad Fauzi, M.T.',
            position: 'Ketua Umum',
            image: '/images/pengurus/ketua.jpg',
            initials: 'AF',
            description: 'Dosen Teknik Elektro Universitas Indonesia',
        },
        {
            name: 'Ir. Sarah Putri, M.Eng.',
            position: 'Wakil Ketua',
            image: '/images/pengurus/wakil-ketua.jpg',
            initials: 'SP',
            description: 'Senior Engineer PT PLN',
        },
        {
            name: 'Ir. Budi Santoso, M.Sc.',
            position: 'Sekretaris',
            image: '/images/pengurus/sekretaris.jpg',
            initials: 'BS',
            description: 'Project Manager PT Telkom',
        },
        {
            name: 'Ir. Dian Kusuma, M.T.',
            position: 'Bendahara',
            image: '/images/pengurus/bendahara.jpg',
            initials: 'DK',
            description: 'Financial Controller PT Astra',
        },
        {
            name: 'Ir. Rina Marlina, M.Eng.',
            position: 'Ketua Divisi Karir',
            image: '/images/pengurus/divisi-karir.jpg',
            initials: 'RM',
            description: 'HR Manager PT Samsung',
        },
        {
            name: 'Ir. Hendra Wijaya, M.T.',
            position: 'Ketua Divisi Pendidikan',
            image: '/images/pengurus/divisi-pendidikan.jpg',
            initials: 'HW',
            description: 'Lecturer Universitas Brawijaya',
        },
    ];

    return (
        <>
            <Head title="IKATE - Ikatan Alumni Teknik Elektro" />

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 border-b bg-background shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold text-primary">IKATE</h1>
                                <p className="text-xs text-muted-foreground">Ikatan Alumni Teknik Elektro</p>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:block">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {navigationItems.map((item) => (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuLink
                                                href={item.href}
                                                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            >
                                                <item.icon className="mr-2 h-4 w-4" />
                                                {item.name}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Button variant="default">
                                <UserPlus className="mr-2 h-4 w-4" />
                                Daftar Alumni
                            </Button>
                        </div>

                        {/* Mobile Navigation */}
                        <MobileNav navigationItems={navigationItems} />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-background py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl leading-tight font-bold text-foreground lg:text-6xl">
                                    Bersatu dalam <span className="text-primary">Kemajuan</span>
                                </h1>
                                <p className="text-xl leading-relaxed text-muted-foreground">
                                    IKATE menghubungkan alumni Teknik Elektro dari berbagai generasi untuk membangun jaringan profesional, berbagi
                                    pengetahuan, dan berkontribusi pada kemajuan teknologi di Indonesia.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button variant="default" size="lg">
                                    <UserPlus className="mr-2 h-5 w-5" />
                                    Daftar Sekarang
                                </Button>
                                <Button variant="outline" size="lg">
                                    <Search className="mr-2 h-5 w-5" />
                                    Cari Alumni
                                </Button>
                            </div>

                            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <Users className="mr-2 h-5 w-5 text-primary" />
                                    <span>500+ Alumni Terdaftar</span>
                                </div>
                                <div className="flex items-center">
                                    <Award className="mr-2 h-5 w-5 text-primary" />
                                    <span>15+ Tahun Pengalaman</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Bergabung dengan IKATE</h3>
                                    <p className="text-primary-foreground/80">
                                        Dapatkan akses ke jaringan alumni terbesar di Indonesia, kesempatan karir, dan program pengembangan
                                        profesional.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">500+</div>
                                            <div className="text-sm text-primary-foreground/80">Alumni Aktif</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">50+</div>
                                            <div className="text-sm text-primary-foreground/80">Perusahaan Partner</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-accent py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Total Alumni" value="2,500+" description="Alumni terdaftar" icon={Users} color="primary" />
                        <StatCard title="Perusahaan Partner" value="150+" description="Perusahaan mitra" icon={Building2} color="secondary" />
                        <StatCard title="Program Mentoring" value="25+" description="Program aktif" icon={GraduationCap} color="accent" />
                        <StatCard title="Event Tahunan" value="12+" description="Event networking" icon={Handshake} color="muted" />
                    </div>
                </div>
            </section>

            {/* Visi Misi Section */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-foreground">Visi & Misi</h2>
                        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                            Menjadi organisasi alumni yang unggul dalam membangun jaringan profesional dan berkontribusi pada kemajuan teknologi di
                            Indonesia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Visi */}
                        <Card className="border-2 border-primary/20 transition-colors hover:border-primary/40">
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-foreground">Visi</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="leading-relaxed text-muted-foreground">
                                    Menjadi organisasi alumni Teknik Elektro terdepan yang menghubungkan, memberdayakan, dan menginspirasi generasi
                                    masa depan untuk berkontribusi pada kemajuan teknologi dan pembangunan bangsa Indonesia.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Misi */}
                        <Card className="border-2 border-secondary/20 transition-colors hover:border-secondary/40">
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                                    <Lightbulb className="h-8 w-8 text-secondary" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-foreground">Misi</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <ul className="space-y-2 text-left leading-relaxed text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        Membangun jaringan alumni yang kuat dan berkelanjutan
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        Memfasilitasi pertukaran pengetahuan dan pengalaman profesional
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        Mengembangkan program mentoring dan pengembangan karir
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        Berkontribusi pada pengembangan pendidikan teknik elektro
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Struktur Pengurus Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-foreground">Struktur Pengurus</h2>
                        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                            Tim pengurus IKATE yang berdedikasi untuk mengembangkan organisasi dan melayani anggota dengan sebaik-baiknya
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pengurus.map((person, index) => (
                            <Card key={index} className="transition-shadow hover:shadow-lg">
                                <CardHeader className="text-center">
                                    <div className="mb-4 flex justify-center">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src={person.image} alt={person.name} />
                                            <AvatarFallback className="bg-primary/10 text-xl font-semibold text-primary">
                                                {person.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-foreground">{person.name}</CardTitle>
                                    <p className="font-medium text-primary">{person.position}</p>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-sm text-muted-foreground">{person.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-blue-400">IKATE</h3>
                            <p className="text-gray-300">
                                Ikatan Alumni Teknik Elektro yang menghubungkan dan memberdayakan alumni untuk kemajuan teknologi Indonesia.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Navigasi</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <a href="/" className="hover:text-white">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a href="/alumni" className="hover:text-white">
                                        Alumni
                                    </a>
                                </li>
                                <li>
                                    <a href="/karir" className="hover:text-white">
                                        Karir
                                    </a>
                                </li>
                                <li>
                                    <a href="/berita" className="hover:text-white">
                                        Berita
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Program</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Mentoring
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Workshop
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Networking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Beasiswa
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Kontak</h4>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    <span>Jakarta, Indonesia</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>info@ikate.org</span>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon className="mr-2 h-4 w-4" />
                                    <span>+62 21 1234 5678</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 IKATE. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
