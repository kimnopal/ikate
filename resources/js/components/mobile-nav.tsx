import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UserPlus } from 'lucide-react';
import React, { useState } from 'react';

interface MobileNavProps {
    navigationItems: Array<{
        name: string;
        href: string;
        icon: React.ComponentType<{ className?: string }>;
    }>;
}

const MobileNav: React.FC<MobileNavProps> = ({ navigationItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                        <SheetTitle className="text-left">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-blue-600">IKATE</h1>
                                <p className="ml-2 text-xs text-gray-500">Ikatan Alumni Teknik Elektro</p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 space-y-4">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <UserPlus className="mr-2 h-4 w-4" />
                                Daftar Alumni
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
