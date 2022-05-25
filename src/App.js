import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Homepage from './Pages/Homepage.js';
import Notifications from './Pages/Notifications.js';
import Users from './Pages/Users.js';
import User from './Pages/User.js';
import Houses from './Pages/Houses.js';
import House from './Pages/House.js';
import Routines from './Pages/Routines.js';
import Groups from './Pages/Groups.js';
import History from './Pages/History';
import Templates from './Pages/Templates';
import Group from './Pages/Group.js';
import HistoryDetails from './Pages/HistoryDetails.js';
import CreateUser from './Pages/Forms/CreateUser.js';
import CreateHouse from './Pages/Forms/CreateHouse.js';
import CreateGroup from './Pages/Forms/CreateGroup.js';
import CreateNotification from './Pages/Forms/CreateNotification.js';
import CreateTemplate from './Pages/Forms/CreateTemplate.js';
import EditUser from './Pages/Forms/EditUser.js';
import EditGroup from './Pages/Forms/EditGroup.js';
import EditNotification from './Pages/Forms/EditNotification.js';
import EditTemplate from './Pages/Forms/EditTemplate.js';
import Error404 from './Pages/404.js';
import './Styles/App.css';

function App() {
  return (
    <div style={{backgroundColor: "#eaeaea", minHeight: "100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/notifications" element={<Notifications/>}/>
          <Route exact path="/notifications/create" element={<CreateNotification/>}/>
          <Route exact path="/notifications/edit" element={<EditNotification/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/users/:id" element={<User/>}/>
          <Route exact path="/users/create" element={<CreateUser/>}/>
          <Route exact path="/users/edit" element={<EditUser/>}/>
          <Route exact path="/routines" element={<Routines/>}/>
          {/*<Route exact path="/groups" element={<Groups/>}/>
          <Route exact path="/groups/group" element={<Group/>}/>
          <Route exact path="/groups/create" element={<CreateGroup/>}/>
          <Route exact path="/groups/edit" element={<EditGroup/>}/>
          <Route exact path="/templates" element={<Templates/>}/>
          <Route exact path="/templates/create" element={<CreateTemplate/>}/>
          <Route exact path="/templates/edit" element={<EditTemplate/>}/>*/}
          <Route exact path="/history" element={<History/>}/>
          <Route exact path="/history/details" element={<HistoryDetails/>}/>
          <Route exact path="/houses" element={<Houses/>}/>
          <Route exact path="/houses/:id" element={<House/>}/>
          <Route exact path="/houses/create" element={<CreateHouse/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
