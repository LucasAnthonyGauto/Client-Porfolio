import { useState } from "react";

const useFilter = (dataFilter) => {
    const [filterKeysWords, setfilterKeysWords] = useState("");

    const searWords = (item) => {
        setfilterKeysWords(document.getElementsByName(item)[0].value.toLowerCase().split(' ').join(''));
    };

    const filterReturn = dataFilter.filter((key) => {
        return key?.keyWords?.includes(filterKeysWords) ? key : null
    });

    return {
        filterReturn,
        searWords
    };
};

export default useFilter;