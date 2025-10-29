"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
  color?: string;
}

export const SkillCard = ({ name, Icon, color = "#4F46E5" }: SkillCardProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 p-4 h-28 sm:h-32 shadow-sm transition-transform hover:scale-105 hover:shadow-md hover:text-black">
      <Icon style={{ color }} size={32} aria-hidden="true" />
      <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
};
