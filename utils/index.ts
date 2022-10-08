import myProjectsData from "./my-projects-data";
export default class Util {
  private static readonly PROJECT_PATH_PREFIX = "/../public/assets/my-projects";
  public static getProjectSource(src: string): string {
    if (src.toLowerCase().startsWith("http")) return src;
    return `${this.PROJECT_PATH_PREFIX}${src}`;
  }
}
export { myProjectsData };
