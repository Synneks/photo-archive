"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  // TODO: Update env.js to recognize posthog key
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    // this is for preventing ad blocks from blocking the posthog script
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

function PostHogAuthWrapper({ children }: { children: React.ReactNode }) {
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.primaryEmailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!userInfo.isSignedIn) {
      posthog.reset();
    }
  }, [userInfo]);
  return children;
}
