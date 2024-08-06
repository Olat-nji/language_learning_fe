/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-null */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use client";

// import { splitStringUsingRegEx, url } from '@/lib/utils';
import { useEffect, useRef, useState } from "react";

import { TalkingHead } from "../components/threejs/models/TalkingHead-1.1.0/modules/talkinghead.mjs";

const useTalkingHead = (
  initialText?: string,
  avatarUrl?: string,
  options?: any,
) => {
  const [head, setHead] = useState<any>(null);
  const avatarReference = useRef<HTMLDivElement>(null);
  // const chatBubbleRef = useRef<HTMLDivElement>(null);
  const loadingReference = useRef<HTMLDivElement>(null);

  // const createChatBubble = (divElement: HTMLElement) => {
  //   divElement.style.display = "block";
  //   setTimeout(() => {
  //     divElement.style.display = "none";
  //   }, 5000);
  // }

  useEffect(() => {
    const initializeTalkingHead = async () => {
      try {
        const avatarDiv = avatarReference.current;
        // const chatBubbleDiv = chatBubbleRef.current;
        const loadingDiv = loadingReference.current;

        if (loadingDiv) {
          loadingDiv.style.display = "flex";
        }

        if (avatarDiv) {
          avatarDiv.style.display = "none";
        }

        if (avatarDiv && avatarDiv.querySelectorAll("canvas").length === 0) {
          const headInstance = new TalkingHead(avatarDiv, options);
          setHead(headInstance);

          const avatar = await headInstance.showAvatar({ url: avatarUrl });

          if (loadingDiv) {
            loadingDiv.style.display = "none";
          }

          if (avatarDiv) {
            avatarDiv.style.display = "block";
          }

          // if (chatBubbleDiv) {
          //   createChatBubble(chatBubbleDiv)
          // }
        }
      } catch (error) {
        console.log(error);
      }
    };

    initializeTalkingHead();
  }, [avatarUrl, options]);

  return { head, avatarRef: avatarReference, loadingRef: loadingReference };
};
export default useTalkingHead;
