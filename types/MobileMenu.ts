export type PageType = {
  caption: string;
  action: string;
};
export interface IMobileMenu {
  id: string;
  mobileSubPages: PageType[];
  onClickHandler: (page: PageType) => void;
}