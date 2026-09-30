import type { SVGProps } from "react";

const paths = {
  hanger: "M12 7.5a2 2 0 1 1 2-2M12 7.5v1.2L3.6 14.6a1.4 1.4 0 0 0 .8 2.5h15.2a1.4 1.4 0 0 0 .8-2.5L12 8.7",
  bolt: "M13 2.8 5.5 13.2h5.6L10.4 21.2l8.1-10.8h-5.8L13 2.8Z",
  suitcase: "M8.5 7V5.4c0-.8.6-1.4 1.4-1.4h4.2c.8 0 1.4.6 1.4 1.4V7M5 7h14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 5 7Zm3.5 0v12m7-12v12",
  feather: "M19.5 4.5c-5.8 0-11 4.1-11.8 10.6L6 19.5m13.5-15C19.5 11 15 15 8.3 15.4M19.5 4.5l-7.8 7.8",
  sparkle: "M12 3.5c.5 3.9 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5ZM18.5 15.5c.2 1.6 1 2.3 2.5 2.5-1.5.2-2.3.9-2.5 2.5-.2-1.6-1-2.3-2.5-2.5 1.5-.2 2.3-.9 2.5-2.5Z",
  check: "m5 12.5 4.2 4.2L19 7",
  bag: "M6 8h12l-.9 11.1A1.5 1.5 0 0 1 15.6 20.5H8.4a1.5 1.5 0 0 1-1.5-1.4L6 8Zm3 0V7a3 3 0 0 1 6 0v1",
  play: "M8 5.6v12.8a.8.8 0 0 0 1.2.7l10.3-6.4a.8.8 0 0 0 0-1.4L9.2 4.9a.8.8 0 0 0-1.2.7Z",
  pause: "M8 5v14m8-14v14",
  mute: "M4.5 9.5h3l4.5-4v13l-4.5-4h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm12 .5 4 4m0-4-4 4",
  sound: "M4.5 9.5h3l4.5-4v13l-4.5-4h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm11.5-1a5 5 0 0 1 0 7m2.5-9.5a8.5 8.5 0 0 1 0 12",
  shield: "M12 3.5 5 6.2v5.3c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6.2L12 3.5Zm-3 8.8 2.2 2.2L15.5 10",
  lock: "M7 10.5V8a5 5 0 0 1 10 0v2.5M6 10.5h12a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Zm6 4v2",
  mail: "M4.5 6h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 .5 7.5 6 7.5-6",
  search: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.7-1.8 4.3 4.3",
  scale: "M12 4v16m-7 0h14M6.5 8h11M6.5 8 4 14a2.5 2.5 0 0 0 5 0L6.5 8Zm11 0L15 14a2.5 2.5 0 0 0 5 0l-2.5-6",
  store: "M4.5 9.5 6 4.5h12l1.5 5M4.5 9.5h15M4.5 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0M6 12v7.5h12V12m-8 7.5v-4h4v4",
  info: "M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-9v5m0-8.2v.2",
  copy: "M9 9h9.5a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V9.5A.5.5 0 0 1 9 9Zm-3.5 6H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h9.5a.5.5 0 0 1 .5.5v.5",
  menu: "M4 7h16M4 12h16M4 17h10",
  close: "M6 6l12 12M18 6 6 18",
  chevron: "m6 9 6 6 6-6",
  arrow: "M5 12h14m-5-5 5 5-5 5",
} as const;

export type IconName = keyof typeof paths;

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export default function Icon({ name, size = 20, strokeWidth = 1.8, ...rest }: Props) {
  const filled = name === "play" || name === "bolt";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
