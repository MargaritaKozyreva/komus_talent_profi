import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";

import "./styles.scss";
import { httpService } from "@shared/service/service";


interface GroupCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly className?: string;
  readonly children?: ReactNode;
}
const NewsSection = () => {
  const [state, setState] = useState<Array<IHeaderBottom>>([]);

  const shortLinkObjects = [
    {
      id: 1,
      title: "Конкурс «Лучший кейс» - итоги голосования!",
      link: "/_wt/7046693968949027909",
    },
    {
      id: 2,
      title: "Марафон Открытых вебинаров, Часть 2",
      link: "/_wt/7034862682835399928",
    },
    {
      id: 3,
      title: "Представляем Марафон Открытых вебинаров!",
      link: "/_wt/7034862682835399928",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await httpService<Array<IHeaderBottom>>(
        "POST",
        "get_short_links",
        undefined
      );
      setState(result.data);
    };
    fetchData();
  }, []);

  interface IHeaderBottom {
    id: number;
    title: string;
    link: string;
  }

  return (
    <div className="heder-bootom">
      <div className="container">
        <div className="header-line-wrapper">
          {shortLinkObjects.map(link => (
            <a
              href={link.link}
              key={link.id}
              className="h-line-item"
              target="_blank"
            >
              <img
                src={`${process.env["PUBLIC"]}/images/block.svg`}
                alt="block"
              />
              <p>{link.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { NewsSection };
