
export function filterData(searchText, restaurents) {
    return restaurents.filter((each) =>
      each.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }