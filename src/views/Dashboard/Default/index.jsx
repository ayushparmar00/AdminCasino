import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';

//project import
import SalesLineCard from 'views/Dashboard/card/SalesLineCard';
import SalesLineCardData from 'views/Dashboard/card/sale-chart-1';
import RevenuChartCard from 'views/Dashboard/card/RevenuChartCard';
import RevenuChartCardData from 'views/Dashboard/card/revenu-chart';
import ReportCard from './ReportCard';
import { Link } from 'react-router-dom';
import { gridSpacing } from 'config.js';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/detailsAdmin" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="$30200"
              // secondary="Admin Details"
              color={theme.palette.error.main}
              footerData="Admin Details"
              iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/sportsDetails" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="145"
              // secondary="Sports Details"
              color={theme.palette.error.main}
              footerData="Sports Details"
              iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/ledgerDetails" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="290+"
              // secondary="Ledger"
              color={theme.palette.error.main}
              footerData="Ledger"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/cashTransections" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Cash Transection"
              color={theme.palette.error.main}
              footerData="Cash Transection"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/WBT/wbt-setting" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Setting"
              color={theme.palette.error.main}
              footerData="Setting"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Logout"
              color={theme.palette.error.main}
              footerData="Logout"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <hr className="custom-hr" />
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="Demo"
              // secondary="You Are Admin"
              color={theme.palette.error.main}
              footerData="You Are Admin"
              iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="200"
              // secondary="Chips"
              color={theme.palette.error.main}
              footerData="Chips"
              iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="0"
              // secondary="Members"
              color={theme.palette.error.main}
              footerData="Members"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="96"
              // secondary="My Share"
              color={theme.palette.error.main}
              footerData="My Share"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="4"
              // secondary="Company Share"
              color={theme.palette.error.main}
              footerData="Company Share"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="2 %"
              // secondary="Match Comminssion"
              color={theme.palette.error.main}
              footerData="Match Comminssion"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ReportCard
                primary="3 %"
                // secondary="Session Comminssion"
                color={theme.palette.error.main}
                footerData="Session Comminssion"
                iconPrimary={ThumbUpAltTwoTone}
              // iconFooter={TrendingUpIcon}
              />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="Rules"
              // secondary="Session Comminssion"
              color={theme.palette.error.main}
              footerData="Session Comminssion"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
             </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
