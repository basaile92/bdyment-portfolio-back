class YearUtils {

     static compareItemsByStartYearAndEndYearAndIsCurrent = (item1, item2) => {
        if(item1.isCurrent)
            return -1
        if(item2.isCurrent)
            return 1
        const endYearComparison = item2.endYear - item1.endYear;
        if(endYearComparison == 0)
            return item2.startYear - item1.startYear

        return endYearComparison;
    }

    static filterItemsByYear = (item, year) => {
         return item.startYear <= year && (item.isCurrent && year <= YearUtils.getCurrentYear() || (item.endYear !== undefined && item.endYear >= year))
    }

    static getCurrentYear = () => {
        return new Date().getFullYear();
    }
}

export default YearUtils
