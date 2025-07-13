import { router } from '@inertiajs/react';

/**
 * Redirects user to the coming soon page
 */
export function redirectToComingSoon() {
    router.get(route('coming-soon'));
}

/**
 * Shows a coming soon message and redirects after a delay
 * @param message - Custom message to show
 * @param delay - Delay in milliseconds before redirecting (default: 2000)
 */
export function showComingSoonMessage(message: string = 'Fitur ini sedang dikembangkan', delay: number = 2000) {
    // You can customize this to show a toast notification or modal
    alert(message);

    setTimeout(() => {
        redirectToComingSoon();
    }, delay);
}

/**
 * Checks if a feature is enabled or should show coming soon
 * @param featureName - Name of the feature to check
 * @returns boolean indicating if feature is enabled
 */
export function isFeatureEnabled(featureName: string): boolean {
    // This can be extended to check against a feature flags API
    // For now, return false for common features that might be under development
    const disabledFeatures = ['advanced-search', 'messaging', 'notifications', 'reports', 'analytics', 'integrations', 'export', 'bulk-actions'];

    return !disabledFeatures.includes(featureName);
}

/**
 * Higher-order function to wrap feature access
 * @param featureName - Name of the feature
 * @param callback - Function to execute if feature is enabled
 * @param fallback - Optional fallback function if feature is disabled
 */
export function withFeatureCheck(featureName: string, callback: () => void, fallback?: () => void) {
    if (isFeatureEnabled(featureName)) {
        callback();
    } else {
        if (fallback) {
            fallback();
        } else {
            redirectToComingSoon();
        }
    }
}
