"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-slate-100 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
          // NEW: your custom texts
          title="Hallo! Ich bin FOCUSED, dein Tutor für die Forschungsfragenentwicklung."
          subtitle="Hast du ein Thema zu wir eine Forschungsfrage entwickeln sollen, oder bereits eine Forschungsfrage, die wir gemeinsam weiterentwickeln sollen?"
          initialAssistant="👋 Willkommen! Ich bin dein sokratischer Tutor FOCUSED. Womit möchtest du beginnen?"        
        />
      </div>
    </main>
  );
}
