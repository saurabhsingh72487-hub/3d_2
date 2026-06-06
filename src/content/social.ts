export const social = [
  { url: "mailto:saaurabhsingh13@gmail.com", name: "mail" },
  { url: "https://github.com/saurabhsingh72487-hub", name: "github" },
  { url: "https://www.linkedin.com/in/saurabh-singh7", name: "linkedin" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x";
}[];
