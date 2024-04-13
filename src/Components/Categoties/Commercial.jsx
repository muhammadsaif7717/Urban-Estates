import { Helmet } from "react-helmet-async";


const Commercial = () => {
    return (
        <div>
            <Helmet>
                <title>Urban Estates | Commercial</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Commercial</h1>
            <div className="text-center h-[200px] flex items-center justify-center">
                <h1>Coming Soon...</h1>
            </div>
        </div>
    );
};

export default Commercial;