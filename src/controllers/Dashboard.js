const getDashboard = async (req, res, next) => {
    res.status(200).json({ message: "Dashboard" });
};

export { getDashboard };
