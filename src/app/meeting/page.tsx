"use client";

import { JaaSMeeting } from "@jitsi/react-sdk";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-full">
        <JaaSMeeting
          appId="test"
          roomName="PleaseUseAGoodRoomName"
          configOverwrite={{
            disableThirdPartyRequests: true,
            disableLocalVideoFlip: true,
            backgroundAlpha: 0.5,
          }}
          interfaceConfigOverwrite={{
            VIDEO_LAYOUT_FIT: "nocrop",
            MOBILE_APP_PROMO: false,
            TILE_VIEW_MAX_COLUMNS: 4,
          }}
          onApiReady={(externalApi) => {}}
        />
      </div>
    </div>
  );
};

export default page;
