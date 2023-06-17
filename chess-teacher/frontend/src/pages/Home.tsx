import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="text-center text-light">Welcome to Chess Teacher</h1>
            <div className="container-fluid h-75">
                <div className="d-flex flex-row text-center my-5">
                    <div className="card w-50">
                        <div className="card-body w-100">
                            <h5 className="card-title fs-3 w-100">Practice</h5>
                            <p className="card-text fs-5">
                                practice to play new openings and stratergies at
                                the same time teach them to your fans with
                                helpful navigating system.
                            </p>
                            <Link
                                className="btn btn-dark fs-5 w-25"
                                to="/practice"
                            >
                                Practice
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse text-center my-5">
                    <div className="card w-50">
                        <div className="card-body w-100">
                            <h5 className="card-title fs-3 w-100">Teach</h5>
                            <p className="card-text fs-5">
                                Teach to your friend, student while playing a
                                game
                            </p>
                            <Link
                                className="btn btn-dark fs-5 w-25"
                                to="/teach"
                            >
                                Teach
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
