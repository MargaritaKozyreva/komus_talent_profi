import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { PersonCard } from "@shared/ui/PersonCard";
import { UserType } from "@shared/api/types";
import { useData } from "@shared/helpers/hooks/useData";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import { curatorModel } from "@entities/Curators";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { modalActions } from "@features/Modal/redux/ModalSlices";
import { ModalKey } from "@features/Modal/components/ModalController";

interface CuratorsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const CuratorsWidget: React.FC<CuratorsProps> = props => {
  const { className } = props;

  const { data, isLoading, isError } = useData<UserType[]>(() =>
    curatorModel.requests.getCuratorListByCode("talant_kurators_junior")
  );

  return (
    <div className={cn(styles.root, className)}>
      <h3>Все амбасадоры учебных групп</h3>
      <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
        <div className={cn(styles.root__wrapper, className)}>
          {data &&
            data.map((user, i) => (
              <div className={styles.root__curator_card}>
                <PersonCard
                  key={user.id}
                  userFullname={user.fullname}
                  userPicLink={user.photo}
                  userPosition={user.positionName}
                  userGroup={user.group}
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

export default CuratorsWidget;
