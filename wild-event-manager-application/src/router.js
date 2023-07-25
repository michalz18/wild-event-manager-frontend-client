import Layout from './pages/Layout';
import ErrorPage from './pages/Layout';
import MapPage from './pages/MapPage';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import LocationPage from './pages/LocationPage';
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
