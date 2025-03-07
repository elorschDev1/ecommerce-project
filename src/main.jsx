import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Scifi from './Scifi.jsx';
import Action from './Action.jsx';
import Adventure from './Adventure.jsx';
import Comedy from './Comedy.jsx';
import Horror from './Horror.jsx';
import Cart from './Cart.jsx';
import Account from './Account.jsx';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUp from './SignUp.jsx';
import InceptionDetails from './InceptionDetails.jsx';
import MachinaDetails from './MachinaDetails.jsx';
import ArrivalDetails from './ArrivalDetails.jsx';
import HerDetails from './HerDetails.jsx';
import MatrixDetails from './MatrixDetails.jsx';
import EdgeOfTomorrowDetails from './EdgeOfTomorrowDetails.jsx';
import WrathofManDetails from './WrathofManDetails.jsx';
import OperationFortuneDetails from './OperationFortuneDetails.jsx';
import FalconRisingDetails from './FalconRisingDetails.jsx';
import BloodAndBoneDetails from './BloodAndBoneDetails.jsx';
import HeartOfStoneDetails from './HeartOfStoneDetails.jsx';
import DamagedDetails from './DamagedDetails.jsx';
import HiddenStrikeDetails from './HiddenStrikeDetails.jsx';
import YearOneDetails from './YearOneDetails.jsx';
import TheLostOneDetails from './TheLostOneDetails.jsx';
import DamselDetails from './DamselDetails.jsx';
import TripleFrontierDetails from './TripleFrontierDetails.jsx';
import TheRevenantDetails from './TheRevenantDetails.jsx';
import TheChangeUpDetails from './TheChangeUpDetails.jsx';
import TheOtherGuysDetails from './TheOtherGuysDetails.jsx';
import GrownUpsDetails from './GrownUpsDetails.jsx';
import FamilyAffairDetails from './FamilyAffairDetails.jsx';
import LiftDetails from './LiftDetails.jsx';
import UpgradedDetails from './UpgradedDetails.jsx';
import TheWatchersDetails from './TheWatchersDetails.jsx';
import QuietPlaceDetails from './QuietPlaceDetails.jsx';
import ImmaculateDetails from './ImmaculateDetails.jsx';
import ArcadianDetails from './ArcadianDetails.jsx';
import StingDetails from './StingDetails.jsx';
import AbigailDetails from './AbigailDetails.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/scifi",
        element:<Scifi/>
      },
      {
        path:"/action",
        element:<Action/>
      },
      {
        path:"/adventure",
        element:<Adventure/>
      },
      {
        path:"/comedy",
        element:<Comedy/>
      },
      {
        path:"/horror",
        element:<Horror/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/inceptionDetails",
        element:<InceptionDetails/>
      },
      {
        path:"/exMachinaDetails",
        element:<MachinaDetails/>
      },
      {
        path:"/arrivalDetails",
        element:<ArrivalDetails/>
      },
      {
        path:"/herDetails",
        element:<HerDetails/>
      },
      {
        path:"/matrixDetails",
        element:<MatrixDetails/>
      },
      {
        path:"/edgeDetails",
        element:<EdgeOfTomorrowDetails/>
      },
      {
        path:"/wrathDetails",
        element:<WrathofManDetails/>
      },
      {
        path:"/operationDetails",
        element:<OperationFortuneDetails/>
      },
      {
        path:"/falconDetails",
        element:<FalconRisingDetails/>
      },
      {
        path:"/bloodBoneDetails",
        element:<BloodAndBoneDetails/>
      },
      {
        path:"/heartDetails",
        element:<HeartOfStoneDetails/>
      },
      {
        path:"/damagedDetails",
        element:<DamagedDetails/>
      },
      {
        path:"/hiddenStrikeDetails",
        element:<HiddenStrikeDetails/>
      },
      {
        path:"/yearOneDetails",
        element:<YearOneDetails/>
      },
      {
        path:"/lostOneDetails",
        element:<TheLostOneDetails/>
      },
      {
        path:"/damselDetails",
        element:<DamselDetails/>
      },
      {
        path:"/frontierDetails",
        element:<TripleFrontierDetails/>
      },
      {
        path:"/revenantDetails",
        element:<TheRevenantDetails/>
      },
      {
        path:"/changeUpDetails",
        element:<TheChangeUpDetails/>
      },
      {
        path:"/guysDetails",
        element:<TheOtherGuysDetails/>
      },
      {
        path:"/grownUpsDetails",
        element:<GrownUpsDetails/>
      },
      {
        path:"/familyAffairDetails",
        element:<FamilyAffairDetails/>
      },
      {
        path:"/liftDetails",
        element:<LiftDetails/>
      },
      {
        path:"/upgradedDetails",
        element:<UpgradedDetails/>
      },
      {
        path:"/watchersDetails",
        element:<TheWatchersDetails/>
      },
      {
        path:"/quietPlaceDetails",
        element:<QuietPlaceDetails/>
      },
      {
       path:"/immaculateDetails",
       element:<ImmaculateDetails/>
      },
      {
        path:"/arcadianDetails",
        element:<ArcadianDetails/>
      },
      {
        path:"/stingDetails",
        element:<StingDetails/>
      },
      {
        path:"/abigailDetails",
        element:<AbigailDetails/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
