import React, { useEffect, useState } from "react";
import { ArticleCard, articleModel } from "@entities/Article";
import { AxiosResponse } from "axios";
import { ArticleType } from "@api/types";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { modalActions } from "@features/Modal/redux/ModalSlices";
import { ModalKey } from "@features/Modal/components/ModalController";
import { ProgramContext } from "@shared/api/dataContext";
import WhiteBird from "../../../../public/images/vectors/vector4.svg";
import WhiteBigBird from "../../../../public/images/vectors/vector3.svg";

const Articles = () => {
  const { data, isLoading, isError } = useData<ArticleType[]>(() =>
    articleModel.actions.getArticles()
  );

  const setCustomStyle = idx => {
    switch (idx) {
      case 0:
        return {
          backgroundImage:
            "linear-gradient(39deg, var(--ghost) 55%, transparent 25px), linear-gradient(39deg, var(--ghost) 55%, transparent 25px), url('" +
            process.env["PUBLIC"] +
            "/images/vectors/vector2.svg')",
        };
      case 1:
        return {
          backgroundImage:
            "linear-gradient(-240deg, var(--ghost) 55%, transparent 25px), url('/images/vectors/vector1.svg')",
        };
      case 2:
        return {
          backgroundImage:
            'linear-gradient(-240deg, var(--ghost) 55%, transparent 25px), url("' +
            process.env["PUBLIC"] +
            '/images/vectors/vector1.svg")',
        };
      case 3:
        return {
          backgroundImage:
            'linear-gradient(317deg, var(--ghost) 91%, transparent 25px), url("' +
            process.env["PUBLIC"] +
            '/images/vectors/vector1.svg")',
        };
      case 4:
        return {
          backgroundImage:
            "linear-gradient(308deg, var(--ghost) 94%, transparent 25px)",
        };
      case 5:
        return {
          backgroundImage:
            " linear-gradient(308deg, var(--ghost) 94%, transparent 25px)",
        };
      case 6:
        return {
          backgroundImage:
            "linear-gradient(144deg, var(--ghost) 50%, transparent 25px)",
        };

      default:
        break;
    }

    return {
      backgroundImage:
        'url("' + process.env["PUBLIC"] + '/images/vectors/vector1.svg")',
    };
  };

  const setModal = (articleKey: string) => {
    switch (articleKey) {
      case "curators":
        return { ModalKey: ModalKey.CuratorsWidget, withBackground: false };
      case "experts":
        return { ModalKey: ModalKey.ExpertsWidget, withBackground: false };
      case "roadmap":
        return { ModalKey: ModalKey.RoadmapWidget, withBackground: true };
      case "about_programm":
        return {
          ModalKey: ModalKey.NewsWidget,
          withBackground: true,
          payload: {
            onClick: () =>
              ProgramContext.getAboutProgram({ programCode: "about_program" }),
          },
        };
      default:
        return { ModalKey: ModalKey.Default, withBackground: true };
    }
  };

  const dispatch = useDispatch();

  const onClickHandler = (groupId: string, articleKey: string) => {
    if (articleKey === "contacts") {
      window.location.href = "/komus_talents_profi";
    } else if (articleKey === "calendar") {
      window.location.href = "/komus_talents_profi";
    } else if (articleKey === "instruction") {
      window.location.href = "/komus_talents_profi";
    } else {
      dispatch(
        modalActions.showModal({
          key: setModal(articleKey).ModalKey,
          withBackground: setModal(articleKey).withBackground,
          payload: {
            ...setModal(articleKey).payload,
            groupId: groupId,
            key: articleKey,
          },
        })
      );
    }
  };

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
      <div className={cn(styles.root)}>
        {data &&
          data.map((item, i) => {
            return (
              <div
                className={cn(styles[`card-${i}`])}
                style={setCustomStyle(i)}
              >
                {/* <div className={cn(styles[`card-${i}`])}> */}
                <ArticleCard
                  key={item.articleId}
                  hasImage
                  onClick={() => onClickHandler("1", item.articleKey)}
                >
                  {i === 4 && <WhiteBird className={styles.birdForCard4} />}
                  {i === 6 && <WhiteBigBird className={styles.birdForCard6} />}
                  <div className={cn(styles[`card-${i}_position`])}>
                    <h1>{item.title}</h1>
                    <section>{item.shortText}</section>
                  </div>
                </ArticleCard>
              </div>
            );
          })}
      </div>
    </WithSkeleton>
  );
};

export { Articles };
