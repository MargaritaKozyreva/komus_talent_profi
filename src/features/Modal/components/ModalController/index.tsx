import React from "react";
import { CuratorsWidget } from "@widgets/CuratorsWidget";
import { ExpertsWidget } from "@widgets/ExpertsWidget";
import { RoadmapWidget } from "@widgets/roadmap";
import { UserGroupWidget } from "@widgets/UserGroup";
import { NewsWidget } from "@widgets/News";

export enum ModalKey {
  Default = "DEFAULT",
  CuratorsWidget = "CURATORS_WIDGET",
  ExpertsWidget = "EXPERTS_WIDGET",
  RoadmapWidget = "ROADMAP_WIDGET",
  UserGroupWidget = "USER_GROUP_WIDGET",
  NewsWidget = "NEWS_WIDGET",
}

export type ModalKeyToPayload = {
  [ModalKey.Default]: null;
  [ModalKey.CuratorsWidget]: { readonly groupId: number | string | null };
  [ModalKey.ExpertsWidget]: { readonly groupId: number | string | null };
  [ModalKey.RoadmapWidget]: {
    readonly groupId: number | string | null;
    readonly key: string;
  };
  [ModalKey.UserGroupWidget]: { readonly groupId: number | string | null };
  [ModalKey.NewsWidget]: any;
};

export const MODAL_KEY_TO_COMPONENT_MAP: {
  [key in ModalKey]: React.FC<{ payload: ModalKeyToPayload[key] }>;
} = {
  [ModalKey.Default]: ({ payload }) => null,
  [ModalKey.CuratorsWidget]: payload => {
    return <CuratorsWidget {...payload} />;
  },
  [ModalKey.ExpertsWidget]: payload => {
    return <ExpertsWidget {...payload} />;
  },
  [ModalKey.RoadmapWidget]: payload => {
    return <RoadmapWidget {...payload} />;
  },
  [ModalKey.UserGroupWidget]: payload => {
    return <UserGroupWidget {...payload} />;
  },
  [ModalKey.NewsWidget]: payload => {
    return <NewsWidget {...payload} />;
  },
};

// export function openModal<K extends ModalKey>(
// 	key: K,
// 	payload: ModalKeyToPayload[K]
// ): ModalKeyToPayload[K];

// const Component = MODAL_KEY_TO_COMPONENT_MAP['PROCESS'];

// const payload = openModal(ModalKey.Process, {
// 	eventId: 1
// });
