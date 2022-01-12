import { USDToNuggies } from "../../functions/nuggieQuery";

export default function handler(req, res) {
    let money: number;

    if (!req.query.chain) {
        res.status(400).send("invalid restaurant");
    }
    if (!req.query.money) money = 1; else money = req.query.money

    let result: number = USDToNuggies(req.query.chain, money);

    res.status(200).json({ nugs : result })
}