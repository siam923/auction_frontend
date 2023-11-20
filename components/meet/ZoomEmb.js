"use client";
import axios from "axios";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

function ZoomEmb({ mn, pwd, sdkKey, userName }) {
  const client = ZoomMtgEmbedded.createClient();

  const getSignature = async () => {
    fetch("/api/zoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingNumber: mn,
        role: 0,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        startMeeting(data.signature);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  let meetingNumber = mn;
  let passWord = pwd;
  let userEmail = "";
  let registrantToken = "";
  let zakToken = "";
  let leaveUrl = "localhost:3000";

  const startMeeting = (signature) => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");
    let meetingConfig = {
      signature: signature,
      sdkKey: sdkKey,
      meetingNumber: meetingNumber,
      password: passWord,
      userName: userName,
      userEmail: userEmail,
      tk: registrantToken,
      zak: zakToken,
    };
    console.log(meetingConfig);
    client
      .init({ zoomAppRoot: meetingSDKElement, language: "en-US" })
      .then(() => {
        client
          .join(meetingConfig)
          .then(() => {
            console.log("Meeting joined");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button
        onClick={getSignature}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Join Now
      </button>
      <div id="meetingSDKElement"></div>
    </div>
  );
}

export default ZoomEmb;
