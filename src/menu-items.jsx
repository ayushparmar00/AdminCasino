// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon
};

// ==============================|| MENU ITEMS ||============================== //

// eslint-disable-next-line
export default {
  items: [
   
    {
      id: 'pages',
      title: 'ADMIN PANEL',
      // caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   icon: icons['ChromeReaderModeOutlinedIcon']
        // },
        {
          id: 'auth',
          title: 'Admin Details',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'MiniAdmin Master',
              type: 'item',
              url: '/MiniAdmin/miniAdminMaster'
            },
            {
              id: 'register',
              title: 'Master Master',
              type: 'item',
              url: '/master-master/master-master'
            },
            {
              id: 'register',
              title: 'Super Agent Master',
              type: 'item',
              url: '/SuperAgentMaster/superAgent'
            },
            {
              id: 'register',
              title: 'Agent Master',
              type: 'item',
              url: '/AgentMaster/agentMaster'
            },
            {
              id: 'register',
              title: 'Client Master',
              type: 'item',
              url: '/ClientMaster/clientMaster'
            }
          ]
        },
        {
          id: 'auth',
          title: 'Sports-Betting',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'All Match Position',
              type: 'item',
              url: '/AllMatchPosition/allMatchPosition'
            },
            {
              id: 'register',
              title: 'Active Games',
              type: 'item',
              url: '/ActiveGames/activeGames'
            },
            {
              id: 'register',
              title: 'Finished Games',
              type: 'item',
              url: '/FinishedGames/finishedGames'
            },
            {
              id: 'register',
              title: 'Casino Details',
              type: 'item',
              url: '/CasinoDetails/casinoDetails'
            }
          ]
        },

        {
          id: 'auth',
          title: 'Ledger',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'Profit/Loss',
              type: 'item',
              url: '/ProfitLoss/profitLoss'
            },
            {
              id: 'register',
              title: 'My Ledger',
              type: 'item',
              url: '/MyLedger/myLedger'
            },
            {
              id: 'register',
              title: 'MiniAdmin Ledger',
              type: 'item',
              url: '/MiniAdminLedger/miniAdminLedger'
            },
            {
              id: 'register',
              title: 'Master Ledger',
              type: 'item',
              url: '/MasterLedger/masterLedger'
            },
            {
              id: 'register',
              title: 'Superagent Ledger',
              type: 'item',
              url: '/SuperAgentLedger/superagentLedger'
            },
            {
              id: 'register',
              title: 'Agent Ledger',
              type: 'item',
              url: '/AgentLedger/agentLedger'
            },
            {
              id: 'register',
              title: 'Client Ledger',
              type: 'item',
              url: '/ClientLedger/clientLedger'
            }
          ]
        },
        {
          id: 'auth',
          title: 'Cash Transancation',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'Dabit/Credit Entery(C)',
              type: 'item',
              url: '/DabitCredit(c)/dabitCredit(c)'
            },
            {
              id: 'register',
              title: 'Dabit/Credit Entery(A)',
              type: 'item',
              url: '/DabitCredit(A)/dabitCredit(A)'
            },
            {
              id: 'register',
              title: 'Dabit/Credit Entery(SA)',
              type: 'item',
              url: '/DabitCredit(SA)/dabitCredit(SA)'
            },
            {
              id: 'register',
              title: 'Dabit/Credit Entery(M)',
              type: 'item',
              url: '/DabitCredit(M)/dabitCredit(M)' 
            },
            {
              id: 'register',
              title: 'Dabit/Credit Entery(SUA)',
              type: 'item',
              url: '/DabitCredit(SUA)/dabitCredit(SUA)'
            }
          ]
        },

        {
          id: 'auth',
          title: 'Report',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login-1',
              title: 'Login Report',
              type: 'item',
              url: '/LoginReport/loginReport'
            },
            {
              id: 'register',
              title: 'Secure Code Report',
              type: 'item',
              url: '/SecureCodeReport/secureCodeReport'
            }
            // {
            //   id: 'login',
            //   title: 'Secure Code Report',
            //   type: 'item',
            //   url: '/application/login'
            // },
            // {
            //   id: 'register',
            //   title: 'Secure Code Report',
            //   type: 'item',
            //   url: '/application/register'
            // },
          ]
        },
        {
          id: 'dashboard',
          title: 'WBT Setting',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/WBT/wbt-setting'
        }
      ]
    },
  ]
};
