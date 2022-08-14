import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import TableContent from "./components/TableContent/ui";
import { UserType } from '@src/shared/api/types';

interface ITableBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  className?: string;
  data?: any;
  raitingId: number
  user: UserType
}

const Table: React.FC<ITableBody> = props => {
  const { className, data, raitingId, user } = props;

  return <TableContent data={data} raitingId={raitingId} user={user}/>;
};

export default Table;
