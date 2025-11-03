// Analytics utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Check if we're in production and have GA ID
export const isAnalyticsEnabled = () => {
  return process.env.NODE_ENV === 'production' && GA_TRACKING_ID;
};

// Initialize Google Analytics
export const initGA = () => {
  if (!isAnalyticsEnabled()) return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title || document.title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event trackers
export const analytics = {
  // Navigation events
  trackNavigation: (section: string) => {
    trackEvent({
      action: 'navigate',
      category: 'Navigation',
      label: section,
    });
  },

  // Contact events
  trackContactClick: (method: 'email' | 'phone' | 'form') => {
    trackEvent({
      action: 'contact_click',
      category: 'Contact',
      label: method,
    });
  },

  trackFormSubmit: (formName: string) => {
    trackEvent({
      action: 'form_submit',
      category: 'Contact',
      label: formName,
    });
  },

  // Project events
  trackProjectView: (projectName: string) => {
    trackEvent({
      action: 'project_view',
      category: 'Projects',
      label: projectName,
    });
  },

  trackProjectLink: (projectName: string, linkType: 'demo' | 'github') => {
    trackEvent({
      action: 'project_link_click',
      category: 'Projects',
      label: `${projectName}_${linkType}`,
    });
  },

  // Skill events
  trackSkillHover: (skillName: string) => {
    trackEvent({
      action: 'skill_hover',
      category: 'Skills',
      label: skillName,
    });
  },

  // Theme events
  trackThemeToggle: (theme: 'light' | 'dark') => {
    trackEvent({
      action: 'theme_toggle',
      category: 'UI',
      label: theme,
    });
  },

  // Download events
  trackDownload: (fileName: string) => {
    trackEvent({
      action: 'download',
      category: 'Downloads',
      label: fileName,
    });
  },

  // Social media events
  trackSocialClick: (platform: string) => {
    trackEvent({
      action: 'social_click',
      category: 'Social',
      label: platform,
    });
  },

  // Performance events
  trackPerformance: (metric: string, value: number) => {
    trackEvent({
      action: 'performance_metric',
      category: 'Performance',
      label: metric,
      value: Math.round(value),
    });
  },
};

// Privacy-friendly analytics alternative
export class SimpleAnalytics {
  private events: Array<{ timestamp: number; event: string; data: any }> = [];
  private endpoint = '/api/analytics'; // You would need to implement this

  track(event: string, data: any = {}) {
    const eventData = {
      timestamp: Date.now(),
      event,
      data: {
        ...data,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href,
      },
    };

    this.events.push(eventData);

    // Send to your own analytics endpoint
    if (this.events.length >= 10) {
      this.flush();
    }
  }

  private async flush() {
    if (this.events.length === 0) return;

    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events: this.events }),
      });
      this.events = [];
    } catch (error) {
      console.warn('Failed to send analytics:', error);
    }
  }

  // Send remaining events before page unload
  beforeUnload() {
    if (this.events.length > 0) {
      navigator.sendBeacon(this.endpoint, JSON.stringify({ events: this.events }));
    }
  }
}

// Global type declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default analytics;