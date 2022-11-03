import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import { useAuth } from "./firebase.js";
import SignIn from "./Pages/SignIn.js";
import ProtectedRoutes from "./Auth/ProtectedRoutes.js";
import Notifications from "./Pages/Notifications.js";
import Users from "./Pages/Users.js";
import User from "./Pages/User.js";
import Houses from "./Pages/Houses.js";
import House from "./Pages/House.js";
import Routines from "./Pages/Routines.js";
import Groups from "./Pages/Groups.js";
import History from "./Pages/History";
import Templates from "./Pages/Templates";
import Group from "./Pages/Group.js";
import Events from "./Pages/Events.js";
import Event from "./Pages/Event.js";
import HistoryDetails from "./Pages/HistoryDetails.js";
import CreateUser from "./Pages/Forms/CreateUser.js";
import CreateHouse from "./Pages/Forms/CreateHouse.js";
import CreateGroup from "./Pages/Forms/CreateGroup.js";
import CreateNotification from "./Pages/Forms/CreateNotification.js";
import CreateTemplate from "./Pages/Forms/CreateTemplate.js";
import EditUser from "./Pages/Forms/EditUser.js";
import EditGroup from "./Pages/Forms/EditGroup.js";
import EditNotification from "./Pages/Forms/EditNotification.js";
import EditTemplate from "./Pages/Forms/EditTemplate.js";
import EditHouse from "./Pages/Forms/EditHouse.js";
import Error404 from "./Pages/404.js";
import "./Styles/App.css";
import NotificationDetails from './Pages/NotificationDetails.js'
import Stats from "./Pages/Stats.js";
import HouseStats from "./Pages/HouseStats.js";

function App() {
  const currentUser = useAuth();

  if (currentUser === null) {
    return <></>;
  } else {
    return (
      <div style={{ backgroundColor: "#eaeaea", minHeight: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/notifications' element={<Notifications />} />
              <Route exact path='/notifications/:id' element={<NotificationDetails />} />
              <Route exact path='/users' element={<Users />} />
              <Route exact path='/users/:id' element={<User />} />
              <Route exact path='/users/create' element={<CreateUser />} />
              <Route exact path='/users/edit/:id' element={<EditUser />} />
              <Route exact path='/routines' element={<Routines />} />
              <Route exact path='/history' element={<History />} />
              <Route exact path='/history/:id' element={<HistoryDetails />} />
              <Route exact path='/houses' element={<Houses />} />
              <Route exact path='/houses/:id' element={<House />} />
              <Route exact path='/houses/create' element={<CreateHouse />} />
              <Route exact path='/houses/edit/:id' element={<EditHouse />} />
              <Route exact path='/events' element={<Events />} />
              <Route exact path='/events/:id' element={<Event />} />
              <Route exact path='/events/create' element={<CreateNotification />} />
              <Route exact path='/events/edit/:id' element={<EditNotification />} />
              <Route exact path='/registar' element={<SignIn />} />
              <Route exact path='/estatisticas' element={<Stats />} />
              <Route exact path='/estatisticasCasas' element={<HouseStats />} />
              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
