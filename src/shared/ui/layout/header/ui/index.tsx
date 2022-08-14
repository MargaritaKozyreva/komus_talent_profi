import React, { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { UserType } from "@shared/api/types";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "@entities/User";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import { useWindowSize } from "@shared/helpers/hooks/useWindowSize";
import MainLogo from "../../../../../../public/images/KomusCifraLogo.svg";
import WhiteBird from "../../../../../../public/images/whiteBird.svg";
import GrayLines from "../../../../../../public/images/grayLines.svg";
interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { className, style } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userModel.actions.getUserById(null));
  }, [dispatch]);

  const userState = useSelector(
    (state: { user: userModel.slices.UserState }) => state.user
  );

  const size = useWindowSize();
  console.log(size);
  return (
    <div
      className={cn(styles.root, className)}
      style={{
        maxWidth: "1440px",
        minWidth: "1100px",
        backgroundImage:
          "linear-gradient(-129deg, var(--red) 40%, transparent 45px)",
      }}
    >
      <div className={styles.mainMenu__wrapper}>
        <MainLogo className={styles.mainMenu__logo}>
          <Link to="/komus_talents_profi">
            <img
              src={`${process.env["PUBLIC"]}/images/KomusCifraLogo.svg`}
              alt="logo"
              title="logo"
            />
          </Link>
        </MainLogo>
        <div className={styles.mainText}>
          <span className={styles.small}>Таланты _ Лига профессионалов</span>
          <span className={styles.big}>Взлетай высоко!</span>
        </div>
        <div className={styles.mainMenu__userbar}>
          <div className={styles.mainMenu__userContainer}>
            <WithSkeleton
              isLoading={userState.isLoading}
              isEmpty={userState.entity === null}
            >
              {userState.entity && (
                <a href="" className={styles.mainMenu__userLink}>
                  <div className={styles.mainMenu__userQuest}>
                    Личный кабинет
                  </div>
                  <img
                    className={styles.user_photo}
                    src={`${process.env["PORTAL"]}${userState.entity.photo}`}
                    alt=""
                  />
                  <div className={styles.mainMenu__userName}>
                    {userState.entity.fullname}
                  </div>
                </a>
              )}{" "}
            </WithSkeleton>
            <WhiteBird className={styles.whiteBird} />
            <GrayLines className={styles.grayLines}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
