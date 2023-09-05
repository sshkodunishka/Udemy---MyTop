import { useContext } from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Menu.props";
import cn from "classnames";
import { format } from "date-fns";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem } from "../../interfaces/menu.inteefaces";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "../../interfaces/page.interfaces";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id == firstCategory && buildSecondLevel()}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = () => {
    return (
      <>
        {menu.map((m) => {
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel()}
            </div>
          </div>;
        })}
      </>
    );
  };
  const buildThirdLevel = () => {};

  return <div className={styles.menu}>{buildFirstLevel}</div>;
};
