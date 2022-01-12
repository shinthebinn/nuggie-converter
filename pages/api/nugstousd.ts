import { nuggiesToUSD } from "../../functions/nuggieQuery"

export default function handler(req, res) {
    let count: number;

    if (!req.query.chain) {
        res.status(400).send("invalid restaurant");
    }
    if (!req.query.count) {
        count = 1;
    } else count = req.query.count;

    let result: number = nuggiesToUSD(req.query.chain, count);

    res.status(200).json({ price : result})
}