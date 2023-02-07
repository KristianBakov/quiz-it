import { FaSlideshare } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

export interface NavItem {
  label: string;
  href: string;
}

declare global {
  interface Array<T> {
    shuffle(): Array<T>;
  }
}

Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
  return this.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Quiz",
    href: "quiz?limit=10&categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,music,science,society_and_culture,sport_and_leisure&difficulty=medium",
  },
  {
    label: "Custom Quiz",
    href: "category-selection",
  },
  {
    label: "About",
    href: "about",
  },
];

export const categories = [
  ["Arts & Literature", "arts_and_literature"],
  ["Film & TV", "film_and_tv"],
  ["Food & Drink", "food_and_drink"],
  ["General Knowledge", "general_knowledge"],
  ["Geography", "geography"],
  ["History", "history"],
  ["Music", "music"],
  ["Science", "science"],
  ["Society & Culture", "society_and_culture"],
  ["Sport & Leisure", "sport_and_leisure"],
] as const;

export const CARD_DATA = [
  {
    title: "Puzzle it",
    description:
      "Create quizzes on any topic you like using our drag-and-drop editor. Add multiple choice questions, true or false questions, or even open-ended questions.",
    icon: IoIosCreate,
  },
  {
    title: "Score it",
    description:
      "Once you've created a quiz, you can easily share it with others via a unique URL. You can also embed your quiz on your own website or blog for even more reach.",
    icon: FaSlideshare,
  },
  {
    title: "Share it",
    description:
      "Invite friends or colleagues to help you create quizzes or contribute questions. You can also create quiz groups to share quizzes and collaborate with others on quiz creation.",
    icon: RiTeamFill,
  },
];

export const END_QUIZ_TEXT = [
  "WOW! Look at that!",
  "You are awesome!",
  "Congrats!",
  "You nailed it!",
];
