import { Card, CardContent } from '@/components/ui/card';
import { Clock, Construction } from 'lucide-react';

interface ComingSoonCardProps {
    title?: string;
    description?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function ComingSoonCard({
    title = 'Sedang Dikembangkan',
    description = 'Fitur ini segera hadir',
    className = '',
    size = 'md',
}: ComingSoonCardProps) {
    const sizeClasses = {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
    };

    const iconSizes = {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
    };

    const titleSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return (
        <Card className={`relative overflow-hidden ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <CardContent className={`relative ${sizeClasses[size]}`}>
                <div className="flex items-center justify-center space-x-3">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full bg-orange-50 p-2 dark:bg-orange-900/20">
                            <Construction className={`text-orange-600 dark:text-orange-400 ${iconSizes[size]}`} />
                        </div>
                    </div>

                    <div className="space-y-1 text-center">
                        <div className={`font-medium text-foreground ${titleSizes[size]}`}>{title}</div>
                        <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
