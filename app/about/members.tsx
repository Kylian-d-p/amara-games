"use client";

import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import Image from "next/image";
import { useState } from "react";

export default function Members() {
  const swappedMembers = [
    { src: "/images/team/faceswapped/FaceSwap_daniel.png", name: "Daniel" },
    { src: "/images/team/faceswapped/FaceSwap_gael.png", name: "Gaël" },
    { src: "/images/team/faceswapped/FaceSwap_kylian.png", name: "Kylian" },
    { src: "/images/team/faceswapped/FaceSwap_mael.png", name: "Maël" },
  ];

  const originalMembers = [
    { src: "/images/team/original/daniel.jpg", name: "Daniel" },
    { src: "/images/team/original/gael.jpg", name: "Gaël" },
    { src: "/images/team/original/kylian.jpg", name: "Kylian" },
    { src: "/images/team/original/mael.jpg", name: "Maël" },
  ];

  const [members, setMembers] = useState(swappedMembers);

  return (
    <>
      {members.map((member, index) => (
        <RevealOnScroll key={index} className="flex flex-col gap-5 items-center">
          <Image
            src={member.src}
            width={200}
            height={200}
            alt="Team member"
            className="rounded-full w-60 h-60 object-cover"
            onClick={() => {
              setMembers((c) => {
                c[index] = originalMembers[index];
                return [...c];
              });

              setTimeout(() => {
                setMembers(c => {
                  c[index] = swappedMembers[index];
                  return [...c];
                });
              }, 1000);
            }}
          />
          <p className="text-xl font-bold">{member.name}</p>
        </RevealOnScroll>
      ))}
    </>
  );
}
