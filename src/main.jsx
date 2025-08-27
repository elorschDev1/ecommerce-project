import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Scifi from './components/Scifi.jsx';
import Action from './components/Action.jsx';
import Adventure from './components/Adventure.jsx';
import Comedy from './components/Comedy.jsx';
import Horror from './components/Horror.jsx';
import Cart from './components/Cart.jsx';
import Account from './components/Account.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUp from './components/SignUp.jsx';
import InceptionDetails from './components/InceptionDetails.jsx';
import MachinaDetails from './components/MachinaDetails.jsx';
import ArrivalDetails from './components/ArrivalDetails.jsx';
import HerDetails from './components/HerDetails.jsx';
import MatrixDetails from './components/MatrixDetails.jsx';
import EdgeOfTomorrowDetails from './components/EdgeOfTomorrowDetails.jsx';
import WrathofManDetails from './components/WrathofManDetails.jsx';
import OperationFortuneDetails from './components/OperationFortuneDetails.jsx';
import FalconRisingDetails from './components/FalconRisingDetails.jsx';
import BloodAndBoneDetails from './components/BloodAndBoneDetails.jsx';
import HeartOfStoneDetails from './components/HeartOfStoneDetails.jsx';
import DamagedDetails from './components/DamagedDetails.jsx';
import HiddenStrikeDetails from './components/HiddenStrikeDetails.jsx';
import YearOneDetails from './components/YearOneDetails.jsx';
import TheLostOneDetails from './components/TheLostOneDetails.jsx';
import DamselDetails from './components/DamselDetails.jsx';
import TripleFrontierDetails from './components/TripleFrontierDetails.jsx';
import TheRevenantDetails from './components/TheRevenantDetails.jsx';
import TheChangeUpDetails from './components/TheChangeUpDetails.jsx';
import TheOtherGuysDetails from './components/TheOtherGuysDetails.jsx';
import GrownUpsDetails from './components/GrownUpsDetails.jsx';
import FamilyAffairDetails from './components/FamilyAffairDetails.jsx';
import LiftDetails from './components/LiftDetails.jsx';
import UpgradedDetails from './components/UpgradedDetails.jsx';
import TheWatchersDetails from './components/TheWatchersDetails.jsx';
import QuietPlaceDetails from './components/QuietPlaceDetails.jsx';
import ImmaculateDetails from './components/ImmaculateDetails.jsx';
import ArcadianDetails from './components/ArcadianDetails.jsx';
import StingDetails from './components/StingDetails.jsx';
import AbigailDetails from './components/AbigailDetails.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import SecurityResponseConfirmation from './components/SecurityResponseConfirmation.jsx';
import ResetPassword from './components/ResetPassword.jsx';
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
      },
      {
        path:"/forgotPassword",
        element:<ForgotPassword/>
      },
      {
        path:"/responseConfirmation",
        element:<SecurityResponseConfirmation/>
      },
      {
        path:"/resetPassword",
        element:<ResetPassword/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
