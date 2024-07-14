import axios from "axios";
import { ListZellerCustomers } from "../queries/queries";
const {
    REACT_APP_GRAPHQL_ENDPOINT: endpoint, 
    REACT_APP_GRAPHQL_API_KEY: api_key 
} = process.env;

export const fetchCustomers = async() => {
    const result = await axios({
        url: endpoint,
        method: 'POST',
        headers: {'x-api-key': api_key},
        data: {
          query: ListZellerCustomers
        },
    });
    const { data: { data } } = result
    return data;
}