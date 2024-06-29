import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
// import LoginReport from 'LoginReport/loginReport';


// const AuthLogin = Loadable(lazy(() => import('../views/Login')));
// const AuthRegister = Loadable(lazy(() => import('../views/Register')));
const MiniAdmin = Loadable(lazy(() => import('../MiniAdmin/miniAdminMaster')));
const Master = Loadable(lazy(() => import('../master-master/master-master')));
const SuperAgent = Loadable(lazy(() => import('../SuperAgentMaster/superAgent')));
const AgentMaster = Loadable(lazy(() => import('../AgentMaster/agentMaster')));
const ClientMaster = Loadable(lazy(() => import('../ClientMaster/clientMaster')));
const AllMatchPosition = Loadable(lazy(() => import('../AllMatchPosition/allMatchPosition')));
const ActiveGames = Loadable(lazy(() => import('../ActiveGames/activeGames')));
const FinishedGames = Loadable(lazy(() => import('../FinishedGames/finishedGames')));
const CasinoDetails = Loadable(lazy(() => import('../CasinoDetails/casinoDetails')));
const ProfitLoss = Loadable(lazy(() => import('../ProfitLoss/profitLoss')));
const MyLedger = Loadable(lazy(() => import('../MyLedger/myLedger')));
const MiniAdminLedger = Loadable(lazy(() => import('../MiniAdminLedger/miniAdminLedger')));
const MasterLedger = Loadable(lazy(() => import('../MasterLedger/masterLedger')));
const SuperagentLedger = Loadable(lazy(() => import('../SuperAgentLedger/superagentLedger')));
const AgentLedger = Loadable(lazy(() => import('../AgentLedger/agentLedger')));
const ClientLedger = Loadable(lazy(() => import('../ClientLedger/clientLedger')));
const DabitCreditC = Loadable(lazy(() => import('../DabitCredit(c)/dabitCredit(c)')));
const DabitCreditA = Loadable(lazy(() => import('../DabitCredit(A)/dabitCredit(A)')));
const DabitCreditSA = Loadable(lazy(() => import('../DabitCredit(SA)/dabitCredit(SA)')));
const DabitCreditM = Loadable(lazy(() => import('../DabitCredit(M)/dabitCreditM')));
const DabitCreditSUA = Loadable(lazy(() => import('../DabitCredit(SUA)/dabitCreditSUA')));
const LoginReportt = Loadable(lazy(() => import('../LoginReport/loginReport')));
const SecureCodeReport = Loadable(lazy(() => import('../SecureCodeReport/secureCodeReport')));
const WbtSettings = Loadable(lazy(() => import('../WBT/wbt-setting')));
// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    // {
    //   path: '/application/login',
    //   element: <AuthLogin />
    // },
    // {
    //   path: '/application/register',
    //   element: <AuthRegister />
    // },
    {
      path: '/MiniAdmin/miniAdminMaster',
      element: <MiniAdmin/>
    },
    {
      path: '/master-master/master-master',
      element: <Master/>
    },
    {
      path: '/SuperAgentMaster/superAgent',
      element: <SuperAgent/>
    },
    {
      path: '/AgentMaster/agentMaster',
      element: <AgentMaster/>   
    },
    {
      path: '/ClientMaster/clientMaster',
      element: <ClientMaster/>   
    },
    {
      path: '/AllMatchPosition/allMatchPosition',
      element: <AllMatchPosition/>   
    },
    {
      path: '/ActiveGames/activeGames',
      element: <ActiveGames/>   
    },
    {
      path: '/FinishedGames/finishedGames',
      element: <FinishedGames/>   
    },
    {
      path: '/CasinoDetails/casinoDetails',
      element: <CasinoDetails/>   
    },
    {
      path: '/ProfitLoss/profitLoss',
      element: <ProfitLoss/>   
    },
    {
      path: '/MyLedger/myLedger',
      element: <MyLedger/>   
    },
    {
      path: '/MiniAdminLedger/miniAdminLedger',
      element: <MiniAdminLedger/>   
    },
    {
      path: '/MasterLedger/masterLedger',
      element: <MasterLedger/>   
    },
    {
      path: '/SuperAgentLedger/superagentLedger',
      element: <SuperagentLedger/>   
    },
    {
      path: '/AgentLedger/agentLedger',
      element: <AgentLedger/>   
    },
    {
      path: '/ClientLedger/clientLedger',
      element: <ClientLedger/>   
    },
    {
      path: '/DabitCredit(c)/dabitCredit(c)',
      element: <DabitCreditC/>   
    },
    {
      path: '/DabitCredit(A)/dabitCredit(A)',
      element: <DabitCreditA/>   
    },
    {
      path: '/DabitCredit(SA)/dabitCredit(SA)',
      element: <DabitCreditSA/>   
    },
    {
      path: '/DabitCredit(M)/dabitCredit(M)',
      element: <DabitCreditM/>   
    },
    {
      path: '/DabitCredit(SUA)/dabitCredit(SUA)',
      element: <DabitCreditSUA/>   
    },
    {
      path: '/LoginReport/loginReport',
      element: <LoginReportt/>   
    },
    {
      path: '/SecureCodeReport/secureCodeReport',
      element: <SecureCodeReport/>   
    },
    {
      path: '/WBT/wbt-setting',
      element: <WbtSettings/>   
    }
  ]
};

export default AuthenticationRoutes;
