import { useEffect, useState } from "react";
import { Select, Button } from "semantic-ui-react";
// import "./Search.css";

const Search = (props) => {
    const [myOpt, setMyOpt] = useState([]);
    const [dept, setDept] = useState("");
    const [org, setOrg] = useState("");

    const optionsType = [
        { value: "cpam", key: "cpam", text: "Caisse primaire d'assurance maladie" },
        { value: "cci", key: "cci", text: "Chambre de commerce et d'industrie" },
        { value: "crous", key: "crous", text: "Crous et ses antennes" },
    ];

    useEffect(() => {
        fetch("https://geo.api.gouv.fr/departements").then((data) => {
            data.json().then((jsondata) => {
                const deptOption = jsondata.map(({ nom, code }) => ({
                    value: code,
                    key: code,
                    text: nom,
                }));
                setMyOpt(deptOption);
            });
        });
    }, []);

    return (
        <div className="search">
            <Select
                name=""
                id=""
                placeholder="Choose a department"
                options={myOpt}
                value={dept}
                onChange={(e, data) => setDept(data.value)}
            />
            <Select
                name=""
                id=""
                placeholder="Choose an administration"
                options={optionsType}
                value={org}
                onChange={(e, data) => setOrg(data.value)}
            />
            <Button primary onClick={() => props.onSearch(dept, org)}>
                Search
            </Button>
            <Button
                secondary
                onClick={() => {
                    props.onEmpty();
                    setDept("");
                    setOrg("");
                }}
            >
                Clear
            </Button>
        </div>
    );
};

export default Search;