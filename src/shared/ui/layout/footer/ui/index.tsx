import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { WithSkeleton } from "@ui/WithSkeleton";
import { FooterLinkType } from "@shared/api/types";

import "./styles.scss";
import { footerModel } from "..";
import { useData } from "@shared/helpers/hooks/useData";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Footer: React.FC<FooterProps> = props => {
  const { className, style } = props;

  const { data, isLoading } = useData<FooterLinkType[]>(() =>
    footerModel.requests.getFooterLinks()
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-first">
          <div className="footer-wrapper">
            <div className="footer-title">Все сайты Комус</div>
            <div className="footer-line">
              <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
                {data && data.map((link, i) => (
                  <div className="footer-item" key={i}>
                    <div className="footer-item-title">{link.title}</div>
                    <div className="footer-item-site">
                      <a href={link.url} target="_blank">
                        {link.link}
                      </a>
                    </div>
                  </div>
                ))}
              </WithSkeleton>
            </div>
          </div>
        </div>
        <div className="footer-second">
          <div className="s-footer-wrapper">
            <div className="s-footer-left">
              <img src="projects_oodp/turbo_so/img/ic/logo_f.svg" alt="logo" />
              <p>© «Комус», 2020</p>
            </div>
            <div className="s-footer-right">
              <p>Мы в соцсетях</p>
              <img src="newportal/footer/img/telegram.png" alt="TELEGRAM" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
