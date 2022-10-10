import { Title } from "../types";
import MyPersonalInfo from "./my-personal-info";
import myProjectsData from "./my-projects-data";

export default class Util {
  private static readonly PROJECT_PATH_PREFIX = "/../public/assets/my-projects";
  public static getProjectSource(src: string): string {
    if (src.toLowerCase().startsWith("http")) return src;
    return `${this.PROJECT_PATH_PREFIX}${src}`;
  }
  public static getProjectFromId(id: string): Title | null {
    return (
      myProjectsData
        .map((v) => v.titles)
        .flat()
        .find((title) => {
          return id === title.name.toLowerCase().split(/_| |-/).join("-");
        }) || null
    );
  }

  public static getProjectLinkFromName(name: string): string {
    return `/project/${name.toLowerCase().split(/_| |-/).join("-")}`;
  }
}
export { myProjectsData, MyPersonalInfo };
