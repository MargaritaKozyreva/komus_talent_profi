import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "@pages/main/Main";
import { PreMain } from "@pages/pre-main";
import { RoadmapWidget } from "@widgets/roadmap";
import { UserGroupWidget } from "@widgets/UserGroup";
import { ExpertsWidget } from "@widgets/ExpertsWidget";
import { CuratorsWidget } from "@widgets/CuratorsWidget";

import Modal from "@features/Modal/containers/ModalContainer";
import { RatePage } from "@pages/rates";
import { PrivatePage } from "@pages/private";

import store from "@shared/api/store";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/view_doc.html?mode=komus_talents_profi" element={<Main />} />
          <Route path="/komus_talents_profi/pre" element={<PreMain />} />
          <Route
            path="/komus_talents_profi"
            element={
              <PrivatePage>
                <Main />
              </PrivatePage>
            }
          />
          <Route
            path="/komus_talents_profi/rates"
            element={
              <PrivatePage>
                <RatePage />
              </PrivatePage>
            }
          />
          <Route
            path="/komus_talents_profi/roadmap"
            element={
              <PrivatePage>
                <RoadmapWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/komus_talents_profi/group"
            element={
              <PrivatePage>
                <UserGroupWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/komus_talents_profi/experts"
            element={
              <PrivatePage>
                <ExpertsWidget />
              </PrivatePage>
            }
          />
          <Route
            path="/komus_talents_profi/curators"
            element={
              <PrivatePage>
                <CuratorsWidget />
              </PrivatePage>
            }
          />
          <Route
            path="*"
            element={<div className="not-found">Страницы не существует</div>}
          />
        </Routes>
      </BrowserRouter>
      <Modal />
    </Provider>
  );
};

export default App;
