export type PageType = {
  caption: string;
  action: string;
  admin? :boolean
};
export interface IMobileMenu {
  id: string;
  mobileSubPages: PageType[];
  onClickHandler: (page: PageType) => void;
}
