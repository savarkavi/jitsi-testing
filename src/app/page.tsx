"use client";

import React, { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/navigation";

export default function Home() {
  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [api, setApi] = useState<any>(null);
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);

  const router = useRouter();

  const handleStartMeeting = () => {
    if (displayName && roomName) {
      setIsMeetingStarted(true);
    } else {
      alert("Please enter your name and a room name");
    }
  };

  const handleApiReady = (externalApi: any) => {
    setApi(externalApi);

    if (api) {
      api.executeCommand("grantModerator");
      api.executeCommand("toggleLobby", true);
    }
  };

  const handleReadyToClose = () => {
    router.push("https://jitsi-testing.vercel.app/");
  };

  if (!isMeetingStarted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Create a Meeting</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-black"
          />
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-black"
          />
          <button
            onClick={handleStartMeeting}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Meeting
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="h-full">
        <JitsiMeeting
          domain="meet.intelliclick.in"
          roomName={roomName}
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: false,
            startScreenSharing: true,
            enableEmailInStats: false,
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
            TOOLBAR_BUTTONS: [
              "microphone",
              "camera",
              "closedcaptions",
              "desktop",
              "fullscreen",
              "fodeviceselection",
              "hangup",
              "profile",
              "chat",
              "recording",
              "livestreaming",
              "etherpad",
              "sharedvideo",
              "settings",
              "raisehand",
              "videoquality",
              "filmstrip",
              "invite",
              "feedback",
              "stats",
              "shortcuts",
              "tileview",
              "videobackgroundblur",
              "download",
              "help",
              "mute-everyone",
              "security",
              "toggle-camera",
            ],
            BRAND_WATERMARK_LINK:
              "https://utfs.io/f/5340fb6e-b0c4-47da-9302-4f492b6f4762-ksoc02.jpg",
            SHOW_JITSI_WATERMARK: false,
            DEFAULT_BACKGROUND: "#798",
            DEFAULT_WELCOME_PAGE_LOGO_URL:
              "https://utfs.io/f/5340fb6e-b0c4-47da-9302-4f492b6f4762-ksoc02.jpg",
          }}
          userInfo={{
            displayName: displayName,
            email: "",
          }}
          onApiReady={handleApiReady}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100%";
          }}
          onReadyToClose={handleReadyToClose}
        />
      </div>
    </div>
  );
}
