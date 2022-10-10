export type Title = {
  name: string;
  img: string;
  link: string;
  description: string;
  tech: string;
  info: string;
};
export interface Project {
  category: string;
  titles: Title[];
}
