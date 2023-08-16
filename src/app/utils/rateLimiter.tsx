export const canMakeApiCall = (key: string, timeLimit: number): boolean => {
    const lastCall = localStorage.getItem(key);
  
    if (lastCall) {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - parseInt(lastCall, 10);
  
      if (timeDiff < timeLimit) {
        return false; // Too soon to make another call
      }
    }
    return true;
  };
  
  export const recordApiCall = (key: string): void => {
    const currentTime = new Date().getTime();
    localStorage.setItem(key, currentTime.toString());
  };
  