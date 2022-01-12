import { dataQuery } from "../../../functions/nuggieQuery";

export default function handler(req, res) {
    res.status(200).json(dataQuery());
}