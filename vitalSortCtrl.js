const vitalSort = require("../model/ipdVitalmodel");
const IPD = require("../model/ipdModel");

exports.getipdVitals = async (req, res) => {
    const { ipdID } = req.params;

    try {
        const ipdVital = await ipdVitalmodel.find({ ipdID: ipdID }).sort({ datetime: -1 });

        res.status(200).json({ success: true, data: ipdVital });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
};
