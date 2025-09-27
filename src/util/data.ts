import {
  BsCardImage,
  IoVideocam,
  FaPaintBrush,
  FaWandMagicSparkles as FaWandMagic,
  SiOpenjdk,
  GiMicrophone,
  BsPersonArmsUp,
  GiMagicSwirl,
} from "../components/Icons";

export interface CarouselItem { id: number; image: string; };
export interface SliderItem { id: number; image: string; };

export const courouselData: CarouselItem[] = [ 
  { id: 1, image: "/wan/Wan.jpg" }, { id: 2, image: "/wan/wan1.jpg" }, 
  { id: 3, image: "/wan/wan2.jpg" }, { id: 4, image: "/wan/wan3.jpg" }, 
  { id: 5, image: "/wan/wan4.jpg" }, { id: 6, image: "/wan/wan5.jpg" }, 
  { id: 7, image: "/wan/wan6.jpg" }, { id: 8, image: "/wan/wan7.jpg" }, 
  { id: 9, image: "/wan/wan8.jpg" }, 
]; 
  export const sliderData: SliderItem[] = [ 
    { id: 1, image: "/krea/krea5.jpg" }, { id: 2, image: "/krea/krea_2.png" }, 
    { id: 3, image: "/krea/krea.jpg" }, { id: 4, image: "/krea/krea2.jpg" }, 
    { id: 5, image: "/krea/krea3.jpg" }, { id: 6, image: "/krea/krea4.jpg" }, 
    { id: 7, image: "/krea/krea6.jpg" }, 
  ];

export interface GenerateItem {
  id: number;
  icon: React.ElementType; // icon component type
  label: string;
  desc?: string;
  newBtn?: boolean;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
}

export const generateItems: GenerateItem[] = [
  {
    id: 1,
    icon: BsCardImage,
    label: "Image",
    desc: "Generate images with custom styles in Flux and Ideogram.",
    newBtn: true,
    bgColor: "bg-gradient-to-b from-gray-600 to-gray-900",
    textColor: "text-white",
  },
  {
    id: 2,
    icon: IoVideocam,
    label: "Video",
    desc: "Generate videos with Haiku, Pika, Runway, Luma, and more.",
    bgColor: "bg-yellow-500",
    textColor: "text-white",
  },
  {
    id: 3,
    icon: FaPaintBrush,
    label: "Realtime",
    desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
    bgColor: "bg-gradient-to-b from-sky-400 to-blue-600",
    textColor: "text-white",
  },
  {
    id: 4,
    icon: FaWandMagic,
    label: "Enhancer",
    desc: "Upscale and enhance images and videos up to 22K.",
    newBtn: true,
    bgColor: "bg-gradient-to-b from-gray-800 to-black",
    textColor: "text-white",
  },
  {
    id: 5,
    icon: SiOpenjdk,
    label: "Edit",
    desc: "Add objects, change style, or expand photos and generations.",
    bgColor: "bg-gradient-to-b from-purple-700 to-purple-900",
    textColor: "text-white",
  },
  {
    id: 6,
    icon: GiMicrophone,
    label: "Video Lipsync",
    desc: "Lip sync any video to any audio.",
    newBtn: true,
    bgColor: "bg-gradient-to-b from-rose-400 to-rose-600",
    textColor: "text-white",
  },
  {
    id: 7,
    icon: BsPersonArmsUp,
    label: "Motion Transfer",
    desc: "Transfer motion to images and animate characters.",
    newBtn: true,
    bgColor: "bg-gradient-to-b from-green-500 to-green-700",
    textColor: "text-white",
  },
  {
    id: 8,
    icon: GiMagicSwirl,
    label: "Train",
    desc: "Teach Krea to replicate your style, products, or characters.",
    bgColor: "bg-gradient-to-b from-purple-500 to-pink-500",
    textColor: "text-white",
  },
];
