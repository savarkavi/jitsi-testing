"use client";

import { JaaSMeeting, JitsiMeeting } from "@jitsi/react-sdk";

export default function Home() {
  return (
    <div className="h-screen flex items-center">
      <div className="h-full w-full">
        <JitsiMeeting
          domain="meet.intelliclick.in"
          roomName="PleaseUseAGoodRoomName"
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          userInfo={{
            displayName: "sushant",
            email: "YOUR_EMAIL",
          }}
          onApiReady={(externalApi) => {}}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "800px";
          }}
        />
      </div>
    </div>
  );
}
