import React, { useState, useEffect } from 'react';

import RouterContainer from './RouterContainer';
import PageLoader from './PageLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './Themecontext';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            <div>
                <ThemeProvider>
                    {isLoading ? <PageLoader /> : null}

                    <div>
                        <RouterContainer />
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
