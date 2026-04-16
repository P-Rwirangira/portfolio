// lib/jquery-loader.js
let jQueryInitialized = false;
let initializationPromise = null;

export const initializeJQuery = async () => {
  if (jQueryInitialized) return true;
  if (initializationPromise) return initializationPromise;

  initializationPromise = (async () => {
    try {
      if (typeof window === 'undefined') return false;

      // Load jQuery first
      const { default: $ } = await import('jquery');

      // Make jQuery globally available
      window.jQuery = window.$ = $;

      // Load mousewheel plugin
      await import('jquery-mousewheel');

      // Load and initialize custom scrollbar
      const mCustomScrollbar = await import('malihu-custom-scrollbar-plugin');

      // Initialize the plugin properly for Turbopack
      if (typeof mCustomScrollbar.default === 'function') {
        mCustomScrollbar.default($);
      } else {
        // Alternative initialization method
        require('malihu-custom-scrollbar-plugin')($);
      }

      jQueryInitialized = true;
      console.log('jQuery and plugins loaded successfully');
      return true;
    } catch (error) {
      console.error('jQuery initialization failed:', error);
      return false;
    }
  })();

  return initializationPromise;
};

export const isJQueryReady = () => jQueryInitialized;
