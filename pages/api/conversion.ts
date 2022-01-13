import { USDToNuggies, nuggiesToUSD } from "../../functions/nuggieQuery";

interface conversionQueries {
    from: "nugs" | "usd",
    chain: string,
    count?: number
}

export default function handler(req, res) {
    let queries: conversionQueries
    queries = {
        from: req.query.from,
        chain: req.query.chain,
        count: req.query.count ? req.query.count : 1
    }

    let result: number = (queries.from == "nugs") ? nuggiesToUSD(queries.chain, queries.count) : USDToNuggies(queries.chain, queries.count);

    //if (queries.from == "nugs") {
    //    result = nuggiesToUSD(queries.chain, queries.count);
    //} else {
    //    result = USDToNuggies(queries.chain, queries.count);
    //}

    res.status(200).json({ price : result })
}