import Layout from './pages/Layout.jsx';
import ErrorPage from './pages/Layout.jsx';
import MapPage from './pages/MapPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventPage from './pages/EventPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([	
    {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <MapPage />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/events",
                    element: <EventsPage />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/event/:id",
                    element: <EventPage />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/location/:id",
                    element: <LocationPage />,
                    errorElement: <ErrorPage />
                }
            ],
        },
    ])
    
    export default router;
