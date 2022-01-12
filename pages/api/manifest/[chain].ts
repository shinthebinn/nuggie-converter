import { chainQuery } from "../../../functions/nuggieQuery";

export default function handler(req, res) {
    const { chain } = req.query;
    let data = chainQuery(chain);

    if (!data) res.status(400).send("Restaurant not found");

    res.status(200).json(data);
}