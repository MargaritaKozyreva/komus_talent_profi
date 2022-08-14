import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { PersonCard } from "@shared/ui/PersonCard";
import { UserType } from "@shared/api/types";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import { curatorModel } from "@entities/Curators";
import cn from "classnames";

interface ExpertsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const ExpertsWidget: React.FC<ExpertsProps> = props => {
  const { className } = props;

  const { data, isLoading, isError } = useData<UserType[]>(() =>
    curatorModel.requests.getCuratorListByCode("talant_experts_junior")
  );

  return (
    <div className={cn(styles.root, className)}>
      <h3>Все эксперты</h3>
      <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
        <div className={cn(styles.root__wrapper, className)}>
          {data &&
            data.map((user, i) => (
              <div className={styles.root__expert_card}>
                <PersonCard
                  key={user.id}
                  userFullname={user.fullname}
                  userPicLink={user.photo}
                  userPosition={user.positionName}
                  showAvatar
                  onClick={() => {}}
                />
              </div>
            ))}
        </div>
      </WithSkeleton>
    </div>
  );
};

export default ExpertsWidget;
