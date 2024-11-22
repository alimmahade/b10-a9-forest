import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyAuthProviderContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(MyAuthProviderContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User sign Out Successfully");
      })
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="text-xl">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="text-xl">
          Register
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile" className="text-xl">
              User Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar sm:navbar-center flex justify-between">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl hidden md:hidden lg:flex">
          Forest
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-end">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="">
        {user && user?.email ? (
          <>
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex">
                <p>User : {user?.displayName}</p>
              </div>
              <div className="hidden lg:flex">
                <img
                  className="w-14 rounded-full border"
                  title={user?.displayName}
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <div>
              <NavLink onClick={handleSignOut} className="btn">
                Sign Out
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

//  {
//   "uid": "NT3pKfZMXUW0wFjG4IRsH0TZON92",
//   "email": "alim.mahade@gmail.com",
//   "emailVerified": true,
//   "displayName": "Mehedi",
//   "isAnonymous": false,
//   "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocI-bzgUPXoMauWpYQUVC3b2tI1SSfmkZs-yF5f-ruofDg14O1DZ=s96-c",
//   "providerData": [
//       {
//           "providerId": "google.com",
//           "uid": "115069540593721193669",
//           "displayName": "Mehedi",
//           "email": "alim.mahade@gmail.com",
//           "phoneNumber": null,
//           "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocI-bzgUPXoMauWpYQUVC3b2tI1SSfmkZs-yF5f-ruofDg14O1DZ=s96-c"
//       }
//   ],
//   "stsTokenManager": {
//       "refreshToken": "AMf-vBzlWcHbO6O-eEHe0i-02WIPOvarmXuyNicYyAw3cQToSbCOg6aat085I5n7bBHg44a4N5aDsAROfS_A5sMbz2wDKtdfkOfkl0Vb7VGZKY3i__-zkvK-cy0S0CrUWOObteQBpqLzHMuUneOxIGtUvG52nMnqQEKydHPKi5Or6f3hvfU5qhPO2mktgslwGdGEgdohjEv2BLAkgbIpF77QT-dbtagSoyGuvG9t9QVmffKwy8xd9Pe1LDt5TFEfO24NEAjGMr2H91dC-g4tsYDrBx68Ac6jAG4gBG48s66x_zwr1QzeEvSx3nrOEp4AK3u4893WlmK2AxRlU62OU_KYUY-cmDS47W4ca2UMaaoTNg9zVlIq2LW32XngDubEiCUyo-Tdui0oDsEA92j0NExQZyfHErqYCzw-8PhKgewupZg4zQ1cG14",
//       "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNTIxYmY1ZjdhNDAwOGMzYmQ3MjFmMzk2OTcwOWI1MzY0MzA5NjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWVoZWRpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0ktYnpnVVBYb01hdVdwWVFVVkMzYjJ0STFTU2Zta1pzLXlGNWYtcnVvZkRnMTRPMURaPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2IxMC1hOS1mb3Jlc3QiLCJhdWQiOiJiMTAtYTktZm9yZXN0IiwiYXV0aF90aW1lIjoxNzMxOTEzOTkzLCJ1c2VyX2lkIjoiTlQzcEtmWk1YVVcwd0ZqRzRJUnNIMFRaT045MiIsInN1YiI6Ik5UM3BLZlpNWFVXMHdGakc0SVJzSDBUWk9OOTIiLCJpYXQiOjE3MzE5MTM5OTMsImV4cCI6MTczMTkxNzU5MywiZW1haWwiOiJhbGltLm1haGFkZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNTA2OTU0MDU5MzcyMTE5MzY2OSJdLCJlbWFpbCI6WyJhbGltLm1haGFkZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.YD_HZeEfFQwY7Pd9GZYmyTZ3fydTux8m2HdENz6_CvRVffMnqmbOD1sXellzLsJ-lbHBWgFyg22zEymbx61FFnZyU3q0U10nNKC5l17uI4zzcS-4vQQQs32EE277v2WF_w0Oc-C8OHw3oPFV9AkaSsdJTuyXdRDydO_Ja1w1B6HOKgHWJ_BwalLMw8pk92MXSeYl1xulYegDJFQ3JhycjdY2kYSp5ZB9bLkIZq8iUvo3fGyumHsfzsvOUia6lqKISFI0jW1DWjnfAKh_otx4SLqpFbKcNoAK6PqpMuOYto-HXBT5WRVKzhg5qjtlvgSp7hLSQTl6xbInRMoKMkJ9aA",
//       "expirationTime": 1731917593443
//   },
//   "createdAt": "1731913993173",
//   "lastLoginAt": "1731913993174",
//   "apiKey": "AIzaSyDO27ePuebMuMhsPs_Kanw3Gc0b2DeAdh8",
//   "appName": "[DEFAULT]"
// }
