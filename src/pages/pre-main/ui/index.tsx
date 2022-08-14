import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { withLayout } from "@ui/layout";
import { UserWidgets } from "@widgets/UserWidgets/ui";
import { ReviewSection } from "@shared/ui/layout/review";

import { useData } from "@shared/helpers/hooks/useData";
import { INews } from "@shared/api/interfaces";
import { ProgramContext } from "@shared/api/dataContext";
import { WithSkeleton } from "@shared/ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";

interface PreMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const PreMain: React.FC<PreMainProps> = props => {
  const { data, isLoading, isError } = useData<INews[]>(() =>
    ProgramContext.getAboutProgram({ programCode: "about_program" })
  );

  return (
    <div className={cn(styles.userWidgetWrapper, props.className)}>
      <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
        {data &&
          data.map((programItem, i) => {
            return (
              <div key={i} className={styles.preContent}>
                <h1>{programItem.header}</h1>
                {programItem.video_arr.length && (
                  <div className={styles.videoBox}>
                    {programItem.video_arr.map(programVideoItem => (
                      <video
                        src={`${process.env["PORTAL"]}/${programVideoItem.source}`}
                        poster={`${process.env["PORTAL"]}/${programVideoItem.poster}`}
                        style={{ margin: "0 auto", display: "block" }}
                        controls
                      />
                    ))}
                  </div>
                )}
                <main>
                  <div
                    dangerouslySetInnerHTML={{ __html: programItem.main_text }}
                  />
                </main>
              </div>
            );
          })}
      </WithSkeleton>
      <div className={cn(styles.reviewWrapper)}>
        {data && (
          <ReviewSection
            text={''}
            buttonText={data[0].request_text}
            linkTo={`${data[0].request_link}`}
          />
        )}
      </div>
    </div>
  );
};

export default withLayout(PreMain);
