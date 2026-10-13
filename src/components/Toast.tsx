import { useState, useEffect, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';

type ToastState = {
  visible: boolean;
  message: string;
};

let showToastExternal: ((msg: string) => void) | null = null;

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ visible: false, message: '' });

  const showToast = useCallback((msg: string) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast({ visible: false, message: '' }), 2500);
  }, []);

  useEffect(() => {
    showToastExternal = showToast;
    return () => { showToastExternal = null; };
  }, [showToast]);

  return toast;
}

export function showToast(message: string) {
  if (showToastExternal) showToastExternal(message);
}

export function Toast({ toast }: { toast: ToastState }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${
        toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="glass-card px-5 py-3 flex items-center gap-2.5 shadow-xl">
        <CheckCircle2 className="w-5 h-5 text-lightblue-500" />
        <span className="font-body text-sm font-medium text-nusantara-deep">{toast.message}</span>
      </div>
    </div>
  );
}
