/**
 * Device detection utilities for determining user's platform
 */

export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

export const isAndroid = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /Android/.test(navigator.userAgent);
};

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return isIOS() || isAndroid() || /Mobile|Tablet/.test(navigator.userAgent);
};

export const getAppStoreUrl = (): string => {
  if (isIOS()) {
    // Replace with actual iOS App Store URL when available
    return 'https://apps.apple.com/app/velyar/id1234567890';
  } else if (isAndroid()) {
    return 'https://play.google.com/store/apps/details?id=com.velyar.app';
  } else {
    // Default to Android for desktop users
    return 'https://play.google.com/store/apps/details?id=com.velyar.app';
  }
};

export const getDownloadButtonText = (): string => {
  if (isIOS()) {
    return 'Download for iOS';
  } else if (isAndroid()) {
    return 'Download for Android';
  } else {
    return 'Download the App';
  }
};
